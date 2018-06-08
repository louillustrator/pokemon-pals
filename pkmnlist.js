const { Pokemon, NormalPokemon, FirePokemon, WaterPokemon, ElectricPokemon, GrassPokemon, IcePokemon, FightingPokemon, PoisonPokemon, GroundPokemon, FlyingPokemon, PsychicPokemon, BugPokemon, RockPokemon, GhostPokemon, DragonPokemon, DarkPokemon, SteelPokemon, FairyPokemon } = require("./pokemon.js");

const player1choice = {
    0: bulbasaur = new GrassPokemon ("Bulbasaur", "Grass", "Bulba", "Vine Whip"),
    1: charmander = new FirePokemon ("Charmander", "Fire", "Char", "Ember"),
    2: squirtle = new WaterPokemon ("Squirtle", "Water", "Squirtle", "Bubble"),
    3: pikachu = new ElectricPokemon ("Pikachu", "Electric", "Pika", "Thundershock"),
    4: cubone = new GroundPokemon ("Cubone", "Ground", "Cubone", "Boomerang"),
    5: eevee = new Pokemon ("Eevee", "Normal", "Eee", "Takedown"),
    6: jynx = new IcePokemon ("Jynx", "Ice", "Jynx", "Ice Punch"),
    7: machop = new FightingPokemon("Machop", "Fighting", "Machop", "Hyper Kick"),
    8: grimer = new PoisonPokemon("Grimer", "Poison", "Grime", "Sludge"),
    9: pidgey = new FlyingPokemon("Pidgey", "Flying", "Coo", "Aeiral Wing"),
    10: drowzee = new PsychicPokemon("Drowzee", "Psychic", "Drowzee", "Psychic"),
    11: venonat = new BugPokemon("Venonat", "Bug", "Venonat", "Signal Beam"),
    12: geodude = new RockPokemon("Geodude", "Rock", "Geodude", "Rock Throw"),
    13: gastly = new GhostPokemon("Gastly", "Ghost", "Gastly", "Night Shade"),
    14: dratini = new DragonPokemon("Dratini", "Dragon", "Drrtt", "Dragon Tail"),
    15: magnemite = new SteelPokemon("Magnemite", "Steel", "Bzzzt", "Magnet Bomb"),
    16: jigglypuff = new FairyPokemon("Jigglypuff", "Fairy", "Jigglypuff", "Dazzling Gleam")
}

const player2choice = {
    0: bulbasaur = new GrassPokemon ("Bulbasaur", "Grass", "Bulba", "Vine Whip"),
    1: charmander = new FirePokemon ("Charmander", "Fire", "Char", "Ember"),
    2: squirtle = new WaterPokemon ("Squirtle", "Water", "Squirtle", "Bubble"),
    3: pikachu = new ElectricPokemon ("Pikachu", "Electric", "Pika", "Thundershock"),
    4: cubone = new GroundPokemon ("Cubone", "Ground", "Cubone", "Boomerang"),
    5: eevee = new Pokemon ("Eevee", "Normal", "Eee", "Takedown"),
    6: jynx = new IcePokemon ("Jynx", "Ice", "Jynx", "Ice Punch"),
    7: machop = new FightingPokemon("Machop", "Fighting", "Machop", "Hyper Kick"),
    8: grimer = new PoisonPokemon("Grimer", "Poison", "Grime", "Sludge"),
    9: pidgey = new FlyingPokemon("Pidgey", "Flying", "Coo", "Aeiral Wing"),
    10: drowzee = new PsychicPokemon("Drowzee", "Psychic", "Drowzee", "Psychic"),
    11: venonat = new BugPokemon("Venonat", "Bug", "Venonat", "Signal Beam"),
    12: geodude = new RockPokemon("Geodude", "Rock", "Geodude", "Rock Throw"),
    13: gastly = new GhostPokemon("Gastly", "Ghost", "Gastly", "Night Shade"),
    14: dratini = new DragonPokemon("Dratini", "Dragon", "Drrtt", "Dragon Tail"),
    15: magnemite = new SteelPokemon("Magnemite", "Steel", "Bzzzt", "Magnet Bomb"),
    16: jigglypuff = new FairyPokemon("Jigglypuff", "Fairy", "Jigglypuff", "Dazzling Gleam")
}



module.exports = { player1choice, player2choice };