import React from 'react';

import {useState, useEffect} from 'react';

const Canvas: React.FC<{id:string, width:number, height:number, zIndex:number}> = ({id, width, height, zIndex}) => {
    
    const [mousePos, setMousePos] = useState({x: 0, y: 0});

    useEffect(() => {
        console.log('Canvas size', width, height);

        // let c:HTMLCanvasElement|null = document.getElementById(id);
        // console.log('Canvas', c);
        
	    // let context = c.getContext("2d");
        // console.log('Canvas', c);

    }, [width, height]);
    
    useEffect(() => {
        console.log('mousePos', mousePos);
    }, [mousePos]);

    const handleMouseMove = (event:React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        event.preventDefault();
        event.persist();

        console.log(event);

        let newMousePos = {x: event.clientX, y: event.clientY};
    }

    return (
        <canvas
            id={id} 
            width={width} 
            height={height} 
            style={{border:"1px solid #000000", position: "absolute", zIndex: zIndex}}

            onMouseMove={handleMouseMove}
        />
    );
}

  
export default Canvas;