// js/game.js
// Chef d'orchestre principal du jeu.
// Gère la logique globale de la partie, l'état du jeu et initialise tous les autres modules.

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Board } from './board.js';

console.log("game.js loaded");

class Game {
    constructor() {
        this.init();
    }

    init() {
        // Scène
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xabcdef);

        // Caméra
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 15, 15);

        // Rendu
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        // Contrôles
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set(0, 0, 0);
        this.controls.update();

        // Lumières
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
        directionalLight.position.set(5, 10, 7.5);
        this.scene.add(directionalLight);

        // Redimensionnement
        window.addEventListener('resize', () => this.onWindowResize(), false);

        // Boucle d'animation
        this.animate = this.animate.bind(this);
        this.animate();

        this.board = new Board(this.scene);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

new Game();
