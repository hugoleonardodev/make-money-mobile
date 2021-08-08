import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { Text } from 'react-native';

const MenuDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Text>Hello</Text>
    </DrawerContentScrollView>
  );
};

export default MenuDrawerContent;
