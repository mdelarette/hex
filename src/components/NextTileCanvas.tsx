import React from 'react';

import {useState, useEffect} from 'react';


import { Tile, Dimension } from '../types/tile';
import {drawTile} from '../helpers/renderer';


const NextTileCanvas: React.FC<{size:Dimension, nextTile: Tile | null, patterns: string[], tileSize:number}> = ({size, nextTile, patterns, tileSize}) => {
  
    
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        let c:HTMLCanvasElement|null = document.getElementById("nextTile") as HTMLCanvasElement;        
        let ctx = c.getContext("2d");
        setContext(ctx);
    }, []);


    // useEffect(() => {
    //     console.log('Canvas size', width, height);
    // }, [width, height]);
    
    
    useEffect(() => {        
        if(context)
        {
            context.clearRect(0,0,size.width,size.height);
            if(nextTile)
            {
                drawTile(context, {x: size.width/2, y: size.height/2}, tileSize, nextTile, patterns);
            }
        }

    }, [size, context, nextTile, patterns, tileSize]);

       
    return (
        <canvas
            id={"nextTile"} 
            width={size.width} 
            height={size.height} 
            style={{border:"1px solid #000000", position: "absolute", zIndex: 0}}

        />
    );
}

  
export default NextTileCanvas;