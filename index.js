const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req);
  console.log(req.url);
  // if(req.url === '/'){
  //     fs.readFile(path.join(__dirname, "public", "index.html"), (err,data)=>{
  //         if (err) throw err;

  //         res.writeHead(200,{'content-Type': 'text/html'});
  //         // res.write('hello world');
  //         res.end(data);
  //     })
  // }

  // if(req.url === '/about'){
  //     fs.readFile(path.join(__dirname, "public", "index.html"), (err,data)=>{
  //         if (err) throw err;

  //         res.writeHead(200,{'content-Type': 'text/html'});
  //         // res.write('hello world');
  //         res.end(data);
  //     })
  // }

  // build file path

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  let extName = path.extname(filePath);

  let contentType = "text/html";

  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            if (err) throw err;
            res.writeHead(200, { "content-TYpe": contentType });
            res.end(content, "utf-8");
          }
        );
      } else {
        // some server errror
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // success
      res.writeHead(200, { "content-type": contentType });
      res.end(content, "utf-8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`sever running on ${PORT}`));
