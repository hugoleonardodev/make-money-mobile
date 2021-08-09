import styled from 'styled-components/native';

export const UserOptionsContainer = styled.View`
  width: 256px;
  height: 60px;
  display: flex;
  flex-direction: row;
  border: 2px solid blue;
  border-radius: 200px;
  align-items: center;
  margin-left: 16px;
  margin-bottom: 16px;
`;

export const UserOptionsAvatar = styled.Image`
  width: 40px;
  height: 40px;
`;

export const UserOptionsName = styled.Text`
  font-size: small;
`;

export const UserOptionsIcon = styled.Image`
  width: 16px;
  height: 8px;
`;
