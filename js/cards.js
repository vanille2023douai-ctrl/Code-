// js/cards.js
// Définit les données et la logique pour les cartes Chance et Caisse de Communauté.

console.log("cards.js loaded");

export const CHANCE_CARDS = [
    { text: "Avancez jusqu'à la case Départ.", action: 'move_to', target: 0 },
    { text: "Allez en Prison.", action: 'go_to_jail' },
    // ... autres cartes
];

export const COMMUNITY_CHEST_CARDS = [
    { text: "Erreur de la banque en votre faveur. Recevez 200€.", action: 'add_money', amount: 200 },
    // ... autres cartes
];

export class CardDeck {
    constructor(cards) {
        this.deck = [...cards];
        this.shuffle();
    }

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    draw() {
        if (this.deck.length === 0) {
            this.shuffle(); // Remélanger si le paquet est vide
        }
        return this.deck.pop();
    }
}
