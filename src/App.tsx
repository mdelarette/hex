import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';


import deck from '../src/data/tuile';
import {shuffleArray} from './data/deck';

import Canvas from './components/Canvas';

import { Tile } from './types/tile';

const App: React.FC = () => {

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [nextTile, setNextTile] = useState<Tile | null>(null);

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
  }, []);

  return (
    <React.Fragment>
      {width && height && (
        <React.Fragment>
          <Canvas id={"background"} width={width} height={height} zIndex={0} nextTile={null}/>
          <Canvas id={"foreground"} width={width} height={height} zIndex={1} nextTile={nextTile}/>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
