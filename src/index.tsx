import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import history from 'src/helpers/history';
import 'src/helpers/i18n';
import App from './app';
import ErrorBoundary from './pages/errorBoundary';
import theme from './themes';
import { ThemeProvider } from '@mui/material/styles';

render(
  <ThemeProvider theme={theme()}>
    <CssBaseline />

    <Router history={history}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement,
);
