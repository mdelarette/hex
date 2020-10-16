export interface Coordinates {
    q: number;
    r: number;
}

export interface Tile {
    id: number;
    name?: string;
    center: string;
    edges?: string[];
}

export interface TileWithCoordinates extends Tile {
    coordinates: Coordinates;
}
export interface QuantifiedTile {
    tile:Tile;
    quantity:number;
}
export interface Deck {
    tiles: QuantifiedTile[]
}

export interface Playfield {
    tiles: TileWithCoordinates[]
}