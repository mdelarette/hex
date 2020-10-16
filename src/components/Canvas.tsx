import React from 'react';

import {useState, useEffect} from 'react';

import { Tile, Playfield } from '../types/tile';

// import {drawSimpleTuile} from '../helpers/renderer';
import {drawTile} from '../helpers/renderer';
import {drawPlayFieldWithCoordinates} from '../helpers/renderer';


const Canvas: React.FC<{id:string, width:number, height:number, zIndex:number, nextTile: Tile | null, patterns: string[], onClick:Function | null, playfield:Playfield|null, tileSize:number}> = ({id, width, height, zIndex, nextTile, patterns, onClick, playfield, tileSize}) => {
    
    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        let c:HTMLCanvasElement|null = document.getElementById(id) as HTMLCanvasElement;        
	    let ctx = c.getContext("2d");
        setContext(ctx);
    }, []);


    useEffect(() => {
        console.log('Canvas size', width, height);
    }, [width, height]);
    
    
    useEffect(() => {        
        if(context && mousePos.x && mousePos.y)
        {
            context.clearRect(0,0,width,height);
            if(nextTile)
            {
                drawTile(context, mousePos, 25, nextTile, patterns);
            }
        }

    }, [mousePos, width, height, context, nextTile]);


    useEffect(() => {       
        if(id === "foreground")
        {
            // Patterns initialisation
            if(context)
            {
                console.log("Pattern initialisation");
            }
        } 

    }, [context]);
    

    useEffect(() => {       
        if(playfield && context)
        {
            console.log("Redraw", playfield);
            drawPlayFieldWithCoordinates(context, playfield, tileSize, patterns );
        } 

    }, [playfield]);
    

    const handleMouseMove = (event:React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        event.preventDefault();
        event.persist();
        
        let newMousePos = {x: event.clientX, y: event.clientY};

        setMousePos(newMousePos);
    }
    
    const handleClick = (event:React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        event.preventDefault();
        event.persist();
        
        let newMousePos = {x: event.clientX, y: event.clientY};
        setMousePos(newMousePos);
        if(onClick)
        {
            onClick(newMousePos);
        }
    }

    return (
        <canvas
            id={id} 
            width={width} 
            height={height} 
            style={{border:"1px solid #000000", position: "absolute", zIndex: zIndex}}

            onMouseMove={handleMouseMove}
            onClick={handleClick}
        />
    );
}

  
export default Canvas;