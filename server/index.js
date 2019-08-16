const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const controllers = require('./controllers/index.js');


const app = express();

let port = process.env.PORT || 7719;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'../dist')));

app.get('/getData', (req,res) => {
 controllers.getData(req,res);
})

app.get('/portfolio', (req,res) => {
  controllers.getPortfolio(req,res);
})

app.post('/portfolio', (req,res) => {
  controllers.addPortfolio(req,res);
})

app.get('/sectors', (req,res) => {
  controllers.getSectors(req,res);
})

app.listen(port, () => {
  console.log(`listening in on ${port}...`)
});
