import styled from 'styled-components/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = styled(Drawer.Navigator)`
  background-color: ${(props) => props.theme.colors.primary.main};
`;

export const DrawerScreen = styled(Drawer.Screen)`
  background-color: ${(props) => props.theme.colors.primary.main};
`;
