
import { Tile, Point, Dimension, TileWithCoordinates, Coordinates, Playfield } from '../types/tile';

const cosPiSur6 = Math.cos(Math.PI / 6);
const sinPiSur6 = 1 / 2; // (1/2)


export const neighborhood = [
	{q: +1, r: 0},	{q: +1, r: -1},	{q: 0, r: -1}, {q: -1, r: 0}, {q: -1, r: +1}, {q: 0, r: +1},
];

export function drawTile(ctx:CanvasRenderingContext2D , position:Point, size:number, tile:Tile, patterns:(string|CanvasPattern)[]|null) {
  // console.log("drawTuile", tuile, " at ", x , "x", y);

  if(!tile)
  {
    drawFilledHex(ctx, position, size, "red");
    return;
  }

  if(!tile.edges)
  {
    drawFilledHex(ctx, position, size, patterns ? patterns[tile.center] : "red");
    return;
  }

  const innerLength = size / 3;

  const x = position.x;
  const y = position.y;
  const l = size;
  


  // Gauche
  {
    ctx.beginPath();
    ctx.moveTo(x - l * cosPiSur6, y - l * sinPiSur6);
    ctx.lineTo(x - l * cosPiSur6, y + l * sinPiSur6);
    ctx.lineTo(x - innerLength * cosPiSur6, y + innerLength * sinPiSur6);
    ctx.lineTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
    ctx.closePath();
    ctx.fillStyle = patterns ? patterns[tile.edges[0]] : "red";  
    ctx.fill();
  }

  // Bas gauche
  ctx.beginPath();
  ctx.moveTo(x - l * cosPiSur6, y + l * sinPiSur6);
  ctx.lineTo(x, y + l);
  ctx.lineTo(x, y + innerLength);
  ctx.lineTo(x - innerLength * cosPiSur6, y + innerLength * sinPiSur6);
  ctx.closePath();
  ctx.fillStyle = patterns ? patterns[tile.edges[1]] : "red";
  ctx.fill();

  // Bas droit
  ctx.beginPath();
  ctx.moveTo(x, y + l);
  ctx.lineTo(x + l * cosPiSur6, y + l * sinPiSur6);
  ctx.lineTo(x + innerLength * cosPiSur6, y + innerLength * sinPiSur6);
  ctx.lineTo(x, y + innerLength);
  ctx.closePath();
  ctx.fillStyle = patterns ? patterns[tile.edges[2]] : "red";
  ctx.fill();

  // Droite
  ctx.beginPath();
  ctx.moveTo(x + l * cosPiSur6, y + l * sinPiSur6);
  ctx.lineTo(x + l * cosPiSur6, y - l * sinPiSur6);
  ctx.lineTo(x + innerLength * cosPiSur6, y - innerLength * sinPiSur6);
  ctx.lineTo(x + innerLength * cosPiSur6, y + innerLength * sinPiSur6);
  ctx.closePath();
  ctx.fillStyle = patterns ? patterns[tile.edges[3]] : "red";
  ctx.fill();

  // Haut droit
  ctx.beginPath();
  ctx.moveTo(x + l * cosPiSur6, y - l * sinPiSur6);
  ctx.lineTo(x, y - l);
  ctx.lineTo(x, y - innerLength);
  ctx.lineTo(x + innerLength * cosPiSur6, y - innerLength * sinPiSur6);
  ctx.closePath();
  ctx.fillStyle = patterns ? patterns[tile.edges[4]] : "red";
  ctx.fill();

  // Haut gauche
  ctx.beginPath();
  ctx.lineTo(x, y - l);
  ctx.lineTo(x - l * cosPiSur6, y - l * sinPiSur6);
  ctx.lineTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
  ctx.lineTo(x, y - innerLength);
  ctx.closePath();
  ctx.fillStyle = patterns ? patterns[tile.edges[5]] : "red";
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

  ctx.fillStyle = patterns ? patterns[tile.center] : "red";

  ctx.fill();


  // Dessin des "plages"
  if(tile.edges[0] !== tile.edges[1])
  {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x - l * cosPiSur6, y + l * sinPiSur6);
    ctx.lineTo(x - innerLength * cosPiSur6, y + innerLength * sinPiSur6);
    ctx.closePath();
    ctx.strokeStyle = "#c2b280";    
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }
  if(tile.edges[1] !== tile.edges[2])
  {
    ctx.save();
    ctx.beginPath();
    ctx.lineTo(x, y + l);
    ctx.lineTo(x, y + innerLength);
    ctx.closePath();
    ctx.strokeStyle = "#c2b280";    
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }  
  if(tile.edges[2] !== tile.edges[3])
  {
    ctx.save();
    ctx.beginPath();
    ctx.lineTo(x + l * cosPiSur6, y + l * sinPiSur6);
    ctx.lineTo(x + innerLength * cosPiSur6, y + innerLength * sinPiSur6);
    ctx.closePath();
    ctx.strokeStyle = "#c2b280";    
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }
  if(tile.edges[3] !== tile.edges[4])
  {
    ctx.save();
    ctx.beginPath();
    ctx.lineTo(x + l * cosPiSur6, y - l * sinPiSur6);
    ctx.lineTo(x + innerLength * cosPiSur6, y - innerLength * sinPiSur6);
    ctx.closePath();
    ctx.strokeStyle = "#c2b280";    
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }
  if(tile.edges[4] !== tile.edges[5])
  {
    ctx.save();
    ctx.beginPath();
    ctx.lineTo(x, y - l);
    ctx.lineTo(x, y - innerLength);
    ctx.closePath();
    ctx.strokeStyle = "#c2b280";    
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }
  if(tile.edges[5] !== tile.edges[0])
  {
    ctx.save();
    ctx.beginPath();
    ctx.lineTo(x - l * cosPiSur6, y - l * sinPiSur6);
    ctx.lineTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
    ctx.closePath();
    ctx.strokeStyle = "#c2b280";    
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }
  
  // Dessin des "plages centrales"
  if(tile.center !== tile.edges[0])
  {
    ctx.save();
    ctx.beginPath();
    ctx.lineTo(x - innerLength * cosPiSur6, y + innerLength * sinPiSur6);
    ctx.lineTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
    ctx.closePath();
    ctx.strokeStyle = "#c2b280";    
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }
  if(tile.center !== tile.edges[1])
  {
    ctx.save();
    ctx.beginPath();
    ctx.lineTo(x, y + innerLength);
    ctx.lineTo(x - innerLength * cosPiSur6, y + innerLength * sinPiSur6);
    ctx.closePath();
    ctx.strokeStyle = "#c2b280";    
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }
  if(tile.center !== tile.edges[2])
  {
    ctx.save();
    ctx.beginPath();
    ctx.lineTo(x + innerLength * cosPiSur6, y + innerLength * sinPiSur6);
    ctx.lineTo(x, y + innerLength);
    ctx.closePath();
    ctx.strokeStyle = "#c2b280";    
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }
  if(tile.center !== tile.edges[3])
  {
    ctx.save();
    ctx.beginPath();
    ctx.lineTo(x + innerLength * cosPiSur6, y - innerLength * sinPiSur6);
    ctx.lineTo(x + innerLength * cosPiSur6, y + innerLength * sinPiSur6);
    ctx.closePath();
    ctx.strokeStyle = "#c2b280";    
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }
  if(tile.center !== tile.edges[4])
  {
    ctx.save();
    ctx.beginPath();
    ctx.lineTo(x, y - innerLength);
    ctx.lineTo(x + innerLength * cosPiSur6, y - innerLength * sinPiSur6);
    ctx.closePath();
    ctx.strokeStyle = "#c2b280";    
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }
  if(tile.center !== tile.edges[5])
  {
    ctx.save();
    ctx.beginPath();
    ctx.lineTo(x - innerLength * cosPiSur6, y - innerLength * sinPiSur6);
    ctx.lineTo(x, y - innerLength);
    ctx.closePath();
    ctx.strokeStyle = "#c2b280";    
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  }
}


export function drawNextTile(ctx:CanvasRenderingContext2D , position:Point, size:number, tile:Tile, patterns:(string|CanvasPattern)[]|null) {
  drawShadowedHex(ctx, position, size);
  drawTile(ctx , position, size, tile, patterns);
}

// function drawCircle(ctx, x, y, l) {
//   ctx.beginPath();
//   ctx.arc(x, y, l, 0, 2 * Math.PI);
//   ctx.stroke();
// }

function drawHex(ctx:CanvasRenderingContext2D, position:Point, size:number) {
  
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

  ctx.strokeStyle = "black";
  ctx.stroke();
}

function drawShadowedHex(ctx:CanvasRenderingContext2D, position:Point, size:number) {
  
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

  ctx.shadowBlur = 20;
  ctx.shadowColor = "black";
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.fillStyle = "";
  ctx.fill();
  ctx.shadowBlur = 0;
  
}

function drawFilledHex(ctx:CanvasRenderingContext2D, position:Point, size:number, fillStyle:string|CanvasPattern) {

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

  ctx.fillStyle = fillStyle;
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
function coordinates_to_pixel(coordinates:Coordinates, size:number) {
  var x =
    size *
    (Math.sqrt(3) * coordinates.q +
      (Math.sqrt(3) / 2) * coordinates.r);
  var y = size * ((3 / 2) * coordinates.r);
  return { x, y };
}

export function computeOffset(canvasSize:Dimension, coordinates:Coordinates[], tileSize:number) {

  const offset:Point = { x: canvasSize.width / 2, y:canvasSize.height / 2 };

  if(coordinates.length > 0)
  {
    let mMx = { min: Number.MAX_VALUE, max: Number.MIN_VALUE};
    let mMy = { min: Number.MAX_VALUE, max: Number.MIN_VALUE};
    for(let i = 0; i<coordinates.length; i++ )
    {
      let pos = coordinates_to_pixel(coordinates[i], tileSize);
      mMx.min = Math.min(pos.x, mMx.min);
      mMx.max = Math.max(pos.x, mMx.max);
      mMy.min = Math.min(pos.y, mMy.min);
      mMy.max = Math.max(pos.y, mMy.max);
    }

    offset.x = offset.x - ((mMx.max + mMx.min)/2);
    offset.y = offset.y - ((mMy.max + mMy.min)/2);
  } 
  return offset;
}

export function drawPlayFieldWithCoordinates(ctx:CanvasRenderingContext2D, playField:Playfield, tileSize:number, patterns:(string|CanvasPattern)[]) {

  const offset:Point = computeOffset({width: ctx.canvas.width, height: ctx.canvas.height}, playField.tiles.map(tile => tile.coordinates), tileSize);


  for (let i = 0; i < playField.tiles.length; i++) {
    let tuileInPlay = playField.tiles[i];
    var pos = pointy_hex_to_pixel(tuileInPlay, tileSize);
    drawTile(
      ctx,
      { x: offset.x + pos.x, y:offset.y + pos.y},
      tileSize,
      tuileInPlay,
      patterns
    );
  }
}




export function drawPlayFieldNeighborhood(ctx:CanvasRenderingContext2D, playFieldNeighborhood:Coordinates[], tileSize:number, nextTile:Tile|TileWithCoordinates|null, patterns:(string|CanvasPattern)[]|null) {
  
  const offset:Point = computeOffset({width: ctx.canvas.width, height: ctx.canvas.height}, playFieldNeighborhood, tileSize);
  
  for (let i = 0; i < playFieldNeighborhood.length; i++) {
    let coordinates = playFieldNeighborhood[i];
    var pos = coordinates_to_pixel(coordinates, tileSize);
    drawHex(
      ctx,
      { x: offset.x + pos.x, y:offset.y + pos.y},
      tileSize
    );
    if(nextTile && !nextTile.hasOwnProperty("coordinates"))
    {
      drawNextTile(
        ctx,
        { x: offset.x + pos.x, y:offset.y + pos.y},
        tileSize*0.75,
        nextTile,
        patterns
      );

    }    
    if(nextTile && nextTile.hasOwnProperty("coordinates"))
    {
      let tileCoordinates = (nextTile as TileWithCoordinates).coordinates;
  
      if(tileCoordinates.q === coordinates.q && tileCoordinates.r === coordinates.r)
      {
        drawNextTile(
          ctx,
          { x: offset.x + pos.x, y:offset.y + pos.y},
          tileSize,
          nextTile,
          patterns
        );
  
      }

    }
  }
}


export function computeSize(playField:Playfield, canvasSize:{width:number, height:number}, remainingTile:boolean = true) {
  
  // Size for height
  let minMax = { min: 0, max: 0};
  
  let remaingingTileAdjustment = remainingTile ? 2 : 0;
	
	minMax = playField.tiles.reduce((accumulator, tuile) => {return { min: Math.min(accumulator.min, tuile.coordinates.r), max: Math.max(accumulator.max, tuile.coordinates.r)};}, minMax);
		
	let nb = minMax.max + (-minMax.min) + 1 + remaingingTileAdjustment;

	// let coef = 2 + (nb-1) * (1 + Math.sin(Math.PI/6));
  let coef = 2 + (nb-1) * 1.5;
  
  let sizeForHeight = Math.floor(canvasSize.height/coef);

  // Size for width
  let sizeForWidth = canvasSize.width / 6 / cosPiSur6;
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
    let nb = (mM.max - mM.min + 2 * 10 * cosPiSur6)/(2 * 10 * cosPiSur6) + remaingingTileAdjustment;
    sizeForWidth = canvasSize.width / (nb * 2) / cosPiSur6;
    sizeForWidth = Math.floor(sizeForWidth);
  }
	return Math.min(sizeForHeight, sizeForWidth);
}