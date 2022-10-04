const http =require("http")
const fs =require("fs")

const frontEnd =fs.readFileSync("index.html","utf-8")

const server =http.createServer((req,res) => {
   
})