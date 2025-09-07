// js/player.js
// Définit la classe Joueur, qui gère l'état d'un joueur (pion, argent, propriétés, etc.).

console.log("player.js loaded");

export class Player {
    constructor(id, name, isAI = false) {
        this.id = id;
        this.name = name;
        this.isAI = isAI;

        this.cash = 1500;
        this.properties = [];
        this.position = 0;
        this.inJail = false;
        this.jailTurns = 0;
        this.getOutOfJailCards = 0;

        // Le pion 3D sera un objet Three.js
        this.pawn = null;

        console.log(`Player ${this.name} created.`);
    }

    addCash(amount) {
        this.cash += amount;
    }

    removeCash(amount) {
        this.cash -= amount;
        // La logique de faillite sera gérée dans game.js
    }

    moveTo(newPosition) {
        this.position = newPosition;
        // La logique de déplacement du pion 3D sera ici
    }
}
