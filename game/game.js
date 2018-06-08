const { Pokemon } = require("../pokemon.js");
const { Trainer } = require("../trainer.js");
const { Battle } = require("../battle.js");
const inquirer = require('inquirer');
console.log('PREPARE TO BATTLE!!!')
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
        choices: ['Bulbasaur', 'Charmander', 'Squirtle'], 
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
        choices: ['Bulbasaur', 'Charmander', 'Squirtle'], 
    }
]

inquirer.prompt(makeTrainer).then(answers => {
    const train1 = new Trainer (answers.trainer1);
    train1.catch(answers.pkmn1);
    console.log(train1);
})