const esc = (v: FormDataEntryValue | null) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const recaptchaOk = async (token: string) => {
  const res = await fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/${Netlify.env.get("RECAPTCHA_PROJECT_ID")}/assessments?key=${Netlify.env.get("RECAPTCHA_API_KEY")}`,
    {
      method: "POST",
      body: JSON.stringify({
        event: { token, siteKey: Netlify.env.get("VITE_RECAPTCHA_SITE_KEY"), expectedAction: "SUBMIT" },
      }),
    },
  );
  const a = await res.json();
  return a.tokenProperties?.valid && a.riskAnalysis?.score >= 0.5;
};

export default async (req: Request) => {
  const form = await req.formData();

  if (!(await recaptchaOk(String(form.get("token"))))) {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }

  const files = form.getAll("files") as File[];
  const attachments = await Promise.all(
    files.map(async (file) => ({
      content: Buffer.from(await file.arrayBuffer()).toString("base64"),
      filename: file.name,
      type: file.type,
      disposition: "attachment",
    })),
  );

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Netlify.env.get("SENDGRID_API_KEY")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: "labasattila@gmail.com" }] }],
      from: { email: "info@liftech.hu" },
      subject: `Tárgy: ${form.get("subject")}`,
      content: [
        {
          type: "text/html",
          value: `<div style="margin-left: 19px;margin-right: 20px;font-family: 'helvetica', 'ui-sans';">
            <h2>${esc(form.get("name"))} kitöltötte az űrlapot, az email címe: ${esc(form.get("email"))}</h2>
            <h2>Telefonszáma: ${esc(form.get("phone"))}</h2>
            <div style="font-size: 15px;">
              <p>Üzenet:</p>
              <p>${esc(form.get("message"))}</p>
            </div>
          </div>`,
        },
      ],
      attachments,
    }),
  });

  if (!res.ok) return Response.json({ error: "Internal Server Error" }, { status: 500 });
  return Response.json({ location: "/confirmation" });
};
