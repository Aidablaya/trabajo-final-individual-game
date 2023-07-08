import React from 'react';
import '../styles/App.scss';
import Landing from '../pages/Landing';
import { Route, Routes } from 'react-router-dom';
import Gaming from '../pages/Gaming';
import MineSweeper from '../pages/MineSweeper';


function App() {
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
                <Gaming/>
              </>
            } />
            <Route path="/mine-sweeper" element={
              <>
                <MineSweeper/>
              </>
            } />
          </Routes>
        </main>
      </div>
      
    
  );
}

export default App;