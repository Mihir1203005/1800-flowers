import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FlowersProvider } from './Context';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <FlowersProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </FlowersProvider>,
  document.getElementById('root')
);
