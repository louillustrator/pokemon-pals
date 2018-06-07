function Pokemon (name, type, hp, atk, sound, moves) {
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.atk = atk;
    this.sound = sound;
    this.moves = moves;
}

Pokemon.prototype.talk = function() {
    return this.sound;
}

Pokemon.prototype.useYourMoves = function() {
    return this.moves;
}

module.exports = {Pokemon};