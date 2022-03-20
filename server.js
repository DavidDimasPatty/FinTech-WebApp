const jsonServer = require("json-server");
const path = require("path");
const express = require("express");
const app = express();
const router = jsonServer.router("db.json");
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {

  app.use("/api", express.static("build"), router);
}
else{
  app.use("/", express.static("build"), router);
}

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));