class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.pokemon1 = trainer1.pkmnTeam[1];
    this.pokemon2 = trainer2.pkmnTeam[1];
    this.poke1TempHp = this.pokemon1.hp;
    this.poke2TempHp = this.pokemon2.hp;
    this.whoseturn = 1;
  }
  fight1() {
    console.log(`${this.pokemon1.name} uses ${this.pokemon1.moves}.`);
    this.poke2TempHp = this.poke2TempHp - this.pokemon1.atk;
    console.log(
      `${this.pokemon2.name} takes ${
        this.pokemon1.atk
      } points of damage!!!!!!!!`
    );

    if (this.poke2TempHp < 1) {
      console.log(`${this.pokemon2.name} has fainted!`);
      console.log(`${this.trainer1.name} wins.`);
      return;
    }
    console.log(
      `${this.pokemon1.name} ${this.poke1TempHp}/${this.pokemon1.hp} | ${
        this.pokemon2.name
      } ${this.poke2TempHp}/${this.pokemon2.hp} `
    );
  }

  fight2() {
    console.log(`${this.pokemon2.name} uses ${this.pokemon2.moves}.`);
    this.poke1TempHp = this.poke1TempHp - this.pokemon2.atk;
    console.log(
      `${this.pokemon1.name} takes ${
        this.pokemon2.atk
      } points of damage!!!!!!!!`
    );

    if (this.poke1TempHp < 1) {
      console.log(`${this.pokemon1.name} has fainted!`);
      console.log(`${this.trainer2.name} wins.`);
      return;
    }
    console.log(
      `${this.pokemon1.name} ${this.poke1TempHp}/${this.pokemon1.hp} | ${
        this.pokemon2.name
      } ${this.poke2TempHp}/${this.pokemon2.hp} `
    );
  }
}

module.exports = { Battle };
