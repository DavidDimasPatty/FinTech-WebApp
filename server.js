const jsonServer = require('json-server');
const express= require("express")
const cors= require('cors')
const path = require('path')
const app = express();
app.use(cors())

const PORT = process.env.PORT || 5000;


app.use('/api', jsonServer.router('db.json'),jsonServer.defaults({noCors: false}))
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

