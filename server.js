'use strict';

const express = require('express') //npm install express
const pokeData = require("./assets/poke.json")

const app = express();

const PORT = 3000;

// localhost:3000
app.get("/", (request, response) => {
    response.status(200).send("home route");
})

// localhost:3000/test

app.get("/test",(request,response)=>{
    response.send("alive!")
})


// localhost:3000/petsList
let myPetsList = ["missy", "lilly", "bob"];
app.get("/petsList",(request, response) => {
    response.status(200).send(myPetsList);
})

// localhost:3000/getPoke
app.get("/getPoke", (req,res) => {
    try {
        const pokeList = pokeData.results.map((pokemon) => {
            return pokemon.name
        })
        res.status(200).send(pokeList)
    } catch (error) {
        res.status(500).send(error)
    }
})


app.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`);
})





// npm i -g nodemon   / this will refresh the server automatically