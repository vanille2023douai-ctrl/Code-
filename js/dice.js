// js/dice.js
// Gère la logique et l'animation des dés 3D.

console.log("dice.js loaded");

export class Dice {
    constructor(scene) {
        this.scene = scene;
        // La logique des dés 3D (probablement avec un moteur physique comme Cannon.js) viendra ici.
    }

    roll() {
        const die1 = Math.floor(Math.random() * 6) + 1;
        const die2 = Math.floor(Math.random() * 6) + 1;
        console.log(`Rolled ${die1} and ${die2}`);
        return [die1, die2];
    }
}
