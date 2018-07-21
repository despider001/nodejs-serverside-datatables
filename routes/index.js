var express = require('express');
var router = express.Router();
var fs = require('fs');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  //req.body contains all the params sent by dataTables Ajax
  console.log(req.body);

  //Your database call & calculation goes here
  let data = fs.readFileSync('data.json'); 
  data = JSON.parse(data).dataSet;

  let viewObj = {};
  viewObj.recordsTotal = data.length; // number of total records
  viewObj.recordsFiltered = data.length; // number of filtered records
  viewObj.data = data;
  res.json(viewObj);
})
module.exports = router;
