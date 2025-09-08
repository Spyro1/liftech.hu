import formidable from "formidable";
import mime from "mime";
import type { NextApiRequest } from "next";

export const parseForm = async (
    req: NextApiRequest
  ): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
    return new Promise(async (resolve, reject) => {
      const form = formidable({
        maxFiles: 2,
        maxFileSize: 20 * 1024 * 1024, // 20mb
        filename: (_name, _ext, part) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
          const filename = `${part.name || "unknown"}-${uniqueSuffix}.${
            mime.getExtension(part.mimetype || "") || "unknown"
          }`;
          return filename;
        },
        filter: (part) => {
          return (
            part.name === "media" && (part.mimetype?.includes("image") || false)
          );
        },
      });
  
      form.parse(req, function (err, fields, files) {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });
  };