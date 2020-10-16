// interface Tile

// { id: number; centre: string; cotes: string[]; }

export type Coordinates = {
    q: number;
    r: number;
  };

export interface Tile {
    id: number;
    name?: string;
    center: string;
    edges?: string[];
}

export interface TileWithCoordinates extends Tile {
    coordinates: Coordinates;
}