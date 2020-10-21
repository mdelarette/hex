import React from 'react';

import {useState, useEffect} from 'react';


import { Playfield } from '../types/tile';

import {neighborhood, drawPlayFieldWithCoordinates, drawPlayFieldNeighborhood} from '../helpers/renderer';


const TouchHelperCanvas: React.FC<{width:number, height:number, playfield:Playfield, tileSize:number}> = ({width, height, playfield, tileSize}) => {
       
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        let c:HTMLCanvasElement|null = document.getElementById("touchHelper") as HTMLCanvasElement;        
        let ctx = c.getContext("2d");
        setContext(ctx);
    }, []);


    // useEffect(() => {
    //     console.log('Canvas size', width, height);
    // }, [width, height]);
       
    

    useEffect(() => {       
        if(playfield && context)
        {
            // Build neighborhood
            let playfieldNeighborhood = [{q:0, r:0}];
            if(playfield.tiles.length > 0)
            {
                playfieldNeighborhood = [];
                playfield.tiles.forEach(tile => {
                    neighborhood.forEach(neighbor => {
                        let testCoordinates = {q:tile.coordinates.q + neighbor.q, r:tile.coordinates.r + neighbor.r}

                        let inNeighborhood = playfieldNeighborhood.find(n => n.q === testCoordinates.q && n.r === testCoordinates.r);
                        if(!inNeighborhood)
                        {
                            let inPlayfield = playfield.tiles.find(n => n.coordinates.q === testCoordinates.q && n.coordinates.r === testCoordinates.r);

                            if(!inPlayfield)
                            {
                                playfieldNeighborhood.push(testCoordinates);
                            }
                        }

                    });
                });
            }

            console.log('playfieldNeighborhood tileSize',tileSize,  playfieldNeighborhood);

            // Display neighborhood

            console.log('context', context);
            let c:HTMLCanvasElement|null = document.getElementById("touchHelper") as HTMLCanvasElement;        
            let ctx = c.getContext("2d");
            if(ctx){

                ctx.clearRect(0,0,width,height);
                // context.fillStyle = "white";
                // context.fillRect(0,0,width,height);
    
                drawPlayFieldNeighborhood(ctx, playfieldNeighborhood, tileSize );
            }
        } 

    }, [playfield, context, width, height, tileSize]);
    


    return (
        <canvas
            id={"touchHelper"}
            width={width} 
            height={height} 
            style={{border:"1px solid #000000", position: "absolute", zIndex: 2}}
        />
    );
}

  
export default TouchHelperCanvas;