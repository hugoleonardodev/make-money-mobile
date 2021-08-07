import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled, { ThemeProvider } from 'styled-components/native';
import theme from './styles/theme';

const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    align-items: center;
    justify-content: center;
`;
const Heading = styled.Text`
  color:  ${(props) => props.theme.colors.primary};;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>

      <Container>
        <Heading>Open up App.tsx to start working on your app!</Heading>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}
