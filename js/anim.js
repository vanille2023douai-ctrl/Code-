// js/anim.js
// Gère les animations complexes (déplacement de pion, lancer de dés, etc.).

console.log("anim.js loaded");

export class Animation {
    constructor() {
        // La logique d'animation (par exemple, avec TWEEN.js ou GSAP) viendra ici.
    }

    movePawn(pawn, from, to) {
        // Animer le déplacement du pion 3D
        console.log(`Animating pawn from ${from} to ${to}`);
    }

    animateDice(dice) {
        // Animer le lancer de dés
        console.log('Animating dice roll');
    }
}
