// js/ai.js
// Contient la logique pour l'intelligence artificielle des joueurs non-humains.

console.log("ai.js loaded");

export class AI {
    constructor(player, gameState) {
        this.player = player;
        this.gameState = gameState;
    }

    makeDecision() {
        // La logique de décision de l'IA (acheter, construire, etc.) viendra ici.
        console.log(`AI ${this.player.name} is thinking...`);

        // Exemple de décision simple: toujours acheter si possible.
        return { action: 'buy_if_possible' };
    }
}
