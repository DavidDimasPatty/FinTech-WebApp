const express= require("express");
const cors = require('cors');
const ruter=require("./router/router.js");
const PORT = process.env.PORT || 8080
const app=express();

app.use(cors());

app.use('/',ruter);

app.use('/', express.static('./public/page'));
app.set('trust proxy', 1);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));