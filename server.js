const jsonServer = require("json-server");
const server=jsonServer.create();
const router = jsonServer.router("./db.json");
const PORT = process.env.PORT || 5000;
const middleware =jsonServer.defaults({
  '/api/':'/$1'
})
server.use(middleware);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));