const jsonServer = require('json-server');
const server = jsonServer.create();
const express= require("express")
const cors= require('cors')
const path = require('path')
const app = express();
const router = jsonServer.router('db.json')
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

