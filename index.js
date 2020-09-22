const express = require('express');
const Rollbar = require('rollbar');
const rollbar = new Rollbar('e7ac80802aec438aa6fe09bf4e6ec6b0');

const app = express();

app.get('/', function(req, res) {
  const teste = {
    teste1: "dadasd"
  }

  console.log(teste.bar())
});

app.use(rollbar.errorHandler());

app.listen(9999);