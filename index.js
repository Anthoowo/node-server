const express = require('express');
const session = require('express-session');
const authRoute = require('./routes/auth');
const listRoute = require('./routes/list');
const marketsRoute = require('./routes/market');

const app = express();
app.use(express.json());

app.use(express.urlencoded());

app.use(
  session({
    secret: 'ffnfmmkmvlkmvmkmvd',
    resave: false,
    saveUninitialized: false,
  })
)


// app.use((req,res,next)=>{
  //   // console.log(req.method);
  //   // res.send(200)
  //   // next();
  // })
  
  app.use('/api/',marketsRoute);
  app.use('/api/',listRoute);
  app.use('/api/auth/',authRoute);
  

PORT = process.env.PORT || 8080;
 
app.listen(PORT, ()=>{
  console.log(`sever is running on port ${PORT}`)
  
})