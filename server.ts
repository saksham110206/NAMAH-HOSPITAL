import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(process.cwd(), "images.json");

// Ensure data file exists with empty array if not present
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]), "utf-8");
}

// Support large payloads for base64 clinical/medical images
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// API Endpoint: Get all images (ordered chronologically)
app.get("/api/images", (req, res) => {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    const images = JSON.parse(data);
    res.json(images);
  } catch (error) {
    console.error("Error reading images from file system:", error);
    res.status(500).json({ error: "Failed to load clinical records from server database." });
  }
});

// API Endpoint: Create / Save new image and comments
app.post("/api/images", (req, res) => {
  try {
    const newImage = req.body;
    if (!newImage || !newImage.id || !newImage.imageData) {
      return res.status(400).json({ error: "Invalid image record payload." });
    }

    const data = fs.readFileSync(DATA_FILE, "utf-8");
    const images = JSON.parse(data);

    // Add new image record
    images.push(newImage);

    fs.writeFileSync(DATA_FILE, JSON.stringify(images, null, 2), "utf-8");
    res.status(201).json({ status: "success", id: newImage.id });
  } catch (error) {
    console.error("Error writing new image to file system:", error);
    res.status(500).json({ error: "Failed to save clinical record to server database." });
  }
});

// API Endpoint: Delete image record by ID
app.delete("/api/images/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    let images = JSON.parse(data);

    const initialLength = images.length;
    images = images.filter((img: any) => img.id !== id);

    if (images.length === initialLength) {
      return res.status(404).json({ error: "Image record not found." });
    }

    fs.writeFileSync(DATA_FILE, JSON.stringify(images, null, 2), "utf-8");
    res.json({ status: "success" });
  } catch (error) {
    console.error("Error deleting image from file system:", error);
    res.status(500).json({ error: "Failed to delete clinical record from server database." });
  }
});

// Start server and handle Vite environment
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Namaha Hospital Full-Stack Server] Server active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
