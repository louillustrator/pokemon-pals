class Trainer {
  constructor(name) {
    this.name = name;
    this.pkmnTeamSize = 0;
    this.pkmnTeam = {};
  }
  catch(pokename) {
    this.pkmnTeamSize++;
    this.pkmnTeam[this.pkmnTeamSize] = pokename;
  }
}

// Trainer.prototype.catch = function(pokename) {
//   this.pkmnTeamSize++;
//   this.pkmnTeam[this.pkmnTeamSize] = pokename;
// };

module.exports = { Trainer };
