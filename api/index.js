const app = require("express")();

import createApp from "../Server/server.js";

createApp(app);

module.exports = app;
