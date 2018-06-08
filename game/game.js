const { Pokemon } = require("../pokemon.js");
const { Trainer } = require("../trainer.js");
const { Battle } = require("../battle.js");
const { player1choice, player2choice } = require ("../pkmnlist.js");
const inquirer = require('inquirer');
let makeTrainer = [
    {
        type: 'input',
        name: 'trainer1',
        message: 'Trainer 1, please enter your name.',
        validate: function(value) {
            let pass = value.match(/^[A-Z, a-z]{1,8}$/g);
            if (pass) return true;
            return ("Invalid name!")
        }
    },
    {
        type: 'list',
        name: 'pkmn1',
        message: 'Trainer 1, please choose your Pokemon.',
        choices: ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu', 'Cubone', 'Eevee'], 
    },
    {
        type: 'input',
        name: 'trainer2',
        message: 'Trainer 2, please enter your name.',
        validate: function(value) {
            let pass = value.match(/^[A-Z, a-z]{1,8}$/g);
            if (pass) return true;
            return ("Invalid name!")
        }
    },
    {
        type: 'list',
        name: 'pkmn2',
        message: 'Trainer 2, please choose your Pokemon.',
        choices: ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu', 'Cubone', 'Eevee'], 
    }
]
function start() {
inquirer.prompt(makeTrainer).then(answers => {
    const train1 = new Trainer (answers.trainer1);
    const train2 = new Trainer (answers.trainer2);
    if (answers.pkmn1 === 'Bulbasaur'){
        train1.catch(player1choice[0]);
    }
    if (answers.pkmn1 === 'Charmander'){
        train1.catch(player1choice[1]);
    }
    if (answers.pkmn1 === 'Squirtle'){
        train1.catch(player1choice[2]);
    }
    if (answers.pkmn1 === 'Pikachu'){
        train1.catch(player1choice[3]);
    }
    if (answers.pkmn1 === 'Cubone'){
        train1.catch(player1choice[4]);
    }
    if (answers.pkmn1 === 'Eevee'){
        train1.catch(player1choice[5]);
    }
    if (answers.pkmn2 === 'Bulbasaur'){
        train2.catch(player2choice[0]);
    }
    if (answers.pkmn2 === 'Charmander'){
        train2.catch(player2choice[1]);
    }
    if (answers.pkmn2 === 'Squirtle'){
        train2.catch(player2choice[2]);
    }
    if (answers.pkmn2 === 'Pikachu'){
        train2.catch(player2choice[3]);
    }
    if (answers.pkmn2 === 'Cubone'){
        train2.catch(player2choice[4]);
    }
    if (answers.pkmn2 === 'Eevee'){
        train2.catch(player2choice[5]);
    }
    if (answers.pkmn2 !== ''){
        battle();
    }
    })
    
}

let battle1 = [
    {
        type: 'list',
        name: 'fight1',
        message: 'Trainer 1, pick an option.',
        choices: ['Fight', 'Forfeit'], 
    },
]
 function battle() {
    console.log('Player 1 do a thing');
inquirer.prompt(battle1).then(answers => {
    if (answers.fight1 = 'Forfeit')
    console.log ('player 1 wins');
    console.log (train1.name);
    return ;
});
}
console.log('PREPARE TO BATTLE!!!')
start();
