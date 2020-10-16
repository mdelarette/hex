import React from 'react';

import {useState, useEffect} from 'react';

import { Tile, TileWithCoordinates, Coordinates} from "../types/tile";

const Canvas: React.FC<{id:string, width:number, height:number, zIndex:number, nextTile:Tile | null}> = ({id, width, height, zIndex, nextTile}) => {

    useEffect(() => {
        console.log('Canvas size', width, height);
    }, [width, height]);


    useEffect(() => {
        console.log('nextTile', nextTile);
    }, [nextTile]);

    return <canvas id={id} width={width} height={height} style={{border:"1px solid #000000", position: "absolute", zIndex: zIndex}}/>
}

  
export default Canvas;