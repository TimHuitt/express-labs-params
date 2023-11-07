const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/greeting/:name?', function(req, res) {
  const name = req.params.name 

  res.render('greeting', { name })
})


app.get('/tip/:total/:tipPercentage?', function(req, res) {
  const total = req.params.total
  const tipPercentage = req.params.tipPercentage

  res.render('tip', { total, tipPercentage })
}) 

app.get('/magic/*', function(req, res) {
  const question = req.params[0] || ''
  const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

  res.render('magic', { question, answers })
})

app.get('/*', function(req, res) {
  const number = req.params[0] 

  res.render('fibonacci', { number })
})

app.listen(3000)