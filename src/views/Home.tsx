import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import MenuDrawer from '../templates/MenuDrawer';

const Home: React.FC = () => {
  return (
    <NavigationContainer>
      <MenuDrawer />
    </NavigationContainer>
  );
};

export default Home;
