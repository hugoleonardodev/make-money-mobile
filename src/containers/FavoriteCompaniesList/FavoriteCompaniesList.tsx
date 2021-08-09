import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { useStocks } from '../../../core/hooks/useStocks';
import { getLocalStorage } from '../../../services/store';
import { StorageObject } from '../../../services/store/setLocalStorage';
import FavoriteCompaniesCard from '../../components/FavoriteCompaniesCard';

const FavoriteCompaniesList = () => {
  const {
    refreshRecents,
    setRefreshRecents,
    refreshFavorites,
    setRefreshFavorites,
    handleSearch,
  } = useStocks();

  const [storage, setStorage] = React.useState({} as StorageObject);

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

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <FavoriteCompaniesCard
          companyLogo={item.logo}
          companyName={item.name}
          companySymbol={item.symbol}
          companyRating={item.rating}
          handleSearch={handleSearch}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={storage.favoriteCompanies}
        renderItem={renderItem}
        keyExtractor={(item) => item.symbol}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 16,
  },
});

export default FavoriteCompaniesList;
