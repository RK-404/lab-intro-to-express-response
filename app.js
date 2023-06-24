const express = require("express");
const app = express();
const PORT = 3003;

const catchPhrases = {
    'Tim-Gunn'          :   `Make it work`,
    'Coach-Taylor'      :   `Clear eyes, full hearts, can't Lose`,
    'Homer-Simpson'     :   `D'Oh`,
    'Bruce-Banner'      :   `Don't make me angry`,
    'Batman'            :   `To the Batmobile!`,
    'Hannibal-Smith'    :   `I love it when a plan comes together`,
    'Regis'             :   `Is that your final answer?`,
    'Fox-Mulder'        :   `The truth is out there`,
    'Harry-Callahan'    :   `Go ahead, make my day`,
    'Travis-Bickle'     :   `You talkin' to me?`
}

const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

app.get('/', (request, response) => {
    response.send("<h1>Hello World!</h1>");
})

app.get('/terminator', (request, response) => {
    response.send("<h1>I'll be back<br/>Hasta la vista, baby</h1>");
    // response.send('<h1>Hasta la vista, baby</h1>');
})


for (const key in catchPhrases) {
    app.get(`/${key}`, (req, res) => {
        res.send(`<h1>${catchPhrases[key]}</h1>`);
    })
}

app.get('/magic8', (req, res) => {
    let index = Math.floor(Math.random() * 19);
    res.send(`<h1>${magic8Responses[index]}</h1>`);
})

app.listen(3003, () => {
    console.log(`Listening on port ${PORT}...`);
});
