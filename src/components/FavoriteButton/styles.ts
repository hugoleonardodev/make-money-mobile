import styled from 'styled-components/native';

interface FavoriteBtnProps {
  isFavorite: boolean;
}

export const FavoriteBtn = styled.TouchableWithoutFeedback<FavoriteBtnProps>`
  background: transparent;
  border: none;
  cursor: ${(props) => (props.isFavorite ? 'auto' : 'pointer')};
`;

export const FavoriteBtnIcon = styled.Image`
  width: 40px;
  height: 40px;
`;
