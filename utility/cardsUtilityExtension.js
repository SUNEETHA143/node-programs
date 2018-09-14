var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/linkedList.js');

var utility1 = require('/home/bridgeit/ram mohan reddy/node programs/utility/queue.js');
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

        var queue = new utility1();

        for (let index = 1; index <= players; index++) {

            let name = '';

            name = 'player' + index;

            name = [];

            for (let index = initial; index < stop; index++) {

                name.push(this.totalCards[index]);
            }


            var sorter = this.MySort('A23456798910JKQ');

            name.sort(sorter);

            var ll = new utility();

            for (let index = 0; index < name.length; index++) {

                ll.add(name[index]);
            }

            let output = ll.printList();

            queue.enqueue(output);

            initial = initial + size;

            stop = stop + size;

        }

        return queue.printQueue();
    }

    MySort(alphabet) {
        return function (a, b) {
            var index_a = alphabet.indexOf(a[0]),
                index_b = alphabet.indexOf(b[0]);

            if (index_a === index_b) {
                // same first character, sort regular
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                }
                return 0;
            } else {
                return index_a - index_b;
            }
        }
    }


}

module.exports = Cards;