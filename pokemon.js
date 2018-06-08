class Pokemon {
  constructor(name, type, sound, moves) {
    this.name = name;
    this.type = type;
    this.hp = Math.floor(Math.random() * (111 - 90) + 90);
    this.atk = Math.floor(Math.random() * (21 - 16) + 16);
    this.sound = sound;
    this.moves = moves;
  }
  talk() {
    return this.sound;
  }
  useYourMoves() {
    return this.moves;
  }
}

class GrassPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Fire'];
  this.resist = ['Water', 'Grass', 'Electric', 'Ground'];
  this.immune = [];
  }
}
class FirePokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Water', 'Ground'];
  this.resist = ['Fire', 'Grass'];
  this.immune = [];
  }
}
class WaterPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Grass', 'Electric'];
  this.resist = ['Fire', 'Water'];
  this.immune = [];
  }
}
class ElectricPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Ground'];
  this.resist = ['Electric'];
  this.immune = [];
  }
}
class GroundPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Water', 'Grass'];
  this.resist = [];
  this.immune = ['Electric'];
  }
}

module.exports = { Pokemon, GrassPokemon, FirePokemon, WaterPokemon, GroundPokemon, ElectricPokemon };
