import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import { HashRouter } from 'react-router-dom';
import store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <HashRouter store={store}>
        <App />
    </HashRouter>
 
);

