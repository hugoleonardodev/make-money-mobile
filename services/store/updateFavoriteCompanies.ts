import getLocalStorage from './getLocalStorage';

const updateFavoriteCompanies = (
  companyName: string,
  companySymbol: string,
  companyRating: number
): boolean | void => {
  const store = getLocalStorage();
  const isFavorite = store.favoriteCompanies.filter(
    (company) => company.symbol === companySymbol
  );

  if (isFavorite.length > 0) return false;
  if (store) {
    const newFavoriteCompany = {
      name: companyName,
      symbol: companySymbol,
      rating: companyRating,
    };
    const newFavoriteCompaniesArray = [
      newFavoriteCompany,
      ...store.favoriteCompanies,
    ];
    const newStorageObject = {
      ...store,
      favoriteCompanies: newFavoriteCompaniesArray,
    };
    localStorage.setItem('monetusMoney', JSON.stringify(newStorageObject));
    return true;
  }
};

export default updateFavoriteCompanies;
