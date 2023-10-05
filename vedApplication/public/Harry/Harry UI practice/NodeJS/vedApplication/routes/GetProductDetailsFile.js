var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = {
    productInfo:[
      {
        Name: "laptop",
        Price:  45000,
        rating: 1,
        DiscountPercent: 10,
        Manufacturer: "Dell Inc.",
        Image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
      },
      {
        Name: "laptop2",
        Price: 45000,
        rating: 1.5,
        DiscountPercent: 10,
        Manufacturer: "Dell Inc.",
        Image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
      },
      {
        Name: "laptop",
        Price: 45000,
        rating: 2,
        DiscountPercent: 10,
        Manufacturer: "Dell Inc.",
        Image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
      },
      {
        Name: "laptop",
        Price:  45000,
        rating: 3.5,
        DiscountPercent: 10,
        Manufacturer: "Dell Inc.",
        Image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
      },
      {
        Name: "laptop",
        Price: 45000,
        rating: 2,
        DiscountPercent: 10,
        Manufacturer: "Dell Inc.",
        Image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
      },
      {
        Name: "laptop",
        Price:  45000,
        rating: 3.5,
        DiscountPercent: 10,
        Manufacturer: "Dell Inc.",
        Image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
      },
    ]
  }
res.send(JSON.stringify(data));
});

module.exports = router;
