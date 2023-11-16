
import '../styles/App.scss';
import Landing from '../pages/Landing';
import { Route, Routes } from 'react-router-dom';
import Gaming from '../pages/Gaming';
import MineSweeper from '../pages/MineSweeper';
import Cauldron from '../pages/Cauldron';
import { Provider } from "react-redux";
import store from "../store/store";




function App() {
  
  return (
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
            
          </Routes>

  
        </main>
        
      </div>
      
      </Provider>
  );
}

export default App;