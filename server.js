const jsonServer = require('json-server');
const server = jsonServer.create();
const express= require("express")
const cors= require('cors')
const path = require('path')
const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults({
  static: './build',
  watch:true
});
const PORT = process.env.PORT || 5000;
server.use(middlewares);
server.use(cors());
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}))
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});

