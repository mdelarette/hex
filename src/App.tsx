import React from 'react';
import logo from './logo.svg';
import './App.css';

import Canvas from './components/Canvas'

function App() {
  return (
    <React.Fragment>
      <Canvas id={"background"} zIndex={0} />
      <Canvas id={"foreground"} zIndex={1} />
    </React.Fragment>

  );
}

export default App;
