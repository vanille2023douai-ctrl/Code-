// js/camera.js
// Gère les mouvements et les comportements dynamiques de la caméra.

console.log("camera.js loaded");

export class CameraController {
    constructor(camera) {
        this.camera = camera;
    }

    focusOn(target) {
        // Logique pour faire un zoom ou un focus sur un objet ou une case
        console.log('Focusing camera on target');
    }

    followPawn(pawn) {
        // Logique pour que la caméra suive le pion actif
        console.log('Camera is now following the pawn');
    }

    resetView() {
        // Retour à la vue orbitale par défaut
        console.log('Resetting camera view');
    }
}
