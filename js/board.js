// js/board.js
// Gère la création 3D du plateau et la définition des 40 cases.

console.log("board.js loaded");

export const COLORS = {
    BROWN: 0x8b4513,
    LIGHTBLUE: 0x87cefa,
    PINK: 0xff69b4,
    ORANGE: 0xff8c00,
    RED: 0xef4444,
    YELLOW: 0xfacc15,
    GREEN: 0x10b981,
    DARKBLUE: 0x1e3a8a,
    STATION: 0xcccccc,
    UTILITY: 0xdddddd,
    TAX: 0xbbbbbb,
    CHANCE: 0xffff00,
    COMMUNITY: 0x00ffff,
    CORNER: 0xeeeeee,
};

export const BOARD_DATA = [
    { id: 0, type: 'go', name: 'Départ', color: COLORS.CORNER },
    { id: 1, type: 'property', group: 'BROWN', name: 'Boulevard de Belleville', price: 60, color: COLORS.BROWN },
    { id: 2, type: 'community-chest', name: 'Caisse de Communauté', color: COLORS.COMMUNITY },
    { id: 3, type: 'property', group: 'BROWN', name: 'Rue Lecourbe', price: 60, color: COLORS.BROWN },
    { id: 4, type: 'tax', name: 'Impôt sur le Revenu', price: 200, color: COLORS.TAX },
    { id: 5, type: 'station', name: 'Gare Montparnasse', price: 200, color: COLORS.STATION },
    { id: 6, type: 'property', group: 'LIGHTBLUE', name: 'Rue de Vaugirard', price: 100, color: COLORS.LIGHTBLUE },
    { id: 7, type: 'chance', name: 'Chance', color: COLORS.CHANCE },
    { id: 8, type: 'property', group: 'LIGHTBLUE', name: 'Rue de Courcelles', price: 100, color: COLORS.LIGHTBLUE },
    { id: 9, type: 'property', group: 'LIGHTBLUE', name: 'Avenue de la République', price: 120, color: COLORS.LIGHTBLUE },
    { id: 10, type: 'jail', name: 'Prison', color: COLORS.CORNER },
    { id: 11, type: 'property', group: 'PINK', name: 'Boulevard de la Villette', price: 140, color: COLORS.PINK },
    { id: 12, type: 'utility', name: 'Compagnie d\'Électricité', price: 150, color: COLORS.UTILITY },
    { id: 13, type: 'property', group: 'PINK', name: 'Avenue de Neuilly', price: 140, color: COLORS.PINK },
    { id: 14, type: 'property', group: 'PINK', name: 'Rue de Paradis', price: 160, color: COLORS.PINK },
    { id: 15, type: 'station', name: 'Gare de Lyon', price: 200, color: COLORS.STATION },
    { id: 16, type: 'property', group: 'ORANGE', name: 'Avenue Mozart', price: 180, color: COLORS.ORANGE },
    { id: 17, type: 'community-chest', name: 'Caisse de Communauté', color: COLORS.COMMUNITY },
    { id: 18, type: 'property', group: 'ORANGE', name: 'Boulevard Saint-Michel', price: 180, color: COLORS.ORANGE },
    { id: 19, type: 'property', group: 'ORANGE', name: 'Place Pigalle', price: 200, color: COLORS.ORANGE },
    { id: 20, type: 'free-parking', name: 'Parc Gratuit', color: COLORS.CORNER },
    { id: 21, type: 'property', group: 'RED', name: 'Avenue Matignon', price: 220, color: COLORS.RED },
    { id: 22, type: 'chance', name: 'Chance', color: COLORS.CHANCE },
    { id: 23, type: 'property', group: 'RED', name: 'Boulevard Malesherbes', price: 220, color: COLORS.RED },
    { id: 24, type: 'property', group: 'RED', name: 'Avenue Henri-Martin', price: 240, color: COLORS.RED },
    { id: 25, type: 'station', name: 'Gare du Nord', price: 200, color: COLORS.STATION },
    { id: 26, type: 'property', group: 'YELLOW', name: 'Faubourg Saint-Honoré', price: 260, color: COLORS.YELLOW },
    { id: 27, type: 'property', group: 'YELLOW', name: 'Place de la Bourse', price: 260, color: COLORS.YELLOW },
    { id: 28, type: 'utility', name: 'Compagnie des Eaux', price: 150, color: COLORS.UTILITY },
    { id: 29, type: 'property', group: 'YELLOW', name: 'Rue La Fayette', price: 280, color: COLORS.YELLOW },
    { id: 30, type: 'go-to-jail', name: 'Allez en Prison', color: COLORS.CORNER },
    { id: 31, type: 'property', group: 'GREEN', name: 'Avenue de Breteuil', price: 300, color: COLORS.GREEN },
    { id: 32, type: 'property', group: 'GREEN', name: 'Avenue Foch', price: 300, color: COLORS.GREEN },
    { id: 33, type: 'community-chest', name: 'Caisse de Communauté', color: COLORS.COMMUNITY },
    { id: 34, type: 'property', group: 'GREEN', name: 'Boulevard des Capucines', price: 320, color: COLORS.GREEN },
    { id: 35, type: 'station', name: 'Gare Saint-Lazare', price: 200, color: COLORS.STATION },
    { id: 36, type: 'chance', name: 'Chance', color: COLORS.CHANCE },
    { id: 37, type: 'property', group: 'DARKBLUE', name: 'Avenue des Champs-Élysées', price: 350, color: COLORS.DARKBLUE },
    { id: 38, type: 'tax', name: 'Taxe de Luxe', price: 100, color: COLORS.TAX },
    { id: 39, type: 'property', group: 'DARKBLUE', name: 'Rue de la Paix', price: 400, color: COLORS.DARKBLUE },
];

export class Board {
    constructor(scene) {
        this.scene = scene;
        this.createBoard();
    }

    createBoard() {
        // Logique de création du plateau 3D viendra ici
        const boardGroup = new THREE.Group();

        // Exemple: un plan de base pour le centre
        const centerGeometry = new THREE.PlaneGeometry(20, 20);
        const centerMaterial = new THREE.MeshLambertMaterial({ color: 0xc8e6c9 });
        const centerPlane = new THREE.Mesh(centerGeometry, centerMaterial);
        centerPlane.rotation.x = -Math.PI / 2;
        centerPlane.position.y = -0.1;
        boardGroup.add(centerPlane);

        this.scene.add(boardGroup);
        console.log("Board 3D structure created.");
    }
}
