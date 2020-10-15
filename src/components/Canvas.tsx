import React from 'react';


const Canvas: React.FC<{id:string, zIndex:number}> = ({id, zIndex}) => {
    return <canvas id={id} width="200" height="150" style={{border:"1px solid #000000", position: "absolute", zIndex: zIndex}}/>
}

  
export default Canvas;