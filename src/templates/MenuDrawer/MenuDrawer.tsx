import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MenuDrawerContent from '../../containers/MenuDrawerContent';
import Dashboard from '../../screens/Dashboard';
import { useWindowSize } from '../../../core/hooks/useWindowSize';

const Drawer = createDrawerNavigator();

const MenuDrawer: React.FC = () => {
  const [width] = useWindowSize();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fafafa',
          width: 0.7 * width,
        },
        headerStyle: {
          backgroundColor: '#0047bb',
        },
        headerTintColor: '#fafafa',
      }}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
};

export default MenuDrawer;
