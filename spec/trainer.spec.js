const {Pokemon} = require('../pokemon.js');
const {Trainer} = require('../trainer.js');
const {expect} = require('chai');

describe('Trainer',() => {
    it('Creates a new trainer with a name',() => {
        const tim = new Trainer('Tim');
        expect(tim.name).to.equal('Tim');
    });
    it('can catch Pokemon using a catch function', () => {
        const lou = new Trainer('Lou');
        const pikachu = new Pokemon('Pikachu', 'Electric', 20, 20, 'Pika', 'Thundershock')
        lou.catch(pikachu);
        expect(lou.pkmnTeam).to.eql({ 1: pikachu });
        expect(lou.pkmnTeamSize).to.equal(1);
    });
});