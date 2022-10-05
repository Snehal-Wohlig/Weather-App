const http =require("http")
const fs =require("fs")

const frontEnd =fs.readFileSync("index.html","utf-8")

const server =http.createServer((req,res) => {
   if(req.url=="/"){
    requests('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=66bf36e593f6141fa9e35e032a57b977')
.on('data', (chunk) => {
  let objdata = JSON.parse(chunk);
  let arrData = [objdata];
  console.log(arrData)
})
.on('end', (err) => {
  if (err) return console.log('connection closed due to errors', err);
 
  console.log('end');
});
   }
})

server.listen(3000,"127.0.0.1")