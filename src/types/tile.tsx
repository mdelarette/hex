// interface Tile

// { id: number; centre: string; cotes: string[]; }

type Coordinates = {
    q: number;
    r: number;
  };

interface Tile {
    id: number;
    center: string;
    edges: string[];
}

interface TileWithCoordinates extends Tile {
    coordinates: Coordinates;
}