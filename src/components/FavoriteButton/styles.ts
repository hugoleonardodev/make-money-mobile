import styled from 'styled-components/native';

interface FavoriteBtnProps {
  isFavorite: boolean;
}

export const FavoriteBtn = styled.Button<FavoriteBtnProps>`
  background: transparent;
  border: none;
  cursor: ${(props) => (props.isFavorite ? 'auto' : 'pointer')};
`;
