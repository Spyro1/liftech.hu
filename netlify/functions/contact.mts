const MAX_TOTAL_BYTES = 5.5 * 1024 * 1024;

const esc = (v: FormDataEntryValue | null) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export default async (req: Request) => {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

  const form = await req.formData();
  if (form.get("bot-field")) return Response.json({ ok: true });

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const subject = String(form.get("subject") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  if (!name || !email || !subject || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const files = form
    .getAll("files")
    .filter((f): f is File => f instanceof File && f.size > 0);
  if (files.reduce((sum, f) => sum + f.size, 0) > MAX_TOTAL_BYTES) {
    return Response.json({ error: "Attachments too large" }, { status: 413 });
  }
  if (files.some((f) => !f.type.startsWith("image/"))) {
    return Response.json({ error: "Only images allowed" }, { status: 400 });
  }

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()).toString("base64"),
    })),
  );

  const html = `<div style="font-family:Helvetica,Arial,sans-serif;max-width:600px;color:#222">
    <h2 style="margin:0 0 16px">Új üzenet a liftech.hu oldalról</h2>
    <table style="border-collapse:collapse;width:100%">
      <tr><td style="padding:6px 12px 6px 0;color:#666;width:110px">Név</td><td>${esc(name)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#666">Email</td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#666">Telefon</td><td>${esc(form.get("phone"))}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#666">Tárgy</td><td>${esc(subject)}</td></tr>
    </table>
    <p style="margin:24px 0 8px"><strong>Üzenet</strong></p>
    <p style="white-space:pre-line;margin:0">${esc(message)}</p>
    ${attachments.length ? `<p style="margin:24px 0 0;color:#666">Csatolt képek: ${attachments.length} db</p>` : ""}
  </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Netlify.env.get("RESEND_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: Netlify.env.get("CONTACT_FROM_EMAIL") || "Liftech weboldal <onboarding@resend.dev>",
      to: (Netlify.env.get("CONTACT_TO_EMAIL") ?? "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      reply_to: email,
      subject: `Új üzenet: ${subject}`,
      html,
      attachments,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
  return Response.json({ ok: true });
};

export const config = { path: "/api/contact" };
