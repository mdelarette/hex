
import { Tile, FieldType, Deck } from '../types/tile';

// Water = 0,
// Earth,
// Forest,
// Desert,
// Field,
// Clay,
// Mountain
export const defaultPatterns = ['#7dd1ff', '#a65a35', 'green', '#FFFFCC', 'yellow', 'orange', 'grey', '#009933'];

// CATAN STYLE
const catan_forest: Tile = {
  id: 1001,
  name: "Forest",
  center: FieldType.Forest
};
const catan_desert: Tile = {
  id: 1002,
  name: "Desert",
  center: FieldType.Desert
};
const catan_field: Tile = {
  id: 1003,
  name: "Field",
  center: FieldType.Field
};
const catan_clay: Tile = {
  id: 1004,
  name: "Clay",
  center: FieldType.Clay
};
const catan_moutain: Tile = {
  id: 1005,
  name: "Mountain",
  center: FieldType.Mountain
};
const catan_meadow: Tile = {
  id: 1006,
  name: "Meadow",
  center: FieldType.Meadow
};


export const catan_deck:Deck = {tiles:[
  { tile: catan_clay, quantity: 3 },
  { tile: catan_desert, quantity: 1 },
  { tile: catan_field, quantity: 4 },
  { tile: catan_forest, quantity: 4 },
  { tile: catan_moutain, quantity: 3 },
  { tile: catan_meadow, quantity: 4 }
]};




// Hex style

const tile_001: Tile = {
  id: 1,
  name: "Toute eau",
  center: FieldType.Water
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




const deck:Deck = {tiles:[

  { tile: tile_001, quantity: 3 },
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
