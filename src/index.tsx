import React from 'react';
import ReactDOM from 'react-dom/client';
import AppForm from './components/AppForm';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <AppForm />
    </ThemeProvider>
  </React.StrictMode>
);
