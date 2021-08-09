import React from 'react';

import {
  UserOptionsAvatar,
  UserOptionsContainer,
  UserOptionsIcon,
  UserOptionsName,
} from './styles';

import { ARROW } from '../../../common/assets/ICONS';
import { AVATAR } from '../../../common/assets/LOGOS';

const UserOptions: React.FC = () => {
  return (
    <UserOptionsContainer>
      <UserOptionsAvatar source={{ uri: AVATAR }} />
      <UserOptionsName>João da Silva Almeida Magalhães</UserOptionsName>
      <UserOptionsIcon source={{ uri: ARROW }} />
    </UserOptionsContainer>
  );
};

export default UserOptions;
