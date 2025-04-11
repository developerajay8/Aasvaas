import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// Ensure directory exists
const ensureDirectoryExists = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

export async function POST(req: Request) {
  const formData = await req.formData();
  const heading = formData.get("heading") as string;
  const date = formData.get("date") as string;
  const context = formData.get("context") as string;
  const image = formData.get("image") as File;

  if (!heading || !date || !context || !image) {
    return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
  }

  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  ensureDirectoryExists(uploadsDir);

  const buffer = Buffer.from(await image.arrayBuffer());
  const imageName = `${Date.now()}-${image.name}`;
  const uploadPath = path.join(uploadsDir, imageName);
  fs.writeFileSync(uploadPath, buffer);

  const imageUrl = `/uploads/${imageName}`;
  const newItem = { heading, date, context, imageUrl };

  const dataDir = path.join(process.cwd(), "data");
  const dataPath = path.join(dataDir, "news.json");

  ensureDirectoryExists(dataDir);

  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify([], null, 2));
  }

  const existingData = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  existingData.push(newItem);
  fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2));

  return NextResponse.json(newItem, { status: 200 });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const dataPath = path.join(process.cwd(), "data", "news.json");

  if (!fs.existsSync(dataPath)) {
    return NextResponse.json([], { status: 200 });
  }

  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

  if (id !== null) {
    const newsItem = data[parseInt(id)];
    if (!newsItem) {
      return NextResponse.json({ error: "News not found" }, { status: 404 });
    }
    return NextResponse.json(newsItem, { status: 200 });
  }

  return NextResponse.json(data, { status: 200 });
}
