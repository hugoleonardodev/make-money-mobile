import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuDrawer from '../templates/MenuDrawer';

export default function Home() {
  return (
    <NavigationContainer>
      <MenuDrawer />
    </NavigationContainer>
  );
}
