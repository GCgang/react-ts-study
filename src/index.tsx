import React from 'react';
import ReactDOM from 'react-dom/client';
import Circle from './components/Circle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Circle borderColor="yellow" bgColor="teal" />
    <Circle bgColor="tomato" />
  </React.StrictMode>
);
