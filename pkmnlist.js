const { Pokemon, FirePokemon, GrassPokemon, WaterPokemon, ElectricPokemon, GroundPokemon } = require("./pokemon.js");

const player1choice = {
    0: bulbasaur = new GrassPokemon ("Bulbasaur", "Grass", "Bulba", "Vine Whip"),
    1: charmander = new FirePokemon ("Charmander", "Fire", "Char", "Ember"),
    2: squirtle = new WaterPokemon ("Squirtle", "Water", "Squirtle", "Bubble"),
    3: pikachu = new ElectricPokemon ("Pikachu", "Electric", "Pika", "Thundershock"),
    4: cubone = new GroundPokemon ("Cubone", "Ground", "Cubone", "Boomerang"),
    5: eevee = new Pokemon ("Eevee", "Normal", "Eee", "Takedown"),
}

const player2choice = {
    0: bulbasaur = new GrassPokemon ("Bulbasaur", "Grass", "Bulba", "Vine Whip"),
    1: charmander = new FirePokemon ("Charmander", "Fire", "Char", "Ember"),
    2: squirtle = new WaterPokemon ("Squirtle", "Water", "Squirtle", "Bubble"),
    3: pikachu = new ElectricPokemon ("Pikachu", "Electric", "Pika", "Thundershock"),
    4: cubone = new GroundPokemon ("Cubone", "Ground", "Cubone", "Boomerang"),
    5: eevee = new Pokemon ("Eevee", "Normal", "Eee", "Takedown"),
}



module.exports = { player1choice, player2choice };