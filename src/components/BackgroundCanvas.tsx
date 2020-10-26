import React from 'react';

import {useState, useEffect} from 'react';


import { Playfield, Dimension, FieldType } from '../types/tile';

import {drawPlayFieldWithCoordinates} from '../helpers/renderer';


const BackgroundCanvas: React.FC<{size:Dimension, defaultPatterns: string[], playfield:Playfield, tileSize:number, images:(HTMLImageElement | null)[]}> = ({size, defaultPatterns, playfield, tileSize, images}) => {
       
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
            let newPatterns = [...patterns];

            let img = images[FieldType.Earth];
            console.log("BackgroundCanvas img Earth", img);
            if(img)
            {
                let p = context.createPattern(img, 'repeat');
                console.log("BackgroundCanvas useEffect p", p);

                if(p)
                {
                    newPatterns[FieldType.Earth] = p;

                }
            }


            let img2 = images[FieldType.Water];
            console.log("BackgroundCanvas img Water", img2);
            if(img2)
            {
                let p = context.createPattern(img2, 'repeat');
                console.log("BackgroundCanvas useEffect p", p);

                if(p)
                {
                    newPatterns[FieldType.Water] = p;
                }
            }
            setPatterns(newPatterns);

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [images]); // context, patterns


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