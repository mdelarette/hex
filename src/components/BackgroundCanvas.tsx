import React from 'react';

import {useState, useEffect} from 'react';


import { Playfield } from '../types/tile';

import {drawPlayFieldWithCoordinates} from '../helpers/renderer';


const BackgroundCanvas: React.FC<{width:number, height:number, patterns: string[], playfield:Playfield, tileSize:number}> = ({width, height, patterns, playfield, tileSize}) => {
       
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
            context.clearRect(0,0,width,height);
            drawPlayFieldWithCoordinates(context, playfield, tileSize, patterns );
        } 

    }, [playfield, context, width, height, tileSize, patterns]);
    


    return (
        <canvas
            id={"background"}
            width={width} 
            height={height} 
            style={{border:"1px solid #000000", position: "absolute", zIndex: 0}}
        />
    );
}

  
export default BackgroundCanvas;