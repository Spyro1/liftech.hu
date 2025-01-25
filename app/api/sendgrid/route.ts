import sendgrid from "@sendgrid/mail";
import mime from "mime";
import { NextRequest, NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const file = formData.get("file") as Blob;
  const fileName = formData.get("file_name") as string;
  if (!file || !fileName) {
    return NextResponse.json(
      { error: "File blob is required." },
      { status: 400 }
    );
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  try {
    if(formData){
      await sendgrid.send({
        to: "kurczv@gmail.com",
        from: "info@liftech.hu",
        subject: `Tárgy: ${formData.get("subject")}`,
        attachments: [
          {
            content: buffer.toString("base64"),
            filename: fileName,
            type: file.type,
            disposition: "attachment"
          }
        ],
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="hu">
        <head>
          <meta charset="utf-8">

          <title>The HTML5 Herald</title>
          <meta name="description" content="The HTML5 Herald">
          <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

          <link rel="stylesheet" href="css/styles.css?v=1.0">

        </head>
        <body>
          <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                </div>
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>${formData.get("name")} kitöltötte az űrlapot,  az email címe: ${formData.get("email")}</h3>
                <h3>Telefonszáma: ${formData.get("phone")}</h3>
                <div style="font-size: 16px;">
                <p>Üzenet:</p>
                <p>${formData.get("message")}</p>
                <br>
                </div>
                </div>
        </body>
        </html>`,
      });
    }
  }
  catch (e) {
      return NextResponse.json({error: "Internal Server Error"}, {status: 500});
  }
  return NextResponse.json({location: '/confirmation'}, {status: 303});
  }
