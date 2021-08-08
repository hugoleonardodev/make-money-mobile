import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled, { ThemeProvider } from 'styled-components/native';
import theme from './styles/theme';
import HttpClient from './services/api/HttpClient';
import { CompanyQuote } from './services/api/types';
import { StocksProvider } from './core/hooks/useStocks';
import Home from './src/views/Home';

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background.white};
  color: ${(props) => props.theme.colors.primary.contrastText};
  align-items: center;
  justify-content: center;
`;
const Heading = styled.Text`
  color: ${(props) => props.theme.colors.primary.main}; ;
`;

export default function App() {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    (async function () {
      const api = new HttpClient();
      const resp = await api.getQuote('MSFT');

      if (resp) {
        setData(resp as CompanyQuote);
      }
      console.log(resp);
    })();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <StocksProvider>
        <Home />
        <StatusBar style="auto" />
      </StocksProvider>
    </ThemeProvider>
  );
}
