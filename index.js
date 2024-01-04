const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req,res) =>{
    console.log(req);
    console.log(req.url);
if(req.url === '/'){
    fs.readFile(path.join(__dirname, "public", "index.html"), (err,data)=>{
        if (err) throw err;

        res.writeHead(200,{'content-Type': 'text/html'});
        // res.write('hello world');
        res.end(data);
    })
}

})



const PORT =process.env.PORT ||  5000;


server.listen(PORT , ()=> console.log(`sever running on ${PORT}`))