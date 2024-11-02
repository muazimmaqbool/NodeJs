/*Third Party Modules:
    ->these modules are written by someone else but we can download them and use them in our project
    ->these modules can be installed in the project folder or globally
    ->example of best thrid party modules: express, gulp, lodash, async, scoket.io, mongoose, 
    pokemon, underscore, pm2, bower, q, debug, react, mocha etc
        */
//as an example we will use pokemon third paty module:
//first download it : npm i pokemon
const pokemon=require("pokemon");
console.log(pokemon.random()); //generates any random pokemon name
//console.log(pokemon.all()); //prints all pokemon names


//at 44:00
//there is one more package nodemon: it restarts code everytime we save the code
//so, to run our code everytime we have to enter c in terminal with the
//help of nodemon just once we have to type nodemon 'filename'
// then whenevery we make changes/save 
//the code it will automatic runit/restart it 
