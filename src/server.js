const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
})

server.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
})

server.listen(5500, () => {
  console.log("Servidor rodando na url http://127.0.0.1:5500")
});