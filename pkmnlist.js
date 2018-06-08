const { Pokemon } = require("./pokemon.js");

const player1choice = {
    0: bulbasaur = new Pokemon ("Bulbasaur", "Grass", "Bulba", "Vine Whip"),
    1: charmander = new Pokemon ("Charmander", "Fire", "Char", "Ember"),
    2: squirtle = new Pokemon ("Squirtle", "Water", "Squirtle", "Bubble"),
    3: pikachu = new Pokemon ("Pikachu", "Electric", "Pika", "Thundershock"),
    4: cubone = new Pokemon ("Cubone", "Ground", "Cubone", "Boomerang"),
    5: eevee = new Pokemon ("Eevee", "Normal", "Eee", "Takedown"),
}

const player2choice = {
    0: bulbasaur = new Pokemon ("Bulbasaur", "Grass", "Bulba", "Vine Whip"),
    1: charmander = new Pokemon ("Charmander", "Fire", "Char", "Ember"),
    2: squirtle = new Pokemon ("Squirtle", "Water", "Squirtle", "Bubble"),
    3: pikachu = new Pokemon ("Pikachu", "Electric", "Pika", "Thundershock"),
    4: cubone = new Pokemon ("Cubone", "Ground", "Cubone", "Boomerang"),
    5: eevee = new Pokemon ("Eevee", "Normal", "Eee", "Takedown"),
}



module.exports = { player1choice, player2choice };