const {Router} = require('express');

const router = Router();

router.use((req,res,next)=>{
  if (req.session.user){
    next();
  } 
    
  else {res.send(401);}
})

const groceryList = [
    {
      item: 'milk',
      quantity: 2
    },
    {
      item: 'cereal',
      quantity: 1
    },
    {
      item: 'cheese',
      quantity: 3
    },
  ]



  
router.get('/list', (req,res)=>{
    console.log(req.params)
      //  res.send('<h1>hello</h1>');
      //  res.send('<h1>hello</h1>');
      res.send(groceryList);
      console.log(req.body);
      //  res.end('hii');
  })
  
  
  router.post('/list', (req,res)=>{
  console.log(req.body)
  groceryList.push(req.body)
  res.sendStatus(201)
  })
  

  module.exports = router;