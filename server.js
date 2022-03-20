const jsonServer = require("json-server");
const path = require("path");
const express = require("express");
const app = express();
const router = jsonServer.router("db.json");
const PORT = process.env.PORT || 3000;

app.use("/", express.static("build"), router);
app.use("/customers", express.static("build"), router);
if (process.env.NODE_ENV === "production") {
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname + "./build/index.html"));
  });
}

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));