import React from 'react';
import './App.css';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

import TouchAppIcon from '@material-ui/icons/TouchAppTwoTone';
import MouseIcon from '@material-ui/icons/MouseTwoTone';
import RotateLeftIcon from '@material-ui/icons/RotateLeftTwoTone';
import RotateRightIcon from '@material-ui/icons/RotateRightTwoTone';

import {useState, useEffect} from 'react';

import { name, version } from "../package.json";

import deck from '../src/data/tuile';
import { defaultPatterns } from '../src/data/tuile';

import { shuffleArray, rotateArray } from './helpers/deck';

import { computeSize, pixel_to_pointy_hex, neighborhood } from '../src/helpers/renderer';



import BackgroundCanvas from './components/BackgroundCanvas';
import ForegroundCanvas from './components/ForegroundCanvas';
import MessagesCanvas from './components/MessagesCanvas';
import TouchHelperCanvas from './components/TouchHelperCanvas';
import NextTileCanvas from './components/NextTileCanvas';


import { Tile, Point, Playfield } from './types/tile';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },

    appBar: {
      top: 'auto',
      bottom: 0,
      '& > div': {alignItems: 'flex-start'}
    },
    grow: {
      flexGrow: 1,
    },

    canvasesContainer: {
      position: 'absolute'
    },

  }),
);


const App: React.FC = () => {

  const classes = useStyles();

  const [touchMode, setTouchMode] = useState(navigator.maxTouchPoints > 0);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  
  const [tileSize, setTileSize] = useState(25);

  const [nextTile, setNextTile] = useState<Tile | null>(null);
  const [remainingTiles, setRemainingTiles] = useState<number[]>([]);

  const [playfield, setPlayfield] = useState<Playfield>({tiles: []});

  const [messages, setMessages] = useState<Map<string,string> | null>(null);

  useEffect(() => {    
      console.log('Window initial size', window.innerWidth, window.innerHeight);

      let initialWidth = window.innerWidth -2; //-2 for border
      let initialHeight = window.innerHeight -2; //-2 for border

      let topBar = document.getElementById('topBar');
      if(topBar)
      {
        initialHeight = initialHeight - topBar.scrollHeight;
      }
      let bottomBar = document.getElementById('bottomBar');
      if(bottomBar)
      {
        initialHeight = initialHeight - bottomBar.scrollHeight;
      }

      console.log('Canvas initial size', initialWidth, initialHeight);

      setWidth(initialWidth);
      setHeight(initialHeight);

      let initialSize = computeSize({tiles:[]}, window.innerWidth, window.innerHeight);
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
    
    var newMessages = new Map([
      [ "name", `${name} - ${version}` ],
      [ "remainingTiles", `${shuffledDeck.length}` ]
    ]);

    console.log("initial messages", newMessages);

    setNextTile(nextTile);
    setMessages(newMessages);
    setRemainingTiles(shuffledDeck);

  }, []);


//   useEffect(() => {
//     var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

//     if (isMobile) {
//       console.log('isMobile', true);
//     } else {
//       console.log('isMobile', false);
//     }    
//     console.log('maxTouchPoints ?', navigator.maxTouchPoints);
// }, []);


// const handleCtrlZ = () => {
  
//   console.log("handleCtrlZ", playfield.tiles.length);
//   if(playfield.tiles.length > 0)
//   {		

//     let newPlayfield = {...playfield, tiles:[...playfield.tiles]};
 

//     let newNextTile = newPlayfield.tiles.pop() as Tile;
    
//     let newRemainingTiles = [newNextTile.id, ...remainingTiles];
    
    
//     let newTileSize = computeSize(newPlayfield, width, height);
    
//     setNextTile(newNextTile);
//     setPlayfield(newPlayfield);
//     setRemainingTiles(newRemainingTiles);
//     setTileSize(newTileSize);

//   }
// }

// useEffect(() => {

//   document.addEventListener('keyup', (e) => {	
//     console.log("keyup", e);
//     // Canceling last round
//     if(e.key === 'z' && e.ctrlKey)
//     {		

//       handleCtrlZ();
//     }
  
//   }); 
// }, [handleCtrlZ]);


useEffect(() => {

  var newMessages = new Map([
    [ "name", `${name} - ${version}` ],
    [ "remainingTiles", `${remainingTiles.length}` ]
  ]);

  // var newMessages = new Map(messages as Map<string, string>);
  // newMessages.set("remainingTiles", `${remainingTiles.length}`);


  setMessages(newMessages);
}, [remainingTiles.length]);

const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
};

const handleCloseMenu = () => {
  setAnchorEl(null);
};


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
        neighbor = playfield.tiles.find(t => t.coordinates.q === checkCoordinates.q && t.coordinates.r === checkCoordinates.r) !== undefined ;
				counter++;
			} while (!neighbor && (counter < neighborhood.length));
			if(!neighbor)
			{
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
      // console.log('newNextTile', newNextTile);
    }
    else {
      setNextTile(null);
    }
		
		// console.log('newRemainingTiles', newRemainingTiles);
		// console.log('newPlayfield', newPlayfield);
		
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

  if(!nextTile.edges)
  {
    console.log("Tile as no edges");
    return;
  }

  let newNextTile = {
    ...nextTile,  
    edges: rotateArray(nextTile.edges, delta > 0 ? -1 : 1)
  };

  setNextTile(newNextTile);
}

const handleRotateLeft = () => {
  handleRotate(-1);
}
const handleRotateRight = () => {
  handleRotate(1);
}
const handleRotate = (delta: number) => {  
  handleWheel(delta);
}

const handleKeyUpCapture = (event:React.KeyboardEvent<HTMLElement>) => {
  event.preventDefault();
  event.persist();

  console.log("handleKeyUpCapture event", event);

}



  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar id={"topBar"} position="static">
          <Toolbar>

            <div>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClickMenu}>
              <MenuIcon />
            </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={handleCloseMenu}>New game</MenuItem>
                <MenuItem onClick={handleCloseMenu}>Undo</MenuItem>
              </Menu>
          </div>  

            <Typography variant="h6" className={classes.title}>
            {`${name} - ${version}`}
            </Typography>

            

            {touchMode && (            
              <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="touchApp">
                <TouchAppIcon /> {navigator.maxTouchPoints}
              </IconButton>            
            )}
            
            {!touchMode && (            
              <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="mouseApp">
                <MouseIcon />
              </IconButton>            
            )}

          </Toolbar>
        </AppBar>


        {width && height && (
        <div id={"canvasesContainer"} className={classes.canvasesContainer} onKeyUpCapture={handleKeyUpCapture}>

          <BackgroundCanvas width={width} height={height}  patterns={defaultPatterns} playfield={playfield} tileSize={tileSize} />
          <MessagesCanvas width={width} height={height} messages={messages}/>

          {touchMode && (<TouchHelperCanvas width={width} height={height} playfield={playfield} tileSize={tileSize} nextTile={nextTile} patterns={defaultPatterns}/>)}
          {!touchMode && (<TouchHelperCanvas width={width} height={height} playfield={playfield} tileSize={tileSize} nextTile={null} patterns={null} />)}
          

          <ForegroundCanvas width={width} height={height}  nextTile={!touchMode ? nextTile : null} patterns={defaultPatterns} onClick={handleClick}  onWheel={handleWheel} tileSize={tileSize}/>
        </div>
      )}

        
      {touchMode && (
        <AppBar id={"bottomBar"} position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="rotate left" onClick={handleRotateLeft} disabled={!nextTile}>
              <RotateLeftIcon />
            </IconButton>
            <div className={classes.grow} />
            <div>
              <NextTileCanvas width={48} height={48} nextTile={nextTile} patterns={defaultPatterns} tileSize={24}/>
            </div>
            <div className={classes.grow} />
            <IconButton edge="end" color="inherit" aria-label="rotate right" onClick={handleRotateRight} disabled={!nextTile}>
              <RotateRightIcon />
            </IconButton>
          </Toolbar>
        </AppBar>      
      )} 
        


      </div>
    </React.Fragment>
  );
}

export default App;
