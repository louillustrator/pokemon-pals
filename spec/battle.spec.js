const { Pokemon } = require("../pokemon.js");
const { Trainer } = require("../trainer.js");
const { Battle } = require("../battle.js");
const { expect } = require("chai");

describe.only("Battle", () => {
  it("If battle can obtain 1 pokemon from each trainer", () => {
    const tim = new Trainer("Tim");
    const lou = new Trainer("Lou");
    const squirtle = new Pokemon("Squirtle", "water", "Squirtle", "bubble");
    const charmander = new Pokemon("Charmander", "fire", "Char", "ember");
    tim.catch(squirtle);
    lou.catch(charmander);
    let battle1 = new Battle(tim, lou);
    expect(battle1.pokemon1).to.eql(squirtle);
    expect(battle1.pokemon2).to.eql(charmander);
  });
  it("can create a temporary HP amount, by copying the HP value from the pokemon", () => {
    const tim = new Trainer("Tim");
    const lou = new Trainer("Lou");
    const squirtle = new Pokemon(
      "Squirtle",
      "water",

      "Squirtle",
      "bubble"
    );
    const charmander = new Pokemon(
      "Charmander",
      "fire",

      "Char",
      "ember"
    );
    tim.catch(squirtle);
    lou.catch(charmander);
    squirtle.hp = 100;
    charmander.hp = 100;
    let battle1 = new Battle(tim, lou);
    expect(battle1.poke1TempHp).to.equal(100);
    expect(battle1.poke2TempHp).to.equal(100);
  });
  it("Test that one pokemon can attack another,and cause it to faint", () => {
    const tim = new Trainer("Tim");
    const lou = new Trainer("Lou");
    const squirtle = new Pokemon("Squirtle", "water", "Squirtle", "bubble");
    const charmander = new Pokemon("Charmander", "fire", "Char", "ember");
    tim.catch(squirtle);
    lou.catch(charmander);
    squirtle.atk = 25;
    charmander.hp = 20;
    let battle1 = new Battle(tim, lou);
    battle1.fight();
    expect(battle1.poke2TempHp).to.equal(-5);
  });
  it("Test that the 2nd pokemon can attack the other,and cause it to faint", () => {
    const tim = new Trainer("Tim");
    const lou = new Trainer("Lou");
    const squirtle = new Pokemon(
      "Squirtle",
      "water",

      "Squirtle",
      "bubble"
    );
    const charmander = new Pokemon(
      "Charmander",
      "fire",

      "Char",
      "ember"
    );
    tim.catch(squirtle);
    lou.catch(charmander);
    squirtle.hp = 20;
    charmander.atk = 25;
    let battle1 = new Battle(tim, lou);
    battle1.whoseturn = 2;
    battle1.fight();
    expect(battle1.poke1TempHp).to.equal(-5);
  });
  it("can swap who attacks and defends based on whose turn it is", () => {
    const tim = new Trainer("Tim");
    const lou = new Trainer("Lou");
    const squirtle = new Pokemon(
      "Squirtle",
      "water",

      "Squirtle",
      "bubble"
    );
    const charmander = new Pokemon(
      "Charmander",
      "fire",

      "Char",
      "ember"
    );
    tim.catch(squirtle);
    lou.catch(charmander);
    squirtle.hp = 100;
    charmander.hp = 100;
    squirtle.atk = 20;
    charmander.atk = 20;
    let battle1 = new Battle(tim, lou);
    battle1.fight();
    battle1.fight();
    expect(battle1.poke1TempHp).to.equal(80);
    expect(battle1.poke2TempHp).to.equal(80);
  });
});
