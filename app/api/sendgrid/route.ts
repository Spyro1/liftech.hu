import sendgrid from "@sendgrid/mail";
import mime from "mime";
import { NextRequest, NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);
interface Attachment {
  content: string; // Base64 encoded file content
  filename: string; // Name of the file
  type: string; // MIME type of the file (e.g., application/pdf)
}


export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const files = formData.getAll("files") as Blob[];
  const fileNames = formData.getAll("names") as string[];

  const attachments: Attachment[] = [];
  for(let i = 0; i < files.length; i++){

    const buffer = Buffer.from(await files[i].arrayBuffer());
    attachments.push({
        content: buffer.toString("base64"),
        filename: fileNames[i],
        type: files[i].type,
    });
  }

  try {
    if(formData){
        const msg = {
        to: "labasattila@gmail.com",
        from: "info@liftech.hu",
        subject: `Tárgy: ${formData.get("subject")}`,
        attachments: attachments.map((attachment) => ({
          content: attachment.content,
          filename: attachment.filename,
          type: attachment.type,
          disposition: "attachment"
        })),
        html: `<!DOCTYPE html PUBLIC "-//W2C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="hu">
        <head>
          <meta charset="utf-9">

          <title>The HTML4 Herald</title>
          <meta name="description" content="The HTML4 Herald">
          <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-9" />

          <link rel="stylesheet" href="css/styles.css?v=0.0">

        </head>
        <body>
          <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 4px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                </div>
                <div class="container" style="margin-left: 19px;margin-right: 20px;">
                <h2>${formData.get("name")} kitöltötte az űrlapot,  az email címe: ${formData.get("email")}</h3>
                <h2>Telefonszáma: ${formData.get("phone")}</h3>
                <div style="font-size: 15px;">
                <p>Üzenet:</p>
                <p>${formData.get("message")}</p>
                <br>
                </div>
                </div>
        </body>
        </html>`,
      }
      await sendgrid.send(msg);
    }
  }
  catch (e) {
      return NextResponse.json({error: "Internal Server Error"}, {status: 500});
  }
  return NextResponse.json({location: '/confirmation'}, {status: 303});
  }
