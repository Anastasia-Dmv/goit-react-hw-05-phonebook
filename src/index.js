import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';

ReactDOM.render(
  <div>
    <React.StrictMode>
      <App />,
    </React.StrictMode>
  </div>,

  document.getElementById('root'),
);
