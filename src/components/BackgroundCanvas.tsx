import React from 'react';

import {useState, useEffect} from 'react';


import { Playfield, Dimension } from '../types/tile';

import {drawPlayFieldWithCoordinates} from '../helpers/renderer';


const BackgroundCanvas: React.FC<{size:Dimension, patterns: string[], playfield:Playfield, tileSize:number}> = ({size, patterns, playfield, tileSize}) => {
       
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        let c:HTMLCanvasElement|null = document.getElementById("background") as HTMLCanvasElement;        
        let ctx = c.getContext("2d");
        setContext(ctx);
    }, []);


    // useEffect(() => {
    //     console.log('Canvas size', width, height);
    // }, [width, height]);
       
    

    useEffect(() => {       
        if(playfield && context)
        {
            context.clearRect(0,0,size.width,size.height);
            drawPlayFieldWithCoordinates(context, playfield, tileSize, patterns );
        } 

    }, [playfield, context, size, tileSize, patterns]);
    


    return (
        <canvas
            id={"background"}
            width={size.width} 
            height={size.height} 
            style={{border:"1px solid #000000", position: "absolute", zIndex: 0}}
        />
    );
}

  
export default BackgroundCanvas;