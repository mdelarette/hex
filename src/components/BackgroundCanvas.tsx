import React from 'react';

import {useState, useEffect} from 'react';


import { Playfield, Dimension, FieldType } from '../types/tile';

import {drawPlayFieldWithCoordinates} from '../helpers/renderer';


const BackgroundCanvas: React.FC<{size:Dimension, defaultPatterns: string[], playfield:Playfield, tileSize:number, images:string[]}> = ({size, defaultPatterns, playfield, tileSize, images}) => {
       
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    const [patterns, setPatterns] = useState<(string|CanvasPattern)[]>(defaultPatterns);

    useEffect(() => {
        let c:HTMLCanvasElement|null = document.getElementById("background") as HTMLCanvasElement;        
        let ctx = c.getContext("2d");
        setContext(ctx);

    }, []);
    
    useEffect(() => {
        console.log("BackgroundCanvas useEffect images", images);

        if(context)
        {
            // let img = images.find(image => image.id === FieldType.Earth.toString());
            // console.log("BackgroundCanvas img Earth", img);
            // if(img)
            // {
            //     let p = context.createPattern(img, 'repeat');
            //     console.log("BackgroundCanvas useEffect p", p);

            //     if(p)
            //     {
            //         let newPatterns = [...patterns];
            //         newPatterns[FieldType.Earth] = p;
            //         setPatterns(newPatterns);

            //     }
            // }
        }

    }, [context, images]);


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