import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "counter.json");

  let data = { views: 0 };

  // Read counter file
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, "utf8");
    data = JSON.parse(fileData);
  }

  // Update views
  data.views += 1;

  // Save file
  fs.writeFileSync(filePath, JSON.stringify(data));

  res.status(200).json({ views: data.views });
}
