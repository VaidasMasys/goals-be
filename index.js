const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.send({goals: ['goal1']})
})

app.listen(3000)