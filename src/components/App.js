
import '../styles/App.scss';
import Landing from '../pages/Landing';
import { Route, Routes } from 'react-router-dom';
import Gaming from '../pages/Gaming';
import MineSweeper from '../pages/MineSweeper';
import Cauldron from '../pages/Cauldron';
import { Provider } from "react-redux";
import store from "../store/store";
import { DndProvider } from 'react-dnd';//DndProvider para D&D
import { HTML5Backend } from 'react-dnd-html5-backend';
import Well from '../pages/Well';
import EndPage from '../pages/EndPage';



function App() {
  
  return (
    <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
      
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
                <Gaming />
              </>
            } />
            <Route path="/mine-sweeper" element={
              <>
                <MineSweeper />
              </>
            } />
            <Route path="/Cauldron" element={
              <>
                <Cauldron  />
              </>
            } />
            <Route path="/Well" element={
              <>
                <Well  />
              </>            
            } />
            <Route path="/EndPage" element={
              <>
                <EndPage  />
              </>            
            } />
            
          </Routes>

  
        </main>
        
      </div>
      
      </Provider>
      </DndProvider>
  );
}

export default App;