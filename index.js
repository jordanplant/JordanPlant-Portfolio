import express from "express";
import dotenv from "dotenv";
import createApp from "./Server/server.js";
dotenv.config(); // Load environment variables from .env file

const app = express();

const PORT = process.env.PORT || 5170;

createApp(app, true);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
