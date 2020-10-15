
const cosPiSur6 = Math.cos(Math.PI/6);
const sinPiSur6 = 1/2; // (1/2)



drawCircle = (ctx, x,y,l) => {

	ctx.beginPath();
	ctx.arc(x, y, l, 0, 2 * Math.PI);
	ctx.stroke();

}

drawHex = (ctx, x,y,l) => {

	ctx.moveTo(x-l*cosPiSur6,y-l*sinPiSur6);
	ctx.lineTo(x-l*cosPiSur6,y+l*sinPiSur6);
	ctx.lineTo(x,y+l);
	ctx.lineTo(x+l*cosPiSur6,y+l*sinPiSur6);
	ctx.lineTo(x+l*cosPiSur6,y-l*sinPiSur6);
	ctx.lineTo(x,y-l);
	ctx.lineTo(x-l*cosPiSur6,y-l*sinPiSur6);
	
	ctx.strokeStyle = "orange";
	ctx.stroke();
}

drawFilledHex = (ctx, x,y,l) => {							
			
	ctx.beginPath();
	
	ctx.moveTo(x-l*cosPiSur6,y-l*sinPiSur6);
	ctx.lineTo(x-l*cosPiSur6,y+l*sinPiSur6);
	ctx.lineTo(x,y+l);
	ctx.lineTo(x+l*cosPiSur6,y+l*sinPiSur6);
	ctx.lineTo(x+l*cosPiSur6,y-l*sinPiSur6);
	ctx.lineTo(x,y-l);
	ctx.lineTo(x-l*cosPiSur6,y-l*sinPiSur6);
	
    ctx.closePath();
	
	ctx.fillStyle = "orange";
	ctx.fill();
}



drawSimpleTuile = (ctx, x,y,l) => {							
			
	ctx.beginPath();	
	ctx.moveTo(x-l*cosPiSur6,y-l*sinPiSur6);
	ctx.lineTo(x-l*cosPiSur6,y+l*sinPiSur6);
	ctx.lineTo(x,y+l);
	ctx.lineTo(x+l*cosPiSur6,y+l*sinPiSur6);
	ctx.lineTo(x+l*cosPiSur6,y-l*sinPiSur6);
	ctx.lineTo(x,y-l);
	ctx.lineTo(x-l*cosPiSur6,y-l*sinPiSur6);
    ctx.closePath();
	
	ctx.fillStyle = "orange";
	ctx.fill();
	
	let innerLength = l/3;
console.log('innerLength : ' + innerLength);
	
	ctx.beginPath();
	ctx.moveTo(x-innerLength*cosPiSur6,y-innerLength*sinPiSur6);
	ctx.lineTo(x-innerLength*cosPiSur6,y+innerLength*sinPiSur6);
	ctx.lineTo(x,y+innerLength);
	ctx.lineTo(x+innerLength*cosPiSur6,y+innerLength*sinPiSur6);
	ctx.lineTo(x+innerLength*cosPiSur6,y-innerLength*sinPiSur6);
	ctx.lineTo(x,y-innerLength);
	ctx.lineTo(x-innerLength*cosPiSur6,y-innerLength*sinPiSur6);
	
    ctx.closePath();
	
	ctx.fillStyle = "red";
	ctx.fill();
}




drawTuile = (ctx, x,y,l, tuile, patterns) => {							
			
	// console.log("drawTuile", tuile, " at ", x , "x", y);
	
	
	let innerLength = l/3;
	
	// Gauche
	ctx.beginPath();	
	ctx.moveTo(x-l*cosPiSur6,y-l*sinPiSur6);
	ctx.lineTo(x-l*cosPiSur6,y+l*sinPiSur6);
	ctx.lineTo(x-innerLength*cosPiSur6,y+innerLength*sinPiSur6);
	ctx.lineTo(x-innerLength*cosPiSur6,y-innerLength*sinPiSur6);
    ctx.closePath();	
	ctx.fillStyle = "orange";
	
	if(tuile){
		ctx.fillStyle = patterns[tuile.cotes[0]];		
		// ctx.fillStyle = pattern;
	}
	
	ctx.fill();
	
	
	// Bas gauche
	ctx.beginPath();	
	ctx.moveTo(x-l*cosPiSur6,y+l*sinPiSur6);
	ctx.lineTo(x,y+l);
	ctx.lineTo(x,y+innerLength);	
	ctx.lineTo(x-innerLength*cosPiSur6,y+innerLength*sinPiSur6);
    ctx.closePath();	
	ctx.fillStyle = "red";
	if(tuile){
		ctx.fillStyle = patterns[tuile.cotes[1]];		
		// ctx.fillStyle = pattern;
	}
	ctx.fill();
	
	// Bas droit
	ctx.beginPath();	
	ctx.moveTo(x,y+l);
	ctx.lineTo(x+l*cosPiSur6,y+l*sinPiSur6);
	ctx.lineTo(x+innerLength*cosPiSur6,y+innerLength*sinPiSur6);
	ctx.lineTo(x,y+innerLength);
    ctx.closePath();	
	ctx.fillStyle = "blue";
	if(tuile){
		ctx.fillStyle = patterns[tuile.cotes[2]];		
		// ctx.fillStyle = pattern;
	}
	ctx.fill();
	
	
	
	// Droite
	ctx.beginPath();	
	ctx.moveTo(x+l*cosPiSur6,y+l*sinPiSur6);
	ctx.lineTo(x+l*cosPiSur6,y-l*sinPiSur6);
	ctx.lineTo(x+innerLength*cosPiSur6,y-innerLength*sinPiSur6);
	ctx.lineTo(x+innerLength*cosPiSur6,y+innerLength*sinPiSur6);
    ctx.closePath();	
	ctx.fillStyle = "green";
	if(tuile){
		ctx.fillStyle = patterns[tuile.cotes[3]];		
		// ctx.fillStyle = pattern;
	}
	ctx.fill();
	
	// Haut droit
	ctx.beginPath();	
	ctx.moveTo(x+l*cosPiSur6,y-l*sinPiSur6);
	ctx.lineTo(x,y-l);
	ctx.lineTo(x,y-innerLength);
	ctx.lineTo(x+innerLength*cosPiSur6,y-innerLength*sinPiSur6);
    ctx.closePath();
	ctx.fillStyle = "pink";
	if(tuile){
		ctx.fillStyle = patterns[tuile.cotes[4]];		
		// ctx.fillStyle = pattern;
	}
	ctx.fill();
	
	// Haut gauche
	ctx.beginPath();	
	ctx.lineTo(x,y-l);
	ctx.lineTo(x-l*cosPiSur6,y-l*sinPiSur6);
	ctx.lineTo(x-innerLength*cosPiSur6,y-innerLength*sinPiSur6);
	ctx.lineTo(x,y-innerLength);	
    ctx.closePath();
	ctx.fillStyle = "yellow";
	if(tuile){
		ctx.fillStyle = patterns[tuile.cotes[5]];		
		// ctx.fillStyle = pattern;
	}
	ctx.fill();
	
	
	// Hexagone central
	ctx.beginPath();
	ctx.moveTo(x-innerLength*cosPiSur6,y-innerLength*sinPiSur6);
	ctx.lineTo(x-innerLength*cosPiSur6,y+innerLength*sinPiSur6);
	ctx.lineTo(x,y+innerLength);
	ctx.lineTo(x+innerLength*cosPiSur6,y+innerLength*sinPiSur6);
	ctx.lineTo(x+innerLength*cosPiSur6,y-innerLength*sinPiSur6);
	ctx.lineTo(x,y-innerLength);
	ctx.lineTo(x-innerLength*cosPiSur6,y-innerLength*sinPiSur6);	
    ctx.closePath();
	
	ctx.fillStyle = "brown";
	if(tuile){
		ctx.fillStyle = patterns[tuile.centre];		
		// ctx.fillStyle = pattern;
	}
	ctx.fill();
}



drawPlayField = (ctx, playField) => {							

	for(let i = 0; i < playField.length; i++){
		let tuileInPlay = playField[i];
		drawTuile (ctx, tuileInPlay.mousePos.x, tuileInPlay.mousePos.y,50, tuileInPlay.tuile)	;	
	}
			
}

// https://www.redblobgames.com/grids/hexagons/#pixel-to-hex
pixel_to_pointy_hex = (point, size) => {	
    var q = (Math.sqrt(3)/3 * point.x  -  1./3 * point.y) / size;
    var r = (                             2./3 * point.y) / size;
	
	return {q: Math.round(q), r: Math.round(r)};
	// { 
		// q: Math.round(q),
		// r: Math.round(r)
	// };	
}



// https://www.redblobgames.com/grids/hexagons/#neighbors-axial
// https://www.redblobgames.com/grids/hexagons/#hex-to-pixel-axial

pointy_hex_to_pixel = (tuile, size) => {
	
    var x = size * (Math.sqrt(3) * tuile.coordinates.q  +  Math.sqrt(3)/2 * tuile.coordinates.r);
    var y = size * (                         3./2 * tuile.coordinates.r);
    return {x, y};
}


drawPlayFieldWithCoordinates = (ctx, playField, size, patterns) => {							


	for(let i = 0; i < playField.length; i++){
		let tuileInPlay = playField[i];		
		var pos = pointy_hex_to_pixel(tuileInPlay, size);		
		drawTuile (ctx, ctx.canvas.width/2 + pos.x, ctx.canvas.height/2 + pos.y, size, tuileInPlay, patterns)	;	
	}
			
}
