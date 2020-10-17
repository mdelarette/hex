export enum FieldType {
    Water = 0,
    Earth,
    Forest,
    Desert
  }


export interface Coordinates {
    q: number;
    r: number;
}
export interface Point {
    x: number;
    y: number;
}

export interface Tile {
    id: number;
    name?: string;

    center: FieldType;
    edges?: FieldType[];
}

export interface TileWithCoordinates extends Tile {
    coordinates: Coordinates;
}
export interface QuantifiedTile {
    tile:Tile;
    quantity:number;
}
export interface Deck {
    tiles: QuantifiedTile[];
}

export interface Playfield {
    tiles: TileWithCoordinates[];
}