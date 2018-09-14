var prompt = require('prompt-sync')();
class Cards {

    constructor() {
        this.ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9",
            "10", "J", "Q", "K");

        this.suits = new Array("♠", "♥", "♦", "♣");

        this.totalCards = [];
    }

    deckOfCards() {


        for (let i = 0; i < this.suits.length; i++) {


            for (let j = 0; j < this.ranks.length; j++) {


                let temp = ''

                temp = temp + this.ranks[j] + this.suits[i];
                this.totalCards.push(temp);

            }
        }

        return this.totalCards;
    }

    shuffleCards() {

        var temp;
        for (let i = 0; i < this.totalCards.length; i++) {
            var random = Math.floor(Math.random() * this.totalCards.length);
            temp = this.totalCards[i];
            this.totalCards[i] = this.totalCards[random];
            this.totalCards[random] = temp;
        }

        return this.totalCards;

    }

    cardsOfSpades() {

        var reg = /♠/g;

        let spades = [];

        for (let index = 0; index < this.totalCards.length; index++) {
            if (this.totalCards[index].search(reg) != -1) {

                spades.push(this.totalCards[index]);

            }

        }

        return spades;
    }

    cardsOfHearts() {

        var reg = /♥/g;

        let hearts = [];

        for (let index = 0; index < this.totalCards.length; index++) {
            if (this.totalCards[index].search(reg) != -1) {

                hearts.push(this.totalCards[index]);

            }

        }

        return hearts;
    }

    cardsOfDiamonds() {

        var reg = /♦/g;

        let diamonds = [];

        for (let index = 0; index < this.totalCards.length; index++) {
            if (this.totalCards[index].search(reg) != -1) {

                diamonds.push(this.totalCards[index]);

            }

        }

        return diamonds;
    }

    cardsOfClubs() {

        var reg = /♣/g;

        let clubs = [];

        for (let index = 0; index < this.totalCards.length; index++) {
            if (this.totalCards[index].search(reg) != -1) {

                clubs.push(this.totalCards[index]);

            }

        }

        return clubs;
    }

    distribute() {

        var players = prompt('Enter number of players : ');

        var size = parseInt(prompt('Enter number of cards for each player : '));

        let initial = 0;
        let stop = size;

        let result = [];

        for (let index = 1; index <= players; index++) {

            let name = '';

            name = 'player' + index;

            name = [];

            for (let index = initial; index < stop; index++) {

                name.push(this.totalCards[index]);
            }

            result.push(name);
            console.log('\nCards for player' + index + ' are : ' + name);

            initial = initial + size;

            stop = stop + size;

        }

        return result;
    }

}

module.exports = Cards;