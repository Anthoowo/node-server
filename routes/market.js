const { Router } = require("express");

const router = Router();

const superMarkets = [
  {
    id: 1,
    store: "whole Foods",
    mile: 2.4,
  },
  {
    id: 1,
    store: "trader joes",
    mile:1.3,
  },
  {
    id: 1,
    store: "shopRite",
    mile: 3.5,
  },
];


// router.use((req,res,next)=>{
//   if (req.session.user) next();
//   else res.sendStatus(401);
// })

router.get("/markets/:id", (req, res) => {
  console.log(req.params);
  res.cookie('visited', true)
  console.log(req.query);
  //  res.send('<h1>hello</h1>');
  //  res.send('<h1>hello</h1>');
  res.send(superMarkets);
//   console.log(req.body);
  //  res.end('hii');
});

router.post("/markets", (req, res) => {
  console.log(req.body);
  superMarkets.push(req.body);
  res.sendStatus(201);
});

module.exports = router;
