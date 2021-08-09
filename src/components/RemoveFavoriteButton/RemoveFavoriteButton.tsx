import React from 'react';
import { TRASH } from '../../../common/assets/ICONS';
import { useStocks } from '../../../core/hooks/useStocks';
import { RemoveFavoriteIcon, RemoveFavoriteToucheable } from './styles';

interface RemoveFavoritButtonProps {
  companySymbol: string;
}

const RemoveFavoriteButton: React.FC<RemoveFavoritButtonProps> = ({
  companySymbol,
}) => {
  const { removeFavorite } = useStocks();

  return (
    <RemoveFavoriteToucheable onPress={() => removeFavorite(companySymbol)}>
      <RemoveFavoriteIcon source={{ uri: TRASH }} />
    </RemoveFavoriteToucheable>
  );
};

export default RemoveFavoriteButton;
