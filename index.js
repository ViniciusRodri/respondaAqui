const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta")
const Resposta = require("./database/Resposta");

// Database
connection.authenticate().then(() => {
  console.log('deu certo o banco')
}).catch((error) => {
  console.log(error)
});

// Setando no express o ejs como view engine.
app.set("view engine", "ejs");
app.use(express.static("public"));

// BodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rotas
app.get("/", (req, res) => {
  Pergunta.findAll({raw: true, order: [
    ['id', 'DESC']
  ]}).then(perguntas => {
    res.render("index", {
      perguntas: perguntas,
    });
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar")
})

//Rota POST para receber dados do form
app.post("/salvarpergunta", (req, res) => {
  Pergunta.create({
    titulo: req.body.titulo,
    descricao: req.body.descricao
  }).then(() => {
    res.redirect("/");
  });
})

// Busca condicional
app.get("/pergunta/:id", (req,res) => {
  const id = req.params.id;
  Pergunta.findOne({
    where: {id},
  }).then(pergunta => {
    if(pergunta != undefined) {
      Resposta.findAll({
        where: {perguntaId: pergunta.id},
        order: [["id", "DESC"]]
      }).then(respostas => {
        res.render("pergunta", {
          pergunta: pergunta,
          respostas: respostas
        });
      });
    } else {
      res.redirect("/");
    };
  });
});

app.post("/responder",(req, res) => {
  var corpo = req.body.corpo;
  var perguntaId = req.body.pergunta;
  Resposta.create({
      corpo: corpo,
      perguntaId: perguntaId
  }).then(() => {
      res.redirect("/pergunta/"+perguntaId);
  });
});


app.listen(8080, () =>{
  console.log("App Rodando!")
}) 