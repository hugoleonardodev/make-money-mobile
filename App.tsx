import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components/native';
import theme from './styles/theme';
import { StocksProvider } from './core/hooks/useStocks';
import Home from './src/views/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StocksProvider>
        <Home />
        <StatusBar style="auto" />
      </StocksProvider>
    </ThemeProvider>
  );
};

export default App;
