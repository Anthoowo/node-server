const { Router } = require("express");
const router = Router();



router.get('/login', (req,res)=>{
    res.send('login page')
})

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    if (req.session.user){
      res.send("you are already signed in");
    } else {
        req.session.user = {
            username,
        }
        res.status(201).send(req.session)
    }   
  }
  else{
    console.log('empty')
    res.sendStatus(401)
  }
});

module.exports = router;
