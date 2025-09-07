// js/save.js
// Gère la sauvegarde et le chargement de l'état de la partie en JSON.

console.log("save.js loaded");

export class SaveSystem {
    save(gameState) {
        try {
            const gameStateJSON = JSON.stringify(gameState);
            localStorage.setItem('monopoly3d_save', gameStateJSON);
            console.log("Game saved successfully.");
        } catch (error) {
            console.error("Failed to save game:", error);
        }
    }

    load() {
        try {
            const gameStateJSON = localStorage.getItem('monopoly3d_save');
            if (gameStateJSON) {
                console.log("Save file found.");
                return JSON.parse(gameStateJSON);
            }
            console.log("No save file found.");
            return null;
        } catch (error) {
            console.error("Failed to load game:", error);
            return null;
        }
    }
}
