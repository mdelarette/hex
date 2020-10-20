import React from 'react';
import './App.css';

import {useState, useEffect} from 'react';


import deck from '../src/data/tuile';
import { defaultPatterns } from '../src/data/tuile';

import { shuffleArray, rotateArray } from './helpers/deck';

import { computeSize, pixel_to_pointy_hex } from '../src/helpers/renderer';



import Canvas from './components/Canvas';

import { Tile, Point, Playfield } from './types/tile';


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

      let initialSize = computeSize({tiles:[]}, window.innerWidth, window.innerHeight);
      
      console.log('initial tile size', initialSize);
      setTileSize(initialSize);

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
    console.log('isMobile ?', navigator.userAgent);
    console.log('isMobile ?', navigator.userAgent.toLowerCase());
    console.log('isMobile ?', navigator.userAgent.toLowerCase().match(/mobile/i));
    if (isMobile) {
      console.log('isMobile', true);
    } else {
      console.log('isMobile', false);
    }
    
    console.log('maxTouchPoints ?', navigator.maxTouchPoints);
}, []);


  const handleClick = (position:Point) => {    
    console.log("handleClick in app", position);

    if(!nextTile)
    {
      console.log("No tile to add");
      return;
    }
    
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
        
				console.warn("checkCoordinates : ", counter, checkCoordinates);
        neighbor = playfield.tiles.find(t => t.coordinates.q === checkCoordinates.q && t.coordinates.r === checkCoordinates.r) !== undefined ;	
        
				console.warn("neighbor : ", counter, neighbor);
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
      console.log('newNextTile', newNextTile);
    }
    else {
      setNextTile(null);
    }
		
		console.log('newRemainingTiles', newRemainingTiles);
		console.log('newPlayfield', newPlayfield);
		
		let newSize = computeSize(newPlayfield, width, height);
    
    setTileSize(newSize);
    setPlayfield(newPlayfield);
    setRemainingTiles(newRemainingTiles);
}


const handleWheel = (delta:Number) => {    
  console.log("handleWheel in app", delta);

  if(!nextTile)
  {
    console.log("No tile to rotate");
    return;
  }

  let newNextTile = {
    ...nextTile,  
    edges: rotateArray(nextTile.edges, delta > 0 ? -1 : 1)
  };

  setNextTile(newNextTile);
}


  return (
    <React.Fragment>
      {width && height && (
        <React.Fragment>

          <Canvas id={"background"} width={width} height={height} zIndex={0} nextTile={null} patterns={defaultPatterns} onClick={null} onWheel={null} playfield={playfield} tileSize={tileSize} />
          <Canvas id={"foreground"} width={width} height={height} zIndex={1} nextTile={nextTile} patterns={defaultPatterns} onClick={handleClick}  onWheel={handleWheel} playfield={null} tileSize={tileSize} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
