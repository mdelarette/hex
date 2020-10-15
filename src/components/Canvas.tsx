import React from 'react';
import {useState, useEffect} from 'react';


const Canvas: React.FC<{id:string, zIndex:number}> = ({id, zIndex}) => {

    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(150);

    useEffect(() => {
        console.log('Window initial size', window.innerWidth, window.innerHeight);
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, []);


    return <canvas id={id} width={width} height={height} style={{border:"1px solid #000000", position: "absolute", zIndex: zIndex}}/>
}

  
export default Canvas;