
import { Tile, FieldType, Deck } from '../types/tile';




const tile_001: Tile = {
  id: 1,
  name: "Toute eau",
  center: FieldType.Water,
  edges: [FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water],
};

const tuile2: Tile = {
  id: 2,
  center: FieldType.Water,
  edges: [FieldType.Earth, FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water],
};

const tuile3: Tile = {
  id: 3,
  center: FieldType.Water,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water],
};

const tuile4: Tile = {
  id: 4,
  center: FieldType.Water,
  edges: [FieldType.Earth, FieldType.Water, FieldType.Earth, FieldType.Water, FieldType.Water, FieldType.Water],
};

const tuile5: Tile = {
  id: 5,
  center: FieldType.Water,
  edges: [FieldType.Earth, FieldType.Water, FieldType.Water, FieldType.Earth, FieldType.Water, FieldType.Water],
};

const tuile6: Tile = {
  id: 6,
  center: FieldType.Water,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Water, FieldType.Water],
};

const tuile7: Tile = {
  id: 7,
  center: FieldType.Water,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Earth, FieldType.Water, FieldType.Water],
};

const tuile8: Tile = {
  id: 8,
  center: FieldType.Water,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Water, FieldType.Earth, FieldType.Water],
};

const tuile9: Tile = {
  id: 9,
  center: FieldType.Water,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Water],
};

const tuile10: Tile = {
  id: 10,
  center: FieldType.Water,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Earth, FieldType.Water],
};

const tuile11: Tile = {
  id: 11,
  center: FieldType.Water,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Earth, FieldType.Earth, FieldType.Water],
};

const tuile12: Tile = {
  id: 12,
  center: FieldType.Water,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Water],
};

const tuile13: Tile = {
  id: 13,
  center: FieldType.Water,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Earth],
};



const tile_014: Tile = {
  id: 14,
  name: "Toute eau simple",
  center: FieldType.Water,
};


const tuile101: Tile = {
  id: 101,
  name: "Ilot central",
  center: FieldType.Earth,
  edges: [FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water],
};

const tuile102: Tile = {
  id: 102,
  center: FieldType.Earth,
  edges: [FieldType.Earth, FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water],
};

const tuile103: Tile = {
  id: 103,
  center: FieldType.Earth,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water],
};

const tuile104: Tile = {
  id: 104,
  center: FieldType.Earth,
  edges: [FieldType.Earth, FieldType.Water, FieldType.Earth, FieldType.Water, FieldType.Water, FieldType.Water],
};

const tuile105: Tile = {
  id: 105,
  center: FieldType.Earth,
  edges: [FieldType.Earth, FieldType.Water, FieldType.Water, FieldType.Earth, FieldType.Water, FieldType.Water],
};

const tuile106: Tile = {
  id: 106,
  center: FieldType.Earth,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Water, FieldType.Water],
};

const tuile107: Tile = {
  id: 107,
  center: FieldType.Earth,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Earth, FieldType.Water, FieldType.Water],
};

const tuile108: Tile = {
  id: 108,
  center: FieldType.Earth,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Water, FieldType.Earth, FieldType.Water],
};

const tuile109: Tile = {
  id: 109,
  center: FieldType.Earth,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Water],
};

const tuile110: Tile = {
  id: 110,
  center: FieldType.Earth,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Earth, FieldType.Water],
};

const tuile111: Tile = {
  id: 111,
  center: FieldType.Earth,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Water, FieldType.Earth, FieldType.Earth, FieldType.Water],
};

const tuile112: Tile = {
  id: 112,
  center: FieldType.Earth,
  edges: [FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Earth, FieldType.Water],
};

const tuile113: Tile = {
  id: 113,
  name: "Toute terre",
  center: FieldType.Earth
};



export const defaultPatterns = ['#7dd1ff', '#a65a35'];

const deck:Deck = {tiles:[
  { tile: tile_001, quantity: 3 },
  { tile: tile_014, quantity: 1 },
  { tile: tuile2, quantity: 1 },
  { tile: tuile3, quantity: 1 },
  { tile: tuile4, quantity: 1 },
  { tile: tuile5, quantity: 1 },
  { tile: tuile6, quantity: 1 },
  { tile: tuile7, quantity: 1 },
  { tile: tuile8, quantity: 1 },
  { tile: tuile9, quantity: 1 },
  { tile: tuile10, quantity: 1 },
  { tile: tuile11, quantity: 1 },
  { tile: tuile12, quantity: 1 },
  { tile: tuile13, quantity: 1 },
  { tile: tuile101, quantity: 3 },
  { tile: tuile102, quantity: 1 },
  { tile: tuile103, quantity: 1 },
  { tile: tuile104, quantity: 1 },
  { tile: tuile105, quantity: 1 },
  { tile: tuile106, quantity: 1 },
  { tile: tuile107, quantity: 1 },
  { tile: tuile108, quantity: 1 },
  { tile: tuile109, quantity: 1 },
  { tile: tuile110, quantity: 1 },
  { tile: tuile111, quantity: 1 },
  { tile: tuile112, quantity: 1 },
  { tile: tuile113, quantity: 1 },

]};

export default deck;
