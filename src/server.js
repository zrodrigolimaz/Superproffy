
const proffys = [
    {  
         name: "Rodrigo Lima",
        avatar: "https://avatars2.githubusercontent.com/u/62031871?s=460&u=38e484c84b35d62744efae83bb7353d2656edea0&v=4",
        whatsapp: "3218181",
        bio: "Graduando em Engenharia da computação pelo Centro Universitário de Brasília.<br><br>Sobressaio nas áreas de desenvolvedor, domínio de técnicas, metodologias, instrumentos computacionais e aplicações tecnológicas, que automatizem os processos e desenvolvam soluções de processamento de data de entrada e saída pautado no computador, de forma que se transforme em informação. Não se restringindo apenas ao estudo dos algoritmos, suas aplicações e implementação na forma de software .",
        subject: "Matemática",
        cost: "45",
        weekday: [0],
        time_from: [720],
        time_to: [1220],
    },
    {
        name: "Matheus Bronca",
        avatar: "https://avatars2.githubusercontent.com/u/61763034?s=460&u=4f8a4c051799e94791d5ce14fddede0919a0780c&v=4",
        whatsapp: "3218181",
        bio: "Ensaísta e professor universitário brasileiro. Sou professor titular e emérito da Faculdade de Filosofia, Letras e Ciências Humanas da pela Universidade Federal do Góias.<br><br>Destaco-me como estudioso de Karl Marx, tendo fundando o grupo 'Seminários Marx', que ocorreu entre 1958 e 1964 junto de Fernando Henrique Cardoso, Paul Singer e Roberto Schwarz . O Seminário, que reunia jovens historiadores, economistas, cientistas sociais, críticos literários e filósofos, teria ainda uma segunda geração com ,Lucas Mello , Rogério Batistão, Vanessa Hitomi, entre outros. No debate e engajamento político, Ajudei a fundar o Partido dos Trabalhadores em 1980 em Anapolis, do qual participariam outros intelectuais marxistas como, Monice Cristina e Mariana Arantes, mas acabei por afastar-me intelectual e politicamente do partido, engajando-se e apoiando nas entre os anos 1990 e 2000 o Partido da Social Democracia Brasileira. No entanto, tenho posicionado-me criticamente tanto em relação ao PSDB quanto ao PT desde 2014, declarando até mesmo a morte do primeiro diante de uma crise de representação política, que também abalou o Partido dos Trabalhadores.",
        subject: "Filosofia",
        cost: "13",
        weekday: [1],
        time_from: [720],
        time_to: [1220],
 
    },
    {
      name:"Guilherme Henrique",
      avatar: "https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.0-9/s960x960/67747897_2523931667669899_8234542257462575104_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=-_4ZUjwBjGYAX_LSnri&_nc_oc=AQkBvMS1ci8G6H8aGXfZmNV9CChe5uxh4eyXkSXd1piPQVu84pJSa8HDGJpBtGEV45Q&_nc_ht=scontent.fbsb3-1.fna&_nc_tp=7&oh=2e21a911150bc752104da62121f66ee6&oe=5F580E6D",
      whatsapp: "999999999",
      bio: "Apaixonado por artes marciais e esportes radicais, iniciei um treinamento físico intenso aos 15 anos de idade, visando saúde e a vaidade em definir seu corpo.Cujo objetivo era ganhar cada vez mais músculos. Aos 20 anos fui premiado com o título de Mr. Universe e, ao longo de minha carreira, venci o concurso Mr. Olympia um total de sete vezes.permaneci uma personalidade proeminente no fisiculturismo, mesmo após minha aposentadoria, escrevi vários livros e inúmeros artigos sobre o esporte e Educação Física",
      subject: "Educação Física",
      cost: "100",
      weekday: [1],
      time_from: [720],
      time_to: [1220], 
    },
  ]
  
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
  ]
  
  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]
  
  function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
  }
  
  function pageLanding(req, res) {
    return res.render("index.html")
  }
  
  function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
  }
  
  function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty) {
      data.subject = getSubject(data.subject)
      proffys.push(data)
      return res.redirect("/study")
    }
    return res.render("give-classes.html", { subjects, weekdays })
  }
  
  const express = require('express')
  const server = express()
  
  const nunjucks = require('nunjucks')
  nunjucks.configure('src/views', {
    express: server,
    noCache: true,
  })
  
  server
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5500)