import React from 'react';

import {useState, useEffect} from 'react';


import { Tile } from '../types/tile';
import {drawTile} from '../helpers/renderer';


const ForegroundCanvas: React.FC<{width:number, height:number, nextTile: Tile | null, patterns: string[], onClick:Function | null, onWheel:Function | null, tileSize:number}> = ({width, height, nextTile, patterns, onClick, onWheel, tileSize}) => {
    
    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        let c:HTMLCanvasElement|null = document.getElementById("foreground") as HTMLCanvasElement;        
        let ctx = c.getContext("2d");
        setContext(ctx);
    }, []);


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

       


    const handleMouseMove = (event:React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        event.preventDefault();
        event.persist();
        
        let newMousePos = {x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY};

        setMousePos(newMousePos);
    }
    
    const handleClick = (event:React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        event.preventDefault();
        event.persist();
                
        let newMousePos = {x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY};
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
            id={"foreground"} 
            width={width} 
            height={height} 
            style={{border:"1px solid #000000", position: "absolute", zIndex: 3}}


            onMouseMove={handleMouseMove}
            onWheel={handleWheel}
            onClick={handleClick}
        />
    );
}

  
export default ForegroundCanvas;