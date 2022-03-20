const jsonServer = require("json-server");
const server= jsonServer.create();
const path = require('path');
const router = jsonServer.router('db.json');
const express = require('express');
const cors = require("cors");
const middlewares = jsonServer.defaults();
const port=process.env.PORT||5000;
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  }
  )
);
server.use('/db', middlewares, router);
server.use(express.static(path.join(__dirname, 'build')));

server.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
server.use(cors());
server.listen(port,()=>{
  console.log(`Server is running on ${port}`);
})

//const jsonServer = require('json-server');
//const app = jsonServer.create();

