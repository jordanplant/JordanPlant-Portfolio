import express from "express";

const app = express();

import createApp from "../Server/server.js";

createApp(app);

export default app;
