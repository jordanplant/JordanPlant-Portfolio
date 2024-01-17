import express from "express";

const app = express();

import createApp from "../Server/server.js";

createApp(app);

module.exports = app;
