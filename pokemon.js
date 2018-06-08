class Pokemon {
  constructor(name, type, sound, moves) {
    this.name = name;
    this.type = type;
    this.hp = Math.floor(Math.random() * (131 - 90) + 90);
    this.atk = Math.floor(Math.random() * (24 - 16) + 16);
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
class NormalPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Fighting'];
  this.resist = [];
  this.immune = ['Ghost'];
  }
}
class FirePokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Water', 'Ground', 'Rock'];
  this.resist = ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'];
  this.immune = [];
  }
}
class WaterPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Grass', 'Electric'];
  this.resist = ['Fire', 'Water', 'Ice', 'Steel'];
  this.immune = [];
  }
}
class ElectricPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Ground'];
  this.resist = ['Electric', 'Flying', 'Steel'];
  this.immune = [];
  }
}
class GrassPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Fire', 'Ice', 'Poison', 'Flying', 'Bug'];
  this.resist = ['Water', 'Grass', 'Electric', 'Ground'];
  this.immune = [];
  }
}
class IcePokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Fire','Fighting','Rock','Steel'];
  this.resist = ['Ice'];
  this.immune = [];
  }
}
class FightingPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Flying','Psychic','Fairy'];
  this.resist = ['Bug','Rock','Dark'];
  this.immune = [];
  }
}
class PoisonPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Ground','Psychic'];
  this.resist = ['Grass','Fighting','Poison','Bug','Fairy'];
  this.immune = [];
  }
}
class GroundPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Water', 'Grass', 'Ice'];
  this.resist = ['Poison', 'Rock'];
  this.immune = ['Electric'];
  }
}
class FlyingPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Electric','Ice','Rock'];
  this.resist = ['Grass','Fighting','Bug'];
  this.immune = ['Ground'];
  }
}
class PsychicPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Bug','Ghost','Dark'];
  this.resist = ['Fighting','Psychic'];
  this.immune = [];
  }
}
class BugPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Fire','Flying','Rock'];
  this.resist = ['Grass','Fighting','Ground'];
  this.immune = [];
  }
}
class RockPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Water','Grass','Fighting','Ground','Steel'];
  this.resist = ['Normal','Fire','Poison','Flying'];
  this.immune = [];
  }
}
class GhostPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Ghost','Dark'];
  this.resist = ['Poison','Bug'];
  this.immune = ['Normal','Fighting'];
  }
}
class DragonPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Ice','Dragon','Fairy'];
  this.resist = ['Fire','Water','Electric','Grass'];
  this.immune = [];
  }
}
class DarkPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Fighting','Bug','Fairy'];
  this.resist = ['Ghost','Dark'];
  this.immune = ['Psychic'];
  }
}
class SteelPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Fire','Fighting','Ground'];
  this.resist = ['Normal','Grass','Ice','Flying','Psychic','Bug','Rock','Dragon','Steel','Fairy'];
  this.immune = ['Poison'];
  }
}
class FairyPokemon extends Pokemon {
  constructor(name, type, sound, moves) {
    super(name, type, sound, moves);
  this.weakness = ['Poison','Steel'];
  this.resist = ['Fighting','Bug','Dark'];
  this.immune = ['Dragon'];
  }
}

module.exports = { Pokemon, NormalPokemon, FirePokemon, WaterPokemon, ElectricPokemon, GrassPokemon, IcePokemon, FightingPokemon, PoisonPokemon, GroundPokemon, FlyingPokemon, PsychicPokemon, BugPokemon, RockPokemon, GhostPokemon, DragonPokemon, DarkPokemon, SteelPokemon, FairyPokemon };
