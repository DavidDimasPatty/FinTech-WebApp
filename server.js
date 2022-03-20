const jsonServer = require('json-server');
const server = jsonServer.create();
const cors= require('cors')
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 5000;
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}))
server.use(cors());
server.listen(PORT, () => {
  console.log('Server is running');
});

