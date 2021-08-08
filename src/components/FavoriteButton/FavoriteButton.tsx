import React from 'react';

import IsFavorite from '../../../assets/icons/is-favorite-icon.svg';
import Favorite from '../../../assets/icons/favorite-icon.svg';

import { useStocks } from '../../../core/hooks/useStocks';
import getLocalStorage from '../../../services/store/getLocalStorage';
import { FavoriteBtn } from './styles';

interface FavoriteButtonProps {
  hasValue: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ hasValue }) => {
  const {
    handleFavorite,
    refreshFavorites,
    setRefreshFavorites,
    removeFavorite,
    refreshRecents,
    setRefreshRecents,
  } = useStocks();

  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    const store = getLocalStorage();
    const filterCompanies = store.favoriteCompanies.filter(
      (company) => company.symbol === hasValue
    );
    if (filterCompanies.length > 0) {
      return setIsFavorite(true);
    }
    return setIsFavorite(false);
  }, [
    hasValue,
    refreshFavorites,
    setRefreshFavorites,
    removeFavorite,
    refreshRecents,
    setRefreshRecents,
  ]);

  return (
    <>
      <FavoriteBtn
        title=""
        isFavorite={isFavorite}
        onPress={() => handleFavorite(hasValue)}
        disabled={isFavorite}
      >
        {isFavorite ? <IsFavorite /> : <Favorite />}
      </FavoriteBtn>
    </>
  );
};

export default FavoriteButton;
