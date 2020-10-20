import React from 'react';

import {useState, useEffect} from 'react';


import { Tile, Playfield } from '../types/tile';

// import {drawSimpleTuile} from '../helpers/renderer';
import {drawTile} from '../helpers/renderer';
import {drawPlayFieldWithCoordinates} from '../helpers/renderer';


const Canvas: React.FC<{id:string, width:number, height:number, zIndex:number, nextTile: Tile | null, patterns: string[], onClick:Function | null, onWheel:Function | null, playfield:Playfield|null, tileSize:number, messages: Map<string,string> | null}> = ({id, width, height, zIndex, nextTile, patterns, onClick, onWheel, playfield, tileSize, messages}) => {
    
    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        let c:HTMLCanvasElement|null = document.getElementById(id) as HTMLCanvasElement;        
        let ctx = c.getContext("2d");
        if(ctx)
        {
            ctx.font = "24px Parisienne";
            // ctx.font = "24px Sansita Swashed";
            // ctx.font = "24px Roboto Mono";
        }

        setContext(ctx);
    }, [id]);


    // useEffect(() => {
    //     console.log('Canvas size', width, height);
    // }, [width, height]);
    
    
    useEffect(() => {        
        if(context && mousePos.x && mousePos.y)
        {
            context.clearRect(0,0,width,height);
            if(nextTile)
            {
                drawTile(context, mousePos, tileSize, nextTile, patterns);
            }
        }

    }, [mousePos, width, height, context, nextTile, patterns, tileSize]);


    useEffect(() => {       
        if(id === "foreground")
        {
            // Patterns initialisation
            if(context)
            {
                console.log("Pattern initialisation");
            }
        } 

    }, [id, context]);
    

    useEffect(() => {       
        if(playfield && context)
        {
            context.clearRect(0,0,width,height);
            drawPlayFieldWithCoordinates(context, playfield, tileSize, patterns );

            // let measureText = context.measureText("Remaining tile 4");
            // context.strokeText("Remaining tile 4", (width - measureText.width) / 2, 30);
            
            // measureText = context.measureText("fillText");
            // context.fillText("fillText", (width - measureText.width) / 2, height - 30);
        } 

    }, [playfield, context, width, height, tileSize, patterns]);
    
    useEffect(() => {       
        if(messages && context)
        {
            let name = messages.get("name");
            let remainingTiles = messages.get("remainingTiles");

            console.log("useEffect messages name", name);
            console.log("useEffect messages remainingTiles", remainingTiles);

            context.clearRect(0,0,width,height);
            
            if(name)
            {
                context.fillText(name, 0, 30);
            }
            if(remainingTiles)
            {
                let measureText = context.measureText(remainingTiles);
                context.fillText(remainingTiles, (width - measureText.width), 30);
            }
            // context.fillText("fillText", (width - measureText.width) / 2, height - 30);

            // let measureText = context.measureText("Remaining tile 4");
            // context.strokeText("Remaining tile 4", (width - measureText.width) / 2, 30);
            
            // measureText = context.measureText("fillText");
            // context.fillText("fillText", (width - measureText.width) / 2, height - 30);
        } 

    }, [messages, context, width, height]);


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
    
    const handleWheel = (event:React.MouseEvent<HTMLCanvasElement, WheelEvent>) => {
        event.preventDefault();
        event.persist();
        if(onWheel)
        {
            onWheel(event.nativeEvent.deltaY);
        }
    }

    return (
        <canvas
            id={id} 
            width={width} 
            height={height} 
            style={{border:"1px solid #000000", position: "absolute", zIndex: zIndex}}


            onMouseMove={handleMouseMove}
            onWheel={handleWheel}
            onClick={handleClick}
        />
    );
}

  
export default Canvas;