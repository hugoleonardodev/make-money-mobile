import React from 'react';
import { FAVORITE, IS_FAVORITE } from '../../../common/assets/ICONS';

import { useStocks } from '../../../core/hooks/useStocks';
import getLocalStorage from '../../../services/store/getLocalStorage';
import { FavoriteBtn, FavoriteBtnIcon } from './styles';

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
        isFavorite={isFavorite}
        onPress={() => handleFavorite(hasValue)}
        disabled={isFavorite}
      >
        <FavoriteBtnIcon
          source={{ uri: isFavorite ? IS_FAVORITE : FAVORITE }}
        />
      </FavoriteBtn>
    </>
  );
};

export default FavoriteButton;
