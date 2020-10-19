import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';


import deck from '../src/data/tuile';
import { defaultPatterns } from '../src/data/tuile';

import { shuffleArray } from './data/deck';
import { pixel_to_pointy_hex } from '../src/helpers/renderer';



import Canvas from './components/Canvas';

import { Tile, Point, Playfield, TileWithCoordinates } from './types/tile';


let neighborhood = [
	{q: +1, r: 0},	{q: +1, r: -1},	{q: 0, r: -1}, {q: -1, r: 0}, {q: -1, r: +1}, {q: 0, r: +1},
];

const App: React.FC = () => {

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);


  const [tileSize, setTileSize] = useState(25);

  const [nextTile, setNextTile] = useState<Tile | null>(null);
  const [remainingTiles, setRemainingTiles] = useState<number[]>([]);

  const [playfield, setPlayfield] = useState<Playfield>({tiles: []});

  useEffect(() => {
      console.log('Window initial size', window.innerWidth, window.innerHeight);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }, []);


  useEffect(() => {
    console.log(deck);

    let flattedDeck = deck.tiles.map(t => {
      let a = [];
      for(var i = 0; i<t.quantity; i++) {
        a.push(t.tile.id);
      }
      return a;
    }).flat();
  
  
    let shuffledDeck = shuffleArray(flattedDeck);
  
    console.log("shuffledDeck", shuffledDeck);
  
    let tile = deck.tiles.find(x => x.tile.id === shuffledDeck[0]);
    let nextTile = tile ? tile.tile : null;
    
    setNextTile(nextTile);
    setRemainingTiles(shuffledDeck);

  }, []);


  useEffect(() => {
    var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
    if (isMobile) {
      console.log('isMobile 1', isMobile);
    } else {
      console.log('isMobile 0', isMobile);
    }
}, []);


  const handleClick = (position:Point) => {    
    console.log("handleClick in app", position);

    
		var coordinates = {q: 0, r: 0};
		if(playfield.tiles.length !== 0){
			coordinates = pixel_to_pointy_hex({x: position.x - width/2, y: position.y - height/2}, tileSize);
		}
		
		// Test that space is free
		let inoccupied = playfield.tiles.find(t => t.coordinates.q === coordinates.q && t.coordinates.r === coordinates.r) === undefined;		
		if(!inoccupied)
		{
			console.warn("Already something here : ", coordinates);
			return;
		}
		
		// Test that space is adjacent
		if(playfield.tiles.length !== 0){
			let counter = 0;
			let neighbor = false;
			do {
				let checkCoordinates = {q: coordinates.q + neighborhood[counter].q, r: coordinates.r + neighborhood[counter].r };
				neighbor = playfield.tiles.find(t => t.coordinates.q === checkCoordinates.q && t.coordinates.r === checkCoordinates.r) === undefined ;	
				counter++;
			} while (!neighbor && (counter < neighborhood.length));
			if(!neighbor)
			{
				console.warn("No neighbor : ", coordinates);
				return;
			}
		}


		let newPlayfield = {...playfield, tiles: [...playfield.tiles, {...nextTile as Tile, coordinates}]};
    
    let newRemainingTiles = [...remainingTiles];
		if(newRemainingTiles.length > 0)
		{
			newRemainingTiles.shift();
      const newNextTile = deck.tiles.find(x => x.tile.id === newRemainingTiles[0])?.tile;
      
      setNextTile(newNextTile ? newNextTile : null);
    }
    else {
      setNextTile(null);
    }
		
		console.log('newRemainingTiles', newRemainingTiles);
		console.log('newPlayfield', newPlayfield);
		
		
		// size = computeSize(playFieldWithCoordinates, height);


    
    setPlayfield(newPlayfield);
    setRemainingTiles(newRemainingTiles);
}

  return (
    <React.Fragment>
      {width && height && (
        <React.Fragment>

          <Canvas id={"background"} width={width} height={height} zIndex={0} nextTile={null} patterns={defaultPatterns} onClick={null} playfield={playfield} tileSize={tileSize} />
          <Canvas id={"foreground"} width={width} height={height} zIndex={1} nextTile={nextTile} patterns={defaultPatterns} onClick={handleClick} playfield={null} tileSize={tileSize} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
