const jsonServer = require('json-server');
const server = jsonServer.create();
const express= require("express")
const cors= require('cors')
const path = require('path')
const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults({
  static: './build'
});
const PORT = process.env.PORT || 5000;
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}))
server.use(router);
if (process.env.NODE_ENV === 'production') {  
  server.use(express.static(path.join(__dirname, "client/build")));
  server.get("/*", (_, res) => {
   res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
server.use(cors());
server.listen(PORT, () => {
  console.log('Server is running');
});

