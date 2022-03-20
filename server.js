const jsonServer = require("json-server");
const express =require("express");
const server= jsonServer.create();
const router=jsonServer.router("./db.json");
const cors = require("cors");
const app =express;
const middleware=jsonServer.defaults({
  static:"./build"
})
const port=process.env.PORT||5000;
server.use(middleware);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  }
  )
);

app.use('/api', jsonServer.router('db.json'));
app.use(cors());
app.listen(port,()=>{
  console.log(`Server is running on ${port}`);
})