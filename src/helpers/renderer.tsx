
import { Tile, Point, TileWithCoordinates, Playfield } from '../types/tile';

const cosPiSur6 = Math.cos(Math.PI / 6);
const sinPiSur6 = 1 / 2; // (1/2)

export function drawTile(ctx:CanvasRenderingContext2D , position:Point, size:number, tile:Tile, patterns:string[]) {
  // console.log("drawTuile", tuile, " at ", x , "x", y);

  const innerLength = size / 3;

  const x = position.x;
  const y = position.y;
  const l = size;

  if(!tile)
  {
    drawFilledHex(ctx, position, size);
    return;
  }

  if(!tile.edges)
  {
    ctx.fillStyle = patterns[tile.center];
    drawFilledHex(ctx, position, size); // set patterns[tile.center];
    return;
  }


  // Gauche
  ctx.beginPath();
  ctx.moveTo(x - l * cosPiSur6, y - l * sinPiSur6);
  ctx.lineTo(x - l * cosPiSur6, y + l * sinPiSur6);
  ctx.lineTo(x - innerLength * cosPiSur6, y + innerLength * sinPiSur6);
  ctx.lineTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
  ctx.closePath();

  ctx.fillStyle = patterns[tile.edges[0]];

  ctx.fill();

  // Bas gauche
  ctx.beginPath();
  ctx.moveTo(x - l * cosPiSur6, y + l * sinPiSur6);
  ctx.lineTo(x, y + l);
  ctx.lineTo(x, y + innerLength);
  ctx.lineTo(x - innerLength * cosPiSur6, y + innerLength * sinPiSur6);
  ctx.closePath();
  ctx.fillStyle = patterns[tile.edges[1]];
  ctx.fill();

  // Bas droit
  ctx.beginPath();
  ctx.moveTo(x, y + l);
  ctx.lineTo(x + l * cosPiSur6, y + l * sinPiSur6);
  ctx.lineTo(x + innerLength * cosPiSur6, y + innerLength * sinPiSur6);
  ctx.lineTo(x, y + innerLength);
  ctx.closePath();
  ctx.fillStyle = patterns[tile.edges[2]];
  ctx.fill();

  // Droite
  ctx.beginPath();
  ctx.moveTo(x + l * cosPiSur6, y + l * sinPiSur6);
  ctx.lineTo(x + l * cosPiSur6, y - l * sinPiSur6);
  ctx.lineTo(x + innerLength * cosPiSur6, y - innerLength * sinPiSur6);
  ctx.lineTo(x + innerLength * cosPiSur6, y + innerLength * sinPiSur6);
  ctx.closePath();
  ctx.fillStyle = patterns[tile.edges[3]];
  ctx.fill();

  // Haut droit
  ctx.beginPath();
  ctx.moveTo(x + l * cosPiSur6, y - l * sinPiSur6);
  ctx.lineTo(x, y - l);
  ctx.lineTo(x, y - innerLength);
  ctx.lineTo(x + innerLength * cosPiSur6, y - innerLength * sinPiSur6);
  ctx.closePath();
  ctx.fillStyle = patterns[tile.edges[4]];
  ctx.fill();

  // Haut gauche
  ctx.beginPath();
  ctx.lineTo(x, y - l);
  ctx.lineTo(x - l * cosPiSur6, y - l * sinPiSur6);
  ctx.lineTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
  ctx.lineTo(x, y - innerLength);
  ctx.closePath();
  ctx.fillStyle = patterns[tile.edges[5]];
  ctx.fill();

  // Hexagone central
  ctx.beginPath();
  ctx.moveTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
  ctx.lineTo(x - innerLength * cosPiSur6, y + innerLength * sinPiSur6);
  ctx.lineTo(x, y + innerLength);
  ctx.lineTo(x + innerLength * cosPiSur6, y + innerLength * sinPiSur6);
  ctx.lineTo(x + innerLength * cosPiSur6, y - innerLength * sinPiSur6);
  ctx.lineTo(x, y - innerLength);
  ctx.lineTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
  ctx.closePath();

  ctx.fillStyle = patterns[tile.center];

  ctx.fill();
}

// function drawCircle(ctx, x, y, l) {
//   ctx.beginPath();
//   ctx.arc(x, y, l, 0, 2 * Math.PI);
//   ctx.stroke();
// }

// function drawHex(ctx, x, y, l) {
//   ctx.moveTo(x - l * cosPiSur6, y - l * sinPiSur6);
//   ctx.lineTo(x - l * cosPiSur6, y + l * sinPiSur6);
//   ctx.lineTo(x, y + l);
//   ctx.lineTo(x + l * cosPiSur6, y + l * sinPiSur6);
//   ctx.lineTo(x + l * cosPiSur6, y - l * sinPiSur6);
//   ctx.lineTo(x, y - l);
//   ctx.lineTo(x - l * cosPiSur6, y - l * sinPiSur6);

//   ctx.strokeStyle = "orange";
//   ctx.stroke();
// }

function drawFilledHex(ctx:CanvasRenderingContext2D, position:Point, size:number) {

  const x = position.x;
  const y = position.y;
  const l = size;

  ctx.beginPath();

  ctx.moveTo(x - l * cosPiSur6, y - l * sinPiSur6);
  ctx.lineTo(x - l * cosPiSur6, y + l * sinPiSur6);
  ctx.lineTo(x, y + l);
  ctx.lineTo(x + l * cosPiSur6, y + l * sinPiSur6);
  ctx.lineTo(x + l * cosPiSur6, y - l * sinPiSur6);
  ctx.lineTo(x, y - l);
  ctx.lineTo(x - l * cosPiSur6, y - l * sinPiSur6);

  ctx.closePath();

  ctx.fillStyle = "orange";
  ctx.fill();
}

// function drawSimpleTuile(ctx, x, y, l) {
//   ctx.beginPath();
//   ctx.moveTo(x - l * cosPiSur6, y - l * sinPiSur6);
//   ctx.lineTo(x - l * cosPiSur6, y + l * sinPiSur6);
//   ctx.lineTo(x, y + l);
//   ctx.lineTo(x + l * cosPiSur6, y + l * sinPiSur6);
//   ctx.lineTo(x + l * cosPiSur6, y - l * sinPiSur6);
//   ctx.lineTo(x, y - l);
//   ctx.lineTo(x - l * cosPiSur6, y - l * sinPiSur6);
//   ctx.closePath();

//   ctx.fillStyle = "orange";
//   ctx.fill();

//   let innerLength = l / 3;

//   ctx.beginPath();
//   ctx.moveTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
//   ctx.lineTo(x - innerLength * cosPiSur6, y + innerLength * sinPiSur6);
//   ctx.lineTo(x, y + innerLength);
//   ctx.lineTo(x + innerLength * cosPiSur6, y + innerLength * sinPiSur6);
//   ctx.lineTo(x + innerLength * cosPiSur6, y - innerLength * sinPiSur6);
//   ctx.lineTo(x, y - innerLength);
//   ctx.lineTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);

//   ctx.closePath();

//   ctx.fillStyle = "red";
//   ctx.fill();
// }

// function drawTuile(ctx, x, y, l, tuile, patterns) {
//   // console.log("drawTuile", tuile, " at ", x , "x", y);

//   let innerLength = l / 3;

//   // Gauche
//   ctx.beginPath();
//   ctx.moveTo(x - l * cosPiSur6, y - l * sinPiSur6);
//   ctx.lineTo(x - l * cosPiSur6, y + l * sinPiSur6);
//   ctx.lineTo(x - innerLength * cosPiSur6, y + innerLength * sinPiSur6);
//   ctx.lineTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
//   ctx.closePath();
//   ctx.fillStyle = "orange";

//   if (tuile) {
//     ctx.fillStyle = patterns[tuile.cotes[0]];
//     // ctx.fillStyle = pattern;
//   }

//   ctx.fill();

//   // Bas gauche
//   ctx.beginPath();
//   ctx.moveTo(x - l * cosPiSur6, y + l * sinPiSur6);
//   ctx.lineTo(x, y + l);
//   ctx.lineTo(x, y + innerLength);
//   ctx.lineTo(x - innerLength * cosPiSur6, y + innerLength * sinPiSur6);
//   ctx.closePath();
//   ctx.fillStyle = "red";
//   if (tuile) {
//     ctx.fillStyle = patterns[tuile.cotes[1]];
//     // ctx.fillStyle = pattern;
//   }
//   ctx.fill();

//   // Bas droit
//   ctx.beginPath();
//   ctx.moveTo(x, y + l);
//   ctx.lineTo(x + l * cosPiSur6, y + l * sinPiSur6);
//   ctx.lineTo(x + innerLength * cosPiSur6, y + innerLength * sinPiSur6);
//   ctx.lineTo(x, y + innerLength);
//   ctx.closePath();
//   ctx.fillStyle = "blue";
//   if (tuile) {
//     ctx.fillStyle = patterns[tuile.cotes[2]];
//     // ctx.fillStyle = pattern;
//   }
//   ctx.fill();

//   // Droite
//   ctx.beginPath();
//   ctx.moveTo(x + l * cosPiSur6, y + l * sinPiSur6);
//   ctx.lineTo(x + l * cosPiSur6, y - l * sinPiSur6);
//   ctx.lineTo(x + innerLength * cosPiSur6, y - innerLength * sinPiSur6);
//   ctx.lineTo(x + innerLength * cosPiSur6, y + innerLength * sinPiSur6);
//   ctx.closePath();
//   ctx.fillStyle = "green";
//   if (tuile) {
//     ctx.fillStyle = patterns[tuile.cotes[3]];
//     // ctx.fillStyle = pattern;
//   }
//   ctx.fill();

//   // Haut droit
//   ctx.beginPath();
//   ctx.moveTo(x + l * cosPiSur6, y - l * sinPiSur6);
//   ctx.lineTo(x, y - l);
//   ctx.lineTo(x, y - innerLength);
//   ctx.lineTo(x + innerLength * cosPiSur6, y - innerLength * sinPiSur6);
//   ctx.closePath();
//   ctx.fillStyle = "pink";
//   if (tuile) {
//     ctx.fillStyle = patterns[tuile.cotes[4]];
//     // ctx.fillStyle = pattern;
//   }
//   ctx.fill();

//   // Haut gauche
//   ctx.beginPath();
//   ctx.lineTo(x, y - l);
//   ctx.lineTo(x - l * cosPiSur6, y - l * sinPiSur6);
//   ctx.lineTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
//   ctx.lineTo(x, y - innerLength);
//   ctx.closePath();
//   ctx.fillStyle = "yellow";
//   if (tuile) {
//     ctx.fillStyle = patterns[tuile.cotes[5]];
//     // ctx.fillStyle = pattern;
//   }
//   ctx.fill();

//   // Hexagone central
//   ctx.beginPath();
//   ctx.moveTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
//   ctx.lineTo(x - innerLength * cosPiSur6, y + innerLength * sinPiSur6);
//   ctx.lineTo(x, y + innerLength);
//   ctx.lineTo(x + innerLength * cosPiSur6, y + innerLength * sinPiSur6);
//   ctx.lineTo(x + innerLength * cosPiSur6, y - innerLength * sinPiSur6);
//   ctx.lineTo(x, y - innerLength);
//   ctx.lineTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
//   ctx.closePath();

//   ctx.fillStyle = "brown";
//   if (tuile) {
//     ctx.fillStyle = patterns[tuile.centre];
//     // ctx.fillStyle = pattern;
//   }
//   ctx.fill();
// }


// export function drawPlayField(ctx:CanvasRenderingContext2D, playField) {
//   for (let i = 0; i < playField.length; i++) {
//     let tuileInPlay = playField[i];
//     drawTile(
//       ctx,
//       tuileInPlay.mousePos.x,
//       tuileInPlay.mousePos.y,
//       50,
//       tuileInPlay.tuile
//     );
//   }
// }

// https://www.redblobgames.com/grids/hexagons/#pixel-to-hex
export function pixel_to_pointy_hex(point:Point, size:number) {
  var q = ((Math.sqrt(3) / 3) * point.x - (1 / 3) * point.y) / size;
  var r = ((2 / 3) * point.y) / size;

  return { q: Math.round(q), r: Math.round(r) };
  // {
  // q: Math.round(q),
  // r: Math.round(r)
  // };
}

// https://www.redblobgames.com/grids/hexagons/#neighbors-axial
// https://www.redblobgames.com/grids/hexagons/#hex-to-pixel-axial

function pointy_hex_to_pixel(tuile:TileWithCoordinates, size:number) {
  var x =
    size *
    (Math.sqrt(3) * tuile.coordinates.q +
      (Math.sqrt(3) / 2) * tuile.coordinates.r);
  var y = size * ((3 / 2) * tuile.coordinates.r);
  return { x, y };
}

export function drawPlayFieldWithCoordinates(ctx:CanvasRenderingContext2D, playField:Playfield, tileSize:number, patterns:string[]) {
  for (let i = 0; i < playField.tiles.length; i++) {
    let tuileInPlay = playField.tiles[i];
    var pos = pointy_hex_to_pixel(tuileInPlay, tileSize);
    drawTile(
      ctx,
      { x: ctx.canvas.width / 2 + pos.x, y:ctx.canvas.height / 2 + pos.y},
      tileSize,
      tuileInPlay,
      patterns
    );
  }
}


export function computeSize(playField:Playfield, width:number, height:number) {
  
  // Size for height
	let minMax = { min: 0, max: 0};
	
	minMax = playField.tiles.reduce((accumulator, tuile) => {return { min: Math.min(accumulator.min, tuile.coordinates.r), max: Math.max(accumulator.max, tuile.coordinates.r)};}, minMax);
		
	let nb = minMax.max + (-minMax.min) + 1 + 2;

	// let coef = 2 + (nb-1) * (1 + Math.sin(Math.PI/6));
  let coef = 2 + (nb-1) * 1.5;
  
  let sizeForHeight = Math.floor(height/coef);

  // Size for width
  let sizeForWidth = width / 6 / cosPiSur6;
  sizeForWidth = Math.floor(sizeForWidth);

  if(playField.tiles.length > 0)
  {
    let mM = { min: Number.MAX_VALUE, max: Number.MIN_VALUE};
    for(let i = 0; i<playField.tiles.length; i++ )
    {
      let pos = pointy_hex_to_pixel(playField.tiles[i], 10); // size does not matter
      mM.min = Math.min(pos.x, mM.min);
      mM.max = Math.max(pos.x, mM.max);
    }
    let nb = (mM.max - mM.min + 2 * 10 * cosPiSur6)/(2 * 10 * cosPiSur6) +2;
    sizeForWidth = width / (nb * 2) / cosPiSur6;
    sizeForWidth = Math.floor(sizeForWidth);
  }
	return Math.min(sizeForHeight, sizeForWidth);
}