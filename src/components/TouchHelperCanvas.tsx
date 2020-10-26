import React from 'react';

import {useState, useEffect} from 'react';


import { Playfield, Tile, TileWithCoordinates, Dimension, FieldType } from '../types/tile';

import {neighborhood, drawPlayFieldNeighborhood} from '../helpers/renderer';


const TouchHelperCanvas: React.FC<{size:Dimension, playfield:Playfield, tileSize:number, nextTile: Tile | TileWithCoordinates | null, defaultPatterns: string[] | null, images:(HTMLImageElement | null)[] | null}> = ({size, playfield, tileSize, nextTile, defaultPatterns, images}) => {
       
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    const [patterns, setPatterns] = useState<(string|CanvasPattern)[] | null>(defaultPatterns ? defaultPatterns : null);

    useEffect(() => {
        let c:HTMLCanvasElement|null = document.getElementById("touchHelper") as HTMLCanvasElement;        
        let ctx = c.getContext("2d");
        setContext(ctx);
    }, []);


    useEffect(() => {
        console.log("TouchHelperCanvas useEffect images", images);

        if(context && patterns && images)
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

            // Display neighborhood

            let c:HTMLCanvasElement|null = document.getElementById("touchHelper") as HTMLCanvasElement;        
            let ctx = c.getContext("2d");
            if(ctx){

                ctx.clearRect(0,0,size.width,size.height);
                // context.fillStyle = "white";
                // context.fillRect(0,0,width,height);
    
                drawPlayFieldNeighborhood(ctx, playfieldNeighborhood, tileSize, nextTile, patterns );
            }
        } 

    }, [playfield, context, size, tileSize, nextTile, patterns]);
    


    return (
        <canvas
            id={"touchHelper"}
            width={size.width} 
            height={size.height} 
            style={{border:"1px solid #000000", position: "absolute", zIndex: 2}}
        />
    );
}

  
export default TouchHelperCanvas;