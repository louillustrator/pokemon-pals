const {Pokemon} = require('../pokemon.js');
const {Trainer} = require('../trainer.js');
const {expect} = require('chai');

describe('Pokemon',() => {
    it('Creates a new Pokemon with 6 properties',() => {
        const eevee = new Pokemon('Eevee', 'Normal', 20, 20, 'eee', 'takedown');
        expect(eevee.name).to.equal('Eevee');
        expect(eevee.type).to.equal('Normal');
        expect(eevee.hp).to.equal(20);
        expect(eevee.atk).to.equal(20);
        expect(eevee.sound).to.equal('eee');
        expect(eevee.moves).to.equal('takedown');
    });
    it('Can return the Pokemons call with a prototype',() => {
        const eevee = new Pokemon('Eevee', 'Normal', 20, 20, 'eee', 'takedown');
        expect(eevee.talk()).to.equal('eee');
    });
    it('Can return the Pokemons moves with a prototype',() => {
        const eevee = new Pokemon('Eevee', 'Normal', 20, 20, 'eee', 'takedown');
        expect(eevee.useYourMoves()).to.equal('takedown');
    });
});