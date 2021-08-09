import React from 'react';

import SwiperFlatList from 'react-native-swiper-flatlist';

import { useStocks } from '../../../core/hooks/useStocks';
import { getLocalStorage } from '../../../services/store';

import RecentCompaniesCard from '../../components/RecentCompaniesCard';
import STORAGE_OBJECT from '../../../common/constants/STORAGE_OBJECT';

export default () => {
  const {
    refreshRecents,
    setRefreshRecents,
    refreshFavorites,
    setRefreshFavorites,
  } = useStocks();

  const [storage, setStorage] = React.useState(STORAGE_OBJECT);

  React.useEffect(() => {
    const store = getLocalStorage();
    setStorage(store);
    setRefreshFavorites(false);
  }, [refreshFavorites, setRefreshFavorites]);

  React.useEffect(() => {
    const store = getLocalStorage();
    setStorage(store);
    setRefreshRecents(false);
  }, [refreshRecents, setRefreshRecents]);

  return (
    <SwiperFlatList
      autoplay
      index={3}
      autoplayLoop
      data={storage.recentCompanies}
      renderItem={({ item }) => (
        <RecentCompaniesCard
          companyLogo={item.logo}
          companyName={item.name}
          companySymbol={item.symbol}
          companyRating={item.rating}
        />
      )}
    ></SwiperFlatList>
  );
};
