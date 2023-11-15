import React, { useState } from "react";
import '../styles/App.scss';
import Landing from '../pages/Landing';
import { Route, Routes } from 'react-router-dom';
import Gaming from '../pages/Gaming';
import MineSweeper from '../pages/MineSweeper';
import Cauldron from '../pages/Cauldron';




function App() {
  const [score, setScore] = useState({ yellow: 0, red: 0, blue: 0 });
  const [storedScore, setStoredScore] = useState({ yellow: 0, red: 0, blue: 0 });
  return (
    
      <div className="App">
        
        <main>
          
          <Routes> 
            
            <Route path="/" element={
              <>
                <Landing />
              </>
              } 
            />
            <Route path="/gaming" element={
              <>
                <Gaming setStoredScore={setStoredScore} storedScore={storedScore}/>
              </>
            } />
            <Route path="/mine-sweeper" element={
              <>
                <MineSweeper setScore={setScore} score={score} setStoredScore={setStoredScore} storedScore={storedScore} />
              </>
            } />
            <Route path="/Cauldron" element={
              <>
                <Cauldron storedScore={storedScore} />
              </>
            } />
            
          </Routes>

  
        </main>
        
      </div>
      
    
  );
}

export default App;