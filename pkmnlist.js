const {
  Pokemon,
  NormalPokemon,
  FirePokemon,
  WaterPokemon,
  ElectricPokemon,
  GrassPokemon,
  IcePokemon,
  FightingPokemon,
  PoisonPokemon,
  GroundPokemon,
  FlyingPokemon,
  PsychicPokemon,
  BugPokemon,
  RockPokemon,
  GhostPokemon,
  DragonPokemon,
  DarkPokemon,
  SteelPokemon,
  FairyPokemon
} = require("./pokemon.js");

const player1choice = {
  0: (bulbasaur = new GrassPokemon(
    "Bulbasaur",
    "Grass",
    "Bulba",
    "becomes salty"
  )),
  1: (charmander = new FirePokemon("Charmander", "Fire", "Char", "sips tea")),
  2: (squirtle = new WaterPokemon(
    "Squirtle",
    "Water",
    "Squirtle",
    "calls his dad on you"
  )),
  3: (pikachu = new ElectricPokemon(
    "Pikachu",
    "Electric",
    "Pika",
    "throws shade"
  )),
  4: (cubone = new GroundPokemon(
    "Cubone",
    "Ground",
    "Cubone",
    "draws a knife"
  )),
  5: (eevee = new Pokemon("Eevee", "Normal", "Eee", "performs Bye Felicia")),
  6: (jynx = new IcePokemon("Jynx", "Ice", "Jynx", "calls you basic")),
  7: (machop = new FightingPokemon(
    "Machop",
    "Fighting",
    "Machop",
    "kicks a banana at you"
  )),
  8: (grimer = new PoisonPokemon(
    "Grimer",
    "Poison",
    "Grime",
    "pulls a hair out of your unibrow"
  )),
  9: (pidgey = new FlyingPokemon(
    "Pidgey",
    "Flying",
    "Coo",
    "lays an egg containing your mum"
  )),
  10: (drowzee = new PsychicPokemon(
    "Drowzee",
    "Psychic",
    "Drowzee",
    "falls asleep on your dad"
  )),
  11: (venonat = new BugPokemon(
    "Venonat",
    "Bug",
    "Venonat",
    "shouts YOLO and flaps at you aggresively"
  )),
  12: (geodude = new RockPokemon(
    "Geodude",
    "Rock",
    "Geodude",
    "throws rocks at you"
  )),
  13: (gastly = new GhostPokemon(
    "Gastly",
    "Ghost",
    "Gastly",
    "makes an offensive commet about yo mumma. burn"
  )),
  14: (dratini = new DragonPokemon(
    "Dratini",
    "Dragon",
    "Drrtt",
    "slaps you with his butt"
  )),
  15: (magnemite = new SteelPokemon(
    "Magnemite",
    "Steel",
    "Bzzzt",
    "uses a magnet to pull off your wig"
  )),
  16: (jigglypuff = new FairyPokemon(
    "Jigglypuff",
    "Fairy",
    "Jigglypuff",
    "sings you into some kind of horrific coma"
  ))
};

const player2choice = {
  0: (bulbasaur = new GrassPokemon(
    "Bulbasaur",
    "Grass",
    "Bulba",
    "becomes salty"
  )),
  1: (charmander = new FirePokemon("Charmander", "Fire", "Char", "sips tea")),
  2: (squirtle = new WaterPokemon(
    "Squirtle",
    "Water",
    "Squirtle",
    "calls his dad on you"
  )),
  3: (pikachu = new ElectricPokemon(
    "Pikachu",
    "Electric",
    "Pika",
    "throws shade"
  )),
  4: (cubone = new GroundPokemon(
    "Cubone",
    "Ground",
    "Cubone",
    "draws a knife"
  )),
  5: (eevee = new Pokemon("Eevee", "Normal", "Eee", "performs Bye Felicia")),
  6: (jynx = new IcePokemon("Jynx", "Ice", "Jynx", "calls you basic")),
  7: (machop = new FightingPokemon(
    "Machop",
    "Fighting",
    "Machop",
    "kicks a banana at you"
  )),
  8: (grimer = new PoisonPokemon(
    "Grimer",
    "Poison",
    "Grime",
    "pulls a hair out of your unibrow"
  )),
  9: (pidgey = new FlyingPokemon(
    "Pidgey",
    "Flying",
    "Coo",
    "lays an egg containing your mum"
  )),
  10: (drowzee = new PsychicPokemon(
    "Drowzee",
    "Psychic",
    "Drowzee",
    "falls asleep on your dad"
  )),
  11: (venonat = new BugPokemon(
    "Venonat",
    "Bug",
    "Venonat",
    "shouts YOLO and flaps at you aggresively"
  )),
  12: (geodude = new RockPokemon(
    "Geodude",
    "Rock",
    "Geodude",
    "throws rocks at you"
  )),
  13: (gastly = new GhostPokemon(
    "Gastly",
    "Ghost",
    "Gastly",
    "makes an offensive commet about yo mumma. burn"
  )),
  14: (dratini = new DragonPokemon(
    "Dratini",
    "Dragon",
    "Drrtt",
    "slaps you with his butt"
  )),
  15: (magnemite = new SteelPokemon(
    "Magnemite",
    "Steel",
    "Bzzzt",
    "uses a magnet to pull off your wig"
  )),
  16: (jigglypuff = new FairyPokemon(
    "Jigglypuff",
    "Fairy",
    "Jigglypuff",
    "sings you into some kind of horrific coma"
  ))
};

module.exports = { player1choice, player2choice };
