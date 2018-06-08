class Pokemon {
  constructor(name, type, sound, moves) {
    this.name = name;
    this.type = type;
    this.hp = Math.floor(Math.random() * (110 - 90) + 90);
    this.atk = Math.floor(Math.random() * (20 - 16) + 16);
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

module.exports = { Pokemon };
