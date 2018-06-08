const { Pokemon } = require("../pokemon.js");
const { Trainer } = require("../trainer.js");
const { Battle } = require("../battle.js");
const { player1choice, player2choice } = require("../pkmnlist.js");
const inquirer = require("inquirer");

//getting a name, and checking its a string, and pokemon being picked for both players here
let makeTrainer = [
  {
    type: "input",
    name: "trainer1",
    message: "Trainer 1, please enter your name.",
    validate: function(value) {
      let pass = value.match(/^[A-Z, a-z]{1,8}$/g);
      if (pass) return true;
      return "Invalid name!";
    }
  },
  {
    type: "list",
    name: "pkmn1",
    message: "Trainer 1, please choose your Pokemon.",
    choices: [
      "Bulbasaur",
      "Charmander",
      "Squirtle",
      "Pikachu",
      "Cubone",
      "Eevee"
    ]
  },
  {
    type: "input",
    name: "trainer2",
    message: "Trainer 2, please enter your name.",
    validate: function(value) {
      let pass = value.match(/^[A-Z, a-z]{1,8}$/g);
      if (pass) return true;
      return "Invalid name!";
    }
  },
  {
    type: "list",
    name: "pkmn2",
    message: "Trainer 2, please choose your Pokemon.",
    choices: [
      "Bulbasaur",
      "Charmander",
      "Squirtle",
      "Pikachu",
      "Cubone",
      "Eevee"
    ]
  }
  //declaring the start, this is called at the end
];
function start() {
  //gets the answers we gave above and brings in the relevant pokemon
  inquirer.prompt(makeTrainer).then(answers => {
    const train1 = new Trainer(answers.trainer1);
    const train2 = new Trainer(answers.trainer2);
    if (answers.pkmn1 === "Bulbasaur") {
      train1.catch(player1choice[0]);
    }
    if (answers.pkmn1 === "Charmander") {
      train1.catch(player1choice[1]);
    }
    if (answers.pkmn1 === "Squirtle") {
      train1.catch(player1choice[2]);
    }
    if (answers.pkmn1 === "Pikachu") {
      train1.catch(player1choice[3]);
    }
    if (answers.pkmn1 === "Cubone") {
      train1.catch(player1choice[4]);
    }
    if (answers.pkmn1 === "Eevee") {
      train1.catch(player1choice[5]);
    }
    if (answers.pkmn2 === "Bulbasaur") {
      train2.catch(player2choice[0]);
    }
    if (answers.pkmn2 === "Charmander") {
      train2.catch(player2choice[1]);
    }
    if (answers.pkmn2 === "Squirtle") {
      train2.catch(player2choice[2]);
    }
    if (answers.pkmn2 === "Pikachu") {
      train2.catch(player2choice[3]);
    }
    if (answers.pkmn2 === "Cubone") {
      train2.catch(player2choice[4]);
    }
    if (answers.pkmn2 === "Eevee") {
      train2.catch(player2choice[5]);
    }
    if (answers.pkmn2 !== "") {
      battle();
      //call the battle
    }
    //battle with 2 trainers, you can pick fight or forfeit
    function battle() {
      let pokefight = new Battle(train1, train2);
      console.log("Player 1 do a thing");
      let battle1 = [
        {
          type: "list",
          name: "fight1",
          message: `${train1.name}, pick an option.`,
          choices: ["Fight", "Forfeit"]
        }
      ];
      let battle2 = [
        {
          type: "list",
          name: "fight2",
          message: `${train2.name}, pick an option.`,
          choices: ["Fight", "Forfeit"]
        }
      ];
      trainer1Turn();
      function trainer1Turn() {
        //for the first turn, if forfeit is choosen, return a winner
        inquirer.prompt(battle1).then(answers => {
          if (answers.fight1 === "Forfeit") {
            console.log(`${train2.name} wins`);
            return;
          }
          //else they fight, and then asses if hp is lower than 1
          pokefight.fight1();
          if (pokefight.poke2TempHp < 1) return;
          trainer2Turn();
        });
      }
      function trainer2Turn() {
        //again, check for forfeit and return
        inquirer.prompt(battle2).then(answers => {
          if (answers.fight2 === "Forfeit") {
            console.log(`${train1.name} wins!`);
            return;
          }
          pokefight.fight2();
          //else fight again
          if (pokefight.poke1TempHp < 1) return;
          trainer1Turn();
        });
      }
    }
  });
}

//now we are outside of our declarations, this is the start of the game
console.log("PREPARE TO BATTLE!!!");
//call the game to begin!
start();
