export interface Coordinates {
    q: number;
    r: number;
}

export interface Tile {
    id: number;
    center: string;
    edges: string[];
}

export interface TileWithCoordinates extends Tile {
    coordinates: Coordinates;
}