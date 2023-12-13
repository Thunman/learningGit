
class Deck{
    constructor(amountOfDecks){
        this.decks = this.generateDecks(amountOfDecks);
    }

    generateDecks(amountOfDecks){
        const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
        const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

        const orderedDecks = [];

        for(let i = 0; i < amountOfDecks; i ++){
            for(let suit of suits){
                for(let value of values){
                    orderedDecks.push(`${value} of ${suit}`);
                }
            }
        }
        this.#shuffle(orderedDecks);
        return orderedDecks;
    }
    get remainingCards(){
        return this.decks.length;
    }

    //Deal an amount of cards or just one if amount not specified
    deal(numOfCards = 1){
        const cards = [];
        if(this.decks.length < numOfCards) return `Not enough cards in deck`;
        else{
            for(let i = 0; i < numOfCards; i ++){
                cards.push(this.decks.shift());
            }
        }
        return cards;
    }
    //Using the Fisher-Yates algorithm to shuffle
    #shuffle(decks) {
        for (let i = decks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [decks[i], decks[j]] = [decks[j], decks[i]];
        }
    }
}

/*      TODO
    make a method to get a specific card or cards


*/
