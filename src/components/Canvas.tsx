import React from 'react';

import {useState, useEffect} from 'react';

import { Tile } from '../types/tile';

import {drawSimpleTuile} from '../helpers/renderer';

const Canvas: React.FC<{id:string, width:number, height:number, zIndex:number, nextTile: Tile | null}> = ({id, width, height, zIndex, nextTile}) => {
    
    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);


    useEffect(() => {
        let c:HTMLCanvasElement|null = document.getElementById(id) as HTMLCanvasElement;        
	    let ctx = c.getContext("2d");
        setContext(ctx);
    }, []);


    useEffect(() => {
        console.log('Canvas size', width, height);
    }, [width, height]);
    
    useEffect(() => {
        
        if(context && nextTile && mousePos.x && mousePos.y)
        {
            context.clearRect(0,0,width,height);
            drawSimpleTuile(context, mousePos.x, mousePos.y, 25);
        }

    }, [mousePos, width, height, context, nextTile]);

    const handleMouseMove = (event:React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        event.preventDefault();
        event.persist();

        let newMousePos = {x: event.clientX, y: event.clientY};

        setMousePos(newMousePos);
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