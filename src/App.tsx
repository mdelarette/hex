import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';


import {tuiles} from './data/tuile';
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
    console.log(tuiles);


    let deck = tuiles.map(tuile => {
      let a = [];
      for(var i = 0; i<tuile.quantite; i++) {
        a.push(tuile.tuile.id);
      }
      return a;
    }).flat();
  
  
    let shuffledDeck = shuffleArray(deck);
  
    console.log("shuffledDeck", shuffledDeck);
  
    let tuile = tuiles.find(x => x.tuile.id === shuffledDeck[0]);
    let tuile2 = tuile ? tuile.tuile : null;
    
    console.log("tuile", tuile);
    console.log("tuile2", tuile2);
    setNextTile(tuile2);
  }, []);

  return (
    <React.Fragment>
      {width && height && (
        <React.Fragment>
          <Canvas id={"background"} width={width} height={height} zIndex={0} nextTile={null}/>
          <Canvas id={"foreground"} width={width} height={height} zIndex={1} nextTile={tuile2}/>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
