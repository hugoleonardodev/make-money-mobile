import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuDrawerContent from '../../containers/MenuDrawerContent';
import Dashboard from '../../screens/Dashboard';

const Drawer = createDrawerNavigator();

const MenuDrawer: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fafafa',
          width: 240,
        },
        headerStyle: {
          backgroundColor: '#c6cbef',
        },
      }}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
};

export default MenuDrawer;
