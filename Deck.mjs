class Deck{
    constructor(deckObj){
        this.shuffledDeck = this.generateDecks(deckObj);
    }

    generateDecks(deckObj){
        
        const shuffledDeck = [];

        for (let suit in deckObj) {
            const values = deckObj[suit];

            for (let value in values) {
                const card = {
                    value: values[value], 
                    suit: suit
                };
                shuffledDeck.push(card);
            }
        }
        
        this.#shuffle(shuffledDeck);
        return shuffledDeck;
    }
    get remainingCards(){
        return this.decks.length;
    }

    //Deal an amount of cards or just one if amount not specified
    deal(numOfCards = 1){
        const cards = [];
        if(this.decks.length < numOfCards) console.log(`Not enough cards in deck`);
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
    getCards(value, suit, amount = 1){
        const cards = [];
        const matchingCards = this.decks.filter((card) => card.value === value && card.suit === suit);

        if (matchingCards.length < amount) console.log(`Not enough cards with value ${value} and suit ${suit} in the deck`);
        else{
            for (let i = 0; i < amount; i++) {
                const cardToRemove = this.decks.findIndex((card) => card.value === value && card.suit === suit);
                const removedCard = this.decks.splice(cardToRemove, 1);
                cards.push(removedCard);
            }
        }
        return cards;
    }
}


