const http = require ('http');
const fs = require('fs');

const pt = require('./fr/parseText');


const server = http.createServer ((req, res)=> {
const url = req.url

fs.readFile('./fr/fullText.txt', (err, data) => {
  if (err) throw err;
  const buf1 = Buffer.from(data).toString('utf8');
  const parsedObj = pt.parseToObject(buf1);
  //console.log(pt.countOccurances(parsedObj.Type));
  //console.log(parsedObj.Type.length);
 
  res.write(JSON.stringify(pt.countOccurances(parsedObj), null, '\t'));
  res.write(JSON.stringify(parsedObj.filter(input => input.Type === "IBND" ), null, '\t'));
  res.writeHead(200);
  res.end();
});
  
});

server.listen('8080');
