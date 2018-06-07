function Trainer(name) {
    this.name = name;
    this.pkmnTeamSize = 0;
    this.pkmnTeam = {};
}

Trainer.prototype.catch = function(pokename) {
    this.pkmnTeamSize ++;
    this.pkmnTeam[this.pkmnTeamSize] = pokename;
}

module.exports = {Trainer};