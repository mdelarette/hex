import React from 'react';

import {useState, useEffect} from 'react';

import { Dimension } from '../types/tile';

const MessagesCanvas: React.FC<{size:Dimension, messages: Map<string,string> | null}> = ({size, messages}) => {
    
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        let c:HTMLCanvasElement|null = document.getElementById("messages") as HTMLCanvasElement;        
        let ctx = c.getContext("2d");
        if(ctx)
        {
            ctx.font = "24px Parisienne";
            // ctx.font = "24px Sansita Swashed";
            // ctx.font = "24px Roboto Mono";
        }

        setContext(ctx);
    }, []);


    // useEffect(() => {
    //     console.log('Canvas size', width, height);
    // }, [width, height]);
    
    
    
    useEffect(() => {       
        if(messages && context)
        {
            let name = messages.get("name");
            let remainingTiles = messages.get("remainingTiles");

            // console.log("useEffect messages name", name);
            // console.log("useEffect messages remainingTiles", remainingTiles);

            context.clearRect(0,0,size.width,size.height);
            
            if(name)
            {
                // context.fillText(name, 0, 30);
            }
            if(remainingTiles)
            {
                let measureText = context.measureText(remainingTiles);
                context.fillText(remainingTiles, (size.width - measureText.width), 30);
            }
        } 

    }, [messages, context, size]);


    return (
        <canvas
            id={"messages"} 
            width={size.width} 
            height={size.height} 
            style={{border:"1px solid #000000", position: "absolute", zIndex: 1}}
        />
    );
}

  
export default MessagesCanvas;