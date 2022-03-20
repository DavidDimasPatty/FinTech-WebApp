const jsonServer = require('json-server');
const server = jsonServer.create();
const cors= require('cors')
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './build'
});
const PORT = process.env.PORT || 5000;
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/': '/',
  '/api/home/': '/home',
  '/api/user':'/user',
  '/api/customers/:id' : '/customers/:id'
}))
server.use(router);
server.use(cors());
server.listen(PORT, () => {
  console.log('Server is running');
});

