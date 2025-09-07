// js/ui.js
// Gère l'interface utilisateur (HUD), les popups, et les interactions des joueurs.

console.log("ui.js loaded");

export class UI {
    constructor() {
        this.hudElement = document.getElementById('hud');
        this.updateHUD({
            currentPlayer: "Aucun",
            money: 0
        });
    }

    updateHUD(data) {
        this.hudElement.innerHTML = `
            <p>Joueur: ${data.currentPlayer}</p>
            <p>Argent: ${data.money}€</p>
        `;
    }

    showPopup(message) {
        // La logique pour afficher des popups (achat, cartes, etc.) viendra ici.
        alert(message);
    }
}
