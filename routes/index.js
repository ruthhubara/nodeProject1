var express = require('express');
var router = express.Router();
const axios = require('axios');




  /* GET home page. */
router.get('/bit', function(req, res, next) {
  axios.get('http://fs1.co.il/bus/bitcoin.php')
  .then(function (response) {
    // handle success
    let json_ar=response.data;
    for(var i in json_ar)
    {
      json_ar[i].MyPrice = json_ar[i].price_usd.toFixed(2);
    }
    res.render('bit', { title: 'bit',_ar:json_ar });
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
