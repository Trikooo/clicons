import fs from "fs";
import path from "path";
const filePath = path.join(process.cwd(), "data", "metadata.json");
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

for (const icon of data.icons) {
  const spaced = icon.name
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/(\d+)/g, " $1")
    .trim()
    .toLowerCase();

  if (!icon.tags.includes(spaced)) {
    icon.tags.push(spaced);
  }
}

fs.writeFileSync("icons.json", JSON.stringify(data, null, 2));
