const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const api = require('./apiHelpers/helpers.js');


const app = express();

let port = process.env.PORT || 7719;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'../dist')));

app.get('/currentData', (req,res) => {
 api.currentData(req,res)
})

app.listen(port, () => {
  console.log(`listening in on ${port}...`)
});
