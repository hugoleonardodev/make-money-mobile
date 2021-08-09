import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
import FavoriteCompaniesList from '../FavoriteCompaniesList';

import {
  MenuDrawerIcon,
  MenuDrawerTitle,
  MenuDrawerTitleWrapper,
} from './styles';

import { IS_FAVORITE } from '../../../common/assets/ICONS';
import UserOptions from '../../components/UserOptions';

const MenuDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <UserOptions />
      <DrawerItemList {...props} />
      <MenuDrawerTitleWrapper>
        <MenuDrawerIcon source={{ uri: IS_FAVORITE }} />
        <MenuDrawerTitle>Empresas favoritas</MenuDrawerTitle>
      </MenuDrawerTitleWrapper>
      <FavoriteCompaniesList />
    </DrawerContentScrollView>
  );
};

export default MenuDrawerContent;
