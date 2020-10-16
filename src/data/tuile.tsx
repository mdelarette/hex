import { Tile, FieldType, Deck } from '../types/tile';




const tile_001: Tile = {
  id: 1,
  name: "Toute eau",
  center: FieldType.Water,
  edges: [FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water, FieldType.Water],
};

const tuile2 = {
  id: 2,
  centre: "blue",
  cotes: ["brown", "blue", "blue", "blue", "blue", "blue"],
};

const tuile3 = {
  id: 3,
  centre: "blue",
  cotes: ["brown", "brown", "blue", "blue", "blue", "blue"],
};

const tuile4 = {
  id: 4,
  centre: "blue",
  cotes: ["brown", "blue", "brown", "blue", "blue", "blue"],
};

const tuile5 = {
  id: 5,
  centre: "blue",
  cotes: ["brown", "blue", "blue", "brown", "blue", "blue"],
};

const tuile6 = {
  id: 6,
  centre: "blue",
  cotes: ["brown", "brown", "brown", "blue", "blue", "blue"],
};

const tuile7 = {
  id: 7,
  centre: "blue",
  cotes: ["brown", "brown", "blue", "brown", "blue", "blue"],
};

const tuile8 = {
  id: 8,
  centre: "blue",
  cotes: ["brown", "brown", "blue", "blue", "brown", "blue"],
};

const tuile9 = {
  id: 9,
  centre: "blue",
  cotes: ["brown", "brown", "brown", "brown", "blue", "blue"],
};

const tuile10 = {
  id: 10,
  centre: "blue",
  cotes: ["brown", "brown", "brown", "blue", "brown", "blue"],
};

const tuile11 = {
  id: 11,
  centre: "blue",
  cotes: ["brown", "brown", "blue", "brown", "brown", "blue"],
};

const tuile12 = {
  id: 12,
  centre: "blue",
  cotes: ["brown", "brown", "brown", "brown", "brown", "blue"],
};

const tuile13 = {
  id: 13,
  centre: "blue",
  cotes: ["brown", "brown", "brown", "brown", "brown", "brown"],
};


const tile_014: Tile = {
  id: 14,
  name: "Toute eau simple",
  center: FieldType.Water,
};


const tuile101 = {
  id: 101,
  name: "Ilot central",
  centre: "brown",
  cotes: ["blue", "blue", "blue", "blue", "blue", "blue"],
};

const tuile102 = {
  id: 102,
  centre: "brown",
  cotes: ["brown", "blue", "blue", "blue", "blue", "blue"],
};

const tuile103 = {
  id: 103,
  centre: "brown",
  cotes: ["brown", "brown", "blue", "blue", "blue", "blue"],
};

const tuile104 = {
  id: 104,
  centre: "brown",
  cotes: ["brown", "blue", "brown", "blue", "blue", "blue"],
};

const tuile105 = {
  id: 105,
  centre: "brown",
  cotes: ["brown", "blue", "blue", "brown", "blue", "blue"],
};

const tuile106 = {
  id: 106,
  centre: "brown",
  cotes: ["brown", "brown", "brown", "blue", "blue", "blue"],
};

const tuile107 = {
  id: 107,
  centre: "brown",
  cotes: ["brown", "brown", "blue", "brown", "blue", "blue"],
};

const tuile108 = {
  id: 108,
  centre: "brown",
  cotes: ["brown", "brown", "blue", "blue", "brown", "blue"],
};

const tuile109 = {
  id: 109,
  centre: "brown",
  cotes: ["brown", "brown", "brown", "brown", "blue", "blue"],
};

const tuile110 = {
  id: 110,
  centre: "brown",
  cotes: ["brown", "brown", "brown", "blue", "brown", "blue"],
};

const tuile111 = {
  id: 111,
  centre: "brown",
  cotes: ["brown", "brown", "blue", "brown", "brown", "blue"],
};

const tuile112 = {
  id: 112,
  centre: "brown",
  cotes: ["brown", "brown", "brown", "brown", "brown", "blue"],
};

const tuile113 = {
  id: 113,
  name: "Toute terre",
  centre: "brown",
  cotes: ["brown", "brown", "brown", "brown", "brown", "brown"],
};

const exp = {
  
}

export const defaultPatterns = ['#7dd1ff', '#a65a35'];

const deck:Deck = {tiles:[
  { tile: tile_001, quantity: 3 },
  { tile: tile_014, quantity: 1 },
  // { tuile: tuile3, quantite: 1 },
  // { tuile: tuile4, quantite: 1 },
  // { tuile: tuile5, quantite: 1 },
  // { tuile: tuile6, quantite: 1 },
  // { tuile: tuile7, quantite: 1 },
  // { tuile: tuile8, quantite: 1 },
  // { tuile: tuile9, quantite: 1 },
  // { tuile: tuile10, quantite: 1 },
  // { tuile: tuile11, quantite: 1 },
  // { tuile: tuile12, quantite: 1 },
  // { tuile: tuile13, quantite: 1 },
  // { tuile: tuile101, quantite: 3 },
  // { tuile: tuile102, quantite: 1 },
  // { tuile: tuile103, quantite: 1 },
  // { tuile: tuile104, quantite: 1 },
  // { tuile: tuile105, quantite: 1 },
  // { tuile: tuile106, quantite: 1 },
  // { tuile: tuile107, quantite: 1 },
  // { tuile: tuile108, quantite: 1 },
  // { tuile: tuile109, quantite: 1 },
  // { tuile: tuile110, quantite: 1 },
  // { tuile: tuile111, quantite: 1 },
  // { tuile: tuile112, quantite: 1 },
  // { tuile: tuile113, quantite: 1 },
]};

export default deck;