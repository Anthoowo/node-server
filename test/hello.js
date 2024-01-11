const { ifError } = require("assert");
const fs = require("fs");
const path = require("path");
const zlib = require("zlib");




const gZip = zlib.createGzip();



// fs.mkdir(path.join(__dirname,'/test'), {}, err=>{
//     if(err) throw Error;
//     console.log('Folder created');
// })
// fs.open
// fs.writeFile(path.join(__dirname,'hello.txt'),
// 'hello world',
// err=>{
//     if(err) throw err;
//     console.log('file written to ....')
//     fs.appendFile(path.join(__dirname,'test','hello.txt'),
// 'i love  js not',
// err=>{
//     if(err) throw err;
//     console.log('file written to ....')
// })
// })

// fs.readFile(path.join(__dirname,'test','hello.txt'), 'utf8', (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// fs.rename(
//   path.join(__dirname, "test", "hello.js"),
//   path.join(__dirname, "test", "hello.txt"),
//   (err) => {
//     if (err) throw err;
//     console.log("file renamed ...");
//   }
// );


const readablestream = fs.createReadStream('./hello.txt',
{
  encoding: 'utf-8',
  highWaterMark:2,
});

const writeableStream = fs.createWriteStream('./hi.txt.gz');

// readablestream.on('data', (chunk)=>{ 
//   console.log(chunk + '$');
//   writeableStream.write(chunk);
// }) 

readablestream.pipe(gZip).pipe(writeableStream);