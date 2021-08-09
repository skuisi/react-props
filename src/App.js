
import './App.css';
import React from 'react';
import Data from './profile/profile';

function App() {
  const styleApp = {color: "grey", textAlign: "center", fontSize: 25, backgroundColor: 'rgb(255,255,255)'}
  return (
    <div className="App" style={styleApp}>

         <Data fullName="Skuizi" bio="22 y.o No Life" />
          
    </div>
  );
}

export default App;