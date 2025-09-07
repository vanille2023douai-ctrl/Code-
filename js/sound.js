// js/sound.js
// Gère la musique d'ambiance et les effets sonores.

console.log("sound.js loaded");

export class Sound {
    constructor() {
        // La logique pour charger et jouer les sons (probablement avec Web Audio API) viendra ici.
        this.musicEnabled = false;
        this.sfxEnabled = true;
    }

    playMusic(track) {
        if (this.musicEnabled) {
            console.log(`Playing music: ${track}`);
        }
    }

    playSoundEffect(sfx) {
        if (this.sfxEnabled) {
            console.log(`Playing SFX: ${sfx}`);
        }
    }
}
