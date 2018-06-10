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
    message:
      "Hey, you there! This is my alley, Who the hell do you think you are?",
    validate: function(value) {
      let pass = value.match(/^[A-Z, a-z]{1,8}$/g);
      if (pass) return true;
      return "Invalid name!";
    }
  },
  {
    type: "list",
    name: "pkmn1",
    message: "Thats a stupid name, who is your little sidekick?",
    choices: [
      "Bulbasaur",
      "Charmander",
      "Squirtle",
      "Pikachu",
      "Cubone",
      "Eevee",
      "Jynx",
      "Machop",
      "Grimer",
      "Pidgey",
      "Drowzee",
      "Venonat",
      "Geodude",
      "Gastly",
      "Dratini",
      "Magnemite",
      "Jigglypuff"
    ]
  },
  {
    type: "input",
    name: "trainer2",
    message:
      "Right, well I'm gonna make my sidekick fight him. My superior name is...",
    validate: function(value) {
      let pass = value.match(/^[A-Z, a-z]{1,8}$/g);
      if (pass) return true;
      return "Invalid name!";
    }
  },
  {
    type: "list",
    name: "pkmn2",
    message: "Gotta pick my best sidekick now",
    choices: [
      "Bulbasaur",
      "Charmander",
      "Squirtle",
      "Pikachu",
      "Cubone",
      "Eevee",
      "Jynx",
      "Machop",
      "Grimer",
      "Pidgey",
      "Drowzee",
      "Venonat",
      "Geodude",
      "Gastly",
      "Dratini",
      "Magnemite",
      "Jigglypuff"
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
    if (answers.pkmn1 === "Jynx") {
      train1.catch(player1choice[6]);
    }
    if (answers.pkmn1 === "Machop") {
      train1.catch(player1choice[7]);
    }
    if (answers.pkmn1 === "Grimer") {
      train1.catch(player1choice[8]);
    }
    if (answers.pkmn1 === "Pidgey") {
      train1.catch(player1choice[9]);
    }
    if (answers.pkmn1 === "Drowzee") {
      train1.catch(player1choice[10]);
    }
    if (answers.pkmn1 === "Venonat") {
      train1.catch(player1choice[11]);
    }
    if (answers.pkmn1 === "Geodude") {
      train1.catch(player1choice[12]);
    }
    if (answers.pkmn1 === "Gastly") {
      train1.catch(player1choice[13]);
    }
    if (answers.pkmn1 === "Dratini") {
      train1.catch(player1choice[14]);
    }
    if (answers.pkmn1 === "Magnemite") {
      train1.catch(player1choice[15]);
    }
    if (answers.pkmn1 === "Jigglypuff") {
      train1.catch(player1choice[16]);
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
    if (answers.pkmn2 === "Jynx") {
      train2.catch(player2choice[6]);
    }
    if (answers.pkmn2 === "Machop") {
      train2.catch(player2choice[7]);
    }
    if (answers.pkmn2 === "Grimer") {
      train2.catch(player2choice[8]);
    }
    if (answers.pkmn2 === "Pidgey") {
      train2.catch(player2choice[9]);
    }
    if (answers.pkmn2 === "Drowzee") {
      train2.catch(player2choice[10]);
    }
    if (answers.pkmn2 === "Venonat") {
      train2.catch(player2choice[11]);
    }
    if (answers.pkmn2 === "Geodude") {
      train2.catch(player2choice[12]);
    }
    if (answers.pkmn2 === "Gastly") {
      train2.catch(player2choice[13]);
    }
    if (answers.pkmn2 === "Dratini") {
      train2.catch(player2choice[14]);
    }
    if (answers.pkmn2 === "Magnemite") {
      train2.catch(player2choice[15]);
    }
    if (answers.pkmn2 === "Jigglypuff") {
      train2.catch(player2choice[16]);
    }
    if (answers.pkmn2 !== "") {
      battle();
      //call the battle
    }
    //battle with 2 trainers, you can pick fight or forfeit
    function battle() {
      let pokefight = new Battle(train1, train2);
      console.log("***********************");
      console.log("********Les go*********");
      console.log("***********************");
      let battle1 = [
        {
          type: "list",
          name: "fight1",
          message: `${train1.name}, what do you want to do?`,
          choices: ["Fight", "Forfeit", "Press the red button"]
        }
      ];
      let battle2 = [
        {
          type: "list",
          name: "fight2",
          message: `${train2.name}, pick an option.`,
          choices: ["Fight", "Forfeit", "Press the red button"]
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
          if (answers.fight1 === "Fight") {
            pokefight.fight1();
            if (pokefight.poke2TempHp < 1) return;
            trainer2Turn();
          }
          if (answers.fight1 === "Press the red button") {
            console.log(
              "!!BANG!! Your Pokemon exploded, killing you and everything within a 1 mile radius. That was pretty stupid"
            );
            return;
          }
        });
      }
      function trainer2Turn() {
        //again, check for forfeit and return
        inquirer.prompt(battle2).then(answers => {
          if (answers.fight2 === "Forfeit") {
            console.log(`${train1.name} wins!`);
          }
          if (answers.fight2 === "Press the red button") {
            console.log(
              "!!BANG!! Your Pokemon exploded, killing you and everything within a 1 mile radius. That was pretty stupid"
            );
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
console.log("*********STREET POKEMON**********");
console.log(
  "You are walking down a dark alley, its dark, a stranger lurks on the corner and becomes aggrevated as you approach..."
);
//call the game to begin!
start();
