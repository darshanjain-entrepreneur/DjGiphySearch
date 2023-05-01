import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { themes } from './styles/themes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <GlobalStyle/>
 
 <ThemeProvider theme ={themes[0]}>
 <App />
 </ThemeProvider>
 
  </React.StrictMode>
);


