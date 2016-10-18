var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/plus/:num1/:num2', function(req, res) {
  var result = parseInt(req.params.num1, 10) + parseInt(req.params.num2, 10);
  res.json({ result: result.toFixed(2) });
});

router.get('/minus/:num1/:num2', function(req, res) {
  var result = parseInt(req.params.num1, 10) - parseInt(req.params.num2, 10);
  res.json({ result: result.toFixed(2) });
});

router.get('/multiply/:num1/:num2', function(req, res) {
  var result = parseInt(req.params.num1, 10) * parseInt(req.params.num2, 10);
  res.json({ result: result.toFixed(2) });
});

router.get('/divide/:num1/:num2', function(req, res) {
  var result = parseInt(req.params.num1, 10) / parseInt(req.params.num2, 10);
  res.json({ result: result.toFixed(2) });
});

app.use('/api', router);

app.listen(port);
console.log('Running on port ' + port);
