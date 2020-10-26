import React from 'react';
import './App.css';

import blueImagePath from '../src/patterns/ocean.jpg'; // gives image path
import brownImagePath from '../src/patterns/herbe.jpg'; // gives image path


import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import TouchAppIcon from '@material-ui/icons/TouchAppTwoTone';
import MouseIcon from '@material-ui/icons/MouseTwoTone';
import RotateLeftIcon from '@material-ui/icons/RotateLeftTwoTone';
import RotateRightIcon from '@material-ui/icons/RotateRightTwoTone';

// HOOKS
import {useState, useEffect} from 'react';

// CUSTOM HOOKS
import useWindowSize from "../src/utils/useWindowSize";

import { name, version } from "../package.json";

import deck from '../src/data/tuile';
import { defaultPatterns } from '../src/data/tuile';

import { shuffleArray, rotateArray } from './helpers/deck';

import { computeSize, pixel_to_pointy_hex, neighborhood, computeOffset } from '../src/helpers/renderer';



import BackgroundCanvas from './components/BackgroundCanvas';
import ForegroundCanvas from './components/ForegroundCanvas';
import MessagesCanvas from './components/MessagesCanvas';
import TouchHelperCanvas from './components/TouchHelperCanvas';
import NextTileCanvas from './components/NextTileCanvas';


import { Tile, TileWithCoordinates, Point, Playfield, Dimension, FieldType } from './types/tile';



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

  const [touchMode] = useState<boolean>(navigator.maxTouchPoints > 0);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { windowInnerWidth, windowInnerHeight } = useWindowSize();

  const [canvasSize, setCanvasSize] = useState<Dimension>({width:0, height:0});
  
  const [tileSize, setTileSize] = useState(25);

  const [nextTile, setNextTile] = useState<Tile | null>(null);
  const [remainingTiles, setRemainingTiles] = useState<number[]>([]);

  const [playfield, setPlayfield] = useState<Playfield>({tiles: []});

  const [messages, setMessages] = useState<Map<string,string>>(new Map<string,string>());

  
  // const [images, setImages] = useState<Map<FieldType,HTMLImageElement>>(new Map<FieldType,HTMLImageElement>());
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  // const [images, setImages] = useState<string[]>([]);








  useEffect(() => {    
      // const handleLoadedImage = (event:Event) => {

      //   // console.log("handleLoadedImage event", event, images);
      //   images.push(event.target as HTMLImageElement);
    
      //   // let newImages = [...images, (event.target as HTMLImageElement).id];
      //   // setImages(newImages);
    
      //   if((event.target as HTMLImageElement).id === FieldType.Water.toString())
      //   {
      //     let brownImage = new Image();
      //     brownImage.id = FieldType.Earth.toString();
      //     brownImage.src = brownImagePath;
      //     brownImage.onload= handleLoadedImage;
      //   }
        
      //   if((event.target as HTMLImageElement).id === FieldType.Earth.toString())
      //   {
      //     setImages([...images]);
      //   }
      //   // console.log("handleLoadedImage newImages", newImages);
      //   console.log("handleLoadedImage images", images);
      // }


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

      setCanvasSize({width: initialWidth, height: initialHeight});

      let initialSize = computeSize({tiles:[]}, {width: initialWidth, height: initialHeight});

      let versionFromStorage = localStorage.getItem('version');
      if(version === versionFromStorage)
      {
        let playfieldStringFromStorage = localStorage.getItem('playfield');
        let remainingTilesStringFromStorage = localStorage.getItem('remainingTiles');
        if(playfieldStringFromStorage && remainingTilesStringFromStorage){
          let playfieldFromStorage = JSON.parse(playfieldStringFromStorage) as Playfield;
          let remainingTilesFromStorage = JSON.parse(remainingTilesStringFromStorage) as number[];
    
          if(playfieldFromStorage && remainingTilesFromStorage){
            console.log("restoring old game", playfieldStringFromStorage);
    
    
            let tile = deck.tiles.find(x => x.tile.id === remainingTilesFromStorage[0]);
            let nextTile = tile ? tile.tile : null;  
          
            setNextTile(nextTile);
            setPlayfield(playfieldFromStorage);
            setRemainingTiles(remainingTilesFromStorage);
    
            let newTileSize = computeSize(playfieldFromStorage, {width: initialWidth, height: initialHeight});
            
            console.log("restoring old game newTileSize", newTileSize);
  
            setTileSize(newTileSize);
            
            return;
          }
        }
      }      
      
      handleNewGame();
      setTileSize(initialSize);


      // // Patterns initialisation
      
      // console.log("Patterns initialisation");
      // let blueImage = new Image();
      // blueImage.id = FieldType.Water.toString();
      // blueImage.src = blueImagePath;
      
      // blueImage.onload = handleLoadedImage;

        
      // console.log("Patterns initialisation ?");

  }, []);



  useEffect(() => {        
    let newWidth = windowInnerWidth -2; //-2 for border
    let newHeight = windowInnerHeight -2; //-2 for border

    let topBar = document.getElementById('topBar');
    if(topBar)
    {
      newHeight = newHeight - topBar.scrollHeight;
    }
    let bottomBar = document.getElementById('bottomBar');
    if(bottomBar)
    {
      newHeight = newHeight - bottomBar.scrollHeight;
    }    
    setCanvasSize({width: newWidth, height: newHeight});
  }, [windowInnerWidth, windowInnerHeight]);


  useEffect(() => {
    let newTileSize = computeSize(playfield, canvasSize);  
    setTileSize(newTileSize);
  }, [canvasSize, playfield]);


const handleCtrlZ = () => {
  
  console.log("handleCtrlZ", playfield.tiles.length);
  if(playfield.tiles.length > 0)
  {		

    let newPlayfield = {...playfield, tiles:[...playfield.tiles]};
 

    let newNextTile = newPlayfield.tiles.pop() as Tile;
    
    let newRemainingTiles = [newNextTile.id, ...remainingTiles];
    
    
    // let newTileSize = computeSize(newPlayfield, canvasSize);
    
    setNextTile(newNextTile);
    setPlayfield(newPlayfield);
    setRemainingTiles(newRemainingTiles);
    // setTileSize(newTileSize);

  }
}

const handleNewGame = () => {
  
  let flattedDeck = deck.tiles.map(t => {
    let a = [];
    for(var i = 0; i<t.quantity; i++) {
      a.push(t.tile.id);
    }
    return a;
  }).flat();

  let shuffledDeck = shuffleArray(flattedDeck);

  let tile = deck.tiles.find(x => x.tile.id === shuffledDeck[0]);
  let nextTile = tile ? tile.tile : null;  

  setNextTile(nextTile);
  setPlayfield({tiles: []});
  setRemainingTiles(shuffledDeck);
}


useEffect(() => {
  var newMessages = new Map([
    [ "name", `${name} - ${version}` ],
    [ "remainingTiles", `${remainingTiles.length}` ]
  ]);
  setMessages(newMessages);
}, [remainingTiles.length]);



  useEffect(() => {

    localStorage.setItem('version', JSON.stringify(version));
    localStorage.setItem('playfield', JSON.stringify(playfield));
    localStorage.setItem('remainingTiles', JSON.stringify(remainingTiles));    

  }, [playfield, remainingTiles]);


  useEffect(() => {
    console.log("useEffect images", images);
  }, [images]);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };


  const handleClick = (position:Point) => {    

    if(!nextTile)
    {
      return;
    }
    
		var coordinates = {q: 0, r: 0};
		if(playfield.tiles.length !== 0){

      let offset = computeOffset(canvasSize, playfield.tiles.map(tile => tile.coordinates), tileSize);

			coordinates = pixel_to_pointy_hex({x: position.x - offset.x, y: position.y - offset.y}, tileSize);
		}
		
		// Test that space is free
		let inoccupied = playfield.tiles.find(t => t.coordinates.q === coordinates.q && t.coordinates.r === coordinates.r) === undefined;		
		if(!inoccupied)
		{
			// console.warn("Already something here : ", coordinates);
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

    if(touchMode)
    {
      if(nextTile.hasOwnProperty("coordinates"))
      {
        let nextTileCoordinates = (nextTile as TileWithCoordinates).coordinates;
        if(nextTileCoordinates.q !== coordinates.q || nextTileCoordinates.r !== coordinates.r)
        {
          let newNextTile = { ...nextTile, coordinates:coordinates};
          setNextTile(newNextTile);
          return;
        }
      }
      else {
        let newNextTile = { ...nextTile, coordinates:coordinates};
        setNextTile(newNextTile);
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
    setPlayfield(newPlayfield);
    setRemainingTiles(newRemainingTiles);
}


const handleWheel = (delta:Number) => {    
  if(!nextTile)
  {
    return;
  }

  if(!nextTile.edges)
  {
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


const handleKeyUp = (event:React.KeyboardEvent<HTMLElement>) => {
  event.preventDefault();
  event.persist();
  event.stopPropagation();

  console.log("handleKeyUp event", event);
  console.log("handleKeyUp event", event.key);

  var newMessages = new Map([
    [ "name", `${event.key}` ],
    [ "remainingTiles", `${remainingTiles.length}` ]
  ]);
  setMessages(newMessages);


  if(event.key === 'z' && event.ctrlKey)
  {		
    handleCtrlZ();
  }
  if(event.key === 'Backspace')
  {		
    handleCtrlZ();
  }
}

  return (
    <React.Fragment>
      <div className={classes.root} onKeyUp={handleKeyUp} tabIndex={0}>
        <AppBar id={"topBar"} position="static" >
          <Toolbar>

            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClickMenu}>
              <MenuIcon />
            </IconButton>

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

        <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={() => {handleCloseMenu(); handleNewGame();}}>New game</MenuItem>
                <MenuItem onClick={() => {handleCloseMenu(); handleCtrlZ();}}>Undo</MenuItem>
        </Menu>


        {canvasSize.width && canvasSize.height && (
        <div id={"canvasesContainer"} className={classes.canvasesContainer}>

          <BackgroundCanvas size={canvasSize} defaultPatterns={defaultPatterns} playfield={playfield} tileSize={tileSize} images={images}/>
          <MessagesCanvas size={canvasSize} messages={messages}/>

          {touchMode && (<TouchHelperCanvas size={canvasSize} playfield={playfield} tileSize={tileSize} nextTile={nextTile} patterns={defaultPatterns}/>)}
          {!touchMode && (<TouchHelperCanvas size={canvasSize} playfield={playfield} tileSize={tileSize} nextTile={null} patterns={null} />)}
          

          <ForegroundCanvas size={canvasSize}  nextTile={!touchMode ? nextTile : null} patterns={defaultPatterns} onClick={handleClick}  onWheel={handleWheel} tileSize={tileSize}/>
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
              <NextTileCanvas size={{width:48, height:48}} nextTile={nextTile} patterns={defaultPatterns} tileSize={24}/>
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
