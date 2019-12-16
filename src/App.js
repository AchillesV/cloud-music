import React from 'react';
import routes from './routes/index.js';
import { GlobalStyle } from './style';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './assets/iconfont/iconfont.css';

function App() {
  return (
    <div>
      <HashRouter>
        <GlobalStyle />
        {renderRoutes(routes)}
      </HashRouter>
    </div>
  );
}

export default App;
