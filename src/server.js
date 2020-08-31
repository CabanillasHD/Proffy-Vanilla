// * Tipos de funções
// function() {}
// () => {}
// req - request
// res - response

// Criar função normal
// function study(request, response) {
//     return response.sendFile(__dirname + "/views/study.html")


//data
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "(31)9 9474-4009",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject: "Química",
        cost: "20",
        weekday: [
            0
        ],
        time_from: [720],
        time_to: [1220],
    },
    {
        name: "Dragons Gamers",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "(31)99474-4009",
        bio: "Entusiasta no Rocket League",
        subject: "Química",
        cost: "20",
        weekday: [
            0
        ],
        time_from: [720],
        time_to: [1220],
    }
];
const subjects = [

    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
];
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
];

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects [position]
}

//Servidor
const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

//configurar o nunjucks (Template Engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server

    
    //configurar arquivos estáticos (css, scripts, imagens)
    .use(express.static("public"))
    //rotas da aplicação
    .get("/", function (request, response) {
        return response.render("index.html");
    })
    .get("/study", function (request, response) {
        const filters = request.query
        return response.render("study.html", {
            proffys: proffys,
            filters,
            subjects,
            weekdays
        });
    })

    .get("/give-classes", function (request, response) {
        const data = request.query
        //adicionar data a lista de proffys
        //console.log(request.query)
        
        const isNotEmpty = Object.keys(data).length > 0
        if (isNotEmpty) {

            data.subject = getSubject(data.subject) 

            proffys.push(data)

        return response.redirect("/study")
        }

        //se não, não adicionar
        return response.render("give-classes.html", {
            subjects,
            weekdays
        });
    })
//Start servidor
    .listen(5500);