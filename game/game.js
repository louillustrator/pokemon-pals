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
            let pass = value.match(/([A-Z, a-z])+/g);
            //regex here isn't working right, needs checking
            if (pass) return true;
            return ("That's not a name!")
        },
    }
]
inquirer.prompt(makeTrainer).then(answers => {
    console.log('Game Over')
})