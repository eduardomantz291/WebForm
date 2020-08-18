function Index(req, res) {
  return res.render("index.html");
}

function Register(req, res) {
   return res.render("register.html");
}

const express = require("express");
const server = express();

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
})

server.use(express.static("public"))
.get("/", Index)
.get("/register", Register)
.listen(5500, () => {
  console.log("Servidor rodando!");
})