const { Pokemon } = require("../pokemon.js");
const { Trainer } = require("../trainer.js");
const { expect } = require("chai");

describe("Pokemon", () => {
  it("Creates a new Pokemon with 6 properties", () => {
    const eevee = new Pokemon("Eevee", "Normal", "eee", "takedown");
    expect(eevee.name).to.equal("Eevee");
    expect(eevee.type).to.equal("Normal");
    expect(eevee.sound).to.equal("eee");
    expect(eevee.moves).to.equal("takedown");
  });
  it("sets a random number for attack and hp", () => {
    const eevee = new Pokemon("Eevee", "Normal", "eee", "takedown");
    expect(eevee.hp).to.be.above(89);
    expect(eevee.hp).to.be.below(111);
    expect(eevee.atk).to.be.above(15);
    expect(eevee.atk).to.be.below(21);
  });
  it("Can return the Pokemons call with a prototype", () => {
    const eevee = new Pokemon("Eevee", "Normal", "eee", "takedown");
    expect(eevee.talk()).to.equal("eee");
  });
  it("Can return the Pokemons moves with a prototype", () => {
    const eevee = new Pokemon("Eevee", "Normal", "eee", "takedown");
    expect(eevee.useYourMoves()).to.equal("takedown");
  });
});

