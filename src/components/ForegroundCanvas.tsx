import React from 'react';

import {useState, useEffect} from 'react';


import { Tile, Dimension, FieldType } from '../types/tile';
import { drawNextTile } from '../helpers/renderer';

// import { drawMeeple } from '../helpers/drawMeeple';

const ForegroundCanvas: React.FC<{size:Dimension, nextTile: Tile | null, defaultPatterns: string[], onClick:Function | null, onWheel:Function | null, tileSize:number, images:(HTMLImageElement | null)[]}> = ({size, nextTile, defaultPatterns, onClick, onWheel, tileSize, images}) => {
    
    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    const [patterns, setPatterns] = useState<(string|CanvasPattern)[]>(defaultPatterns);

    useEffect(() => {
        let c:HTMLCanvasElement|null = document.getElementById("foreground") as HTMLCanvasElement;        
        let ctx = c.getContext("2d");
        setContext(ctx);
    }, []);
    
    useEffect(() => {
        if(context)
        {
            let newPatterns = [...patterns];

            let img = images[FieldType.Earth];
            if(img)
            {
                let p = context.createPattern(img, 'repeat');
                if(p)
                {
                    newPatterns[FieldType.Earth] = p;

                }
            }


            let img2 = images[FieldType.Water];
            if(img2)
            {
                let p = context.createPattern(img2, 'repeat');

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
        if(context && mousePos.x && mousePos.y)
        {
            context.clearRect(0,0,size.width,size.height);
            if(nextTile)
            {
                drawNextTile(context, mousePos, tileSize, nextTile, patterns);

                // drawMeeple(context, mousePos, tileSize, "green");

            }
        }

    }, [mousePos, size, context, nextTile, patterns, tileSize]);

    
    // useEffect(() => {        
    //     if(context && mousePos.x && mousePos.y)
    //     {
    //         context.clearRect(0,0,size.width,size.height);
    //         if(nextTile)
    //         {
    //             // drawTile(context, mousePos, tileSize, nextTile, patterns);
    //             drawNextTile(context, mousePos, tileSize, nextTile, patterns);
    //         }
    //     }

    // }, [context, patterns]);
       


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
            width={size.width} 
            height={size.height} 
            style={{border:"1px solid #000000", position: "absolute", zIndex: 3}}


            onMouseMove={handleMouseMove}
            onWheel={handleWheel}
            onClick={handleClick}
        />
    );
}

  
export default ForegroundCanvas;