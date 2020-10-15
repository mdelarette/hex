import React from 'react';

import {useState, useEffect} from 'react';

const Canvas: React.FC<{id:string, width:number, height:number, zIndex:number}> = ({id, width, height, zIndex}) => {

    useEffect(() => {
        console.log('Canvas size', width, height);
    }, [width, height]);

    return <canvas id={id} width={width} height={height} style={{border:"1px solid #000000", position: "absolute", zIndex: zIndex}}/>
}

  
export default Canvas;