import React from 'react';
import ReactDOM from 'react-dom';
import Store from './pages/Store';
import { createGlobalStyle } from 'styled-components';

createGlobalStyle`
  html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  `;

ReactDOM.render(
  <React.StrictMode>
    <createGlobalStyle />
    <Store />
  </React.StrictMode>,
  document.getElementById('root')
);
