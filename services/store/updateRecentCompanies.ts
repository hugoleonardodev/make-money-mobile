import { CompanyQuote } from '../../core/hooks/types';
import getLocalStorage from './getLocalStorage';

const updateRecentCompanies = (
  isLoading: boolean,
  recentSearch: CompanyQuote,
  symbol: string
): boolean | void => {
  const store = getLocalStorage();
  const isRecent = store.recentCompanies.filter(
    (company) => company.symbol === symbol
  );
  if (isRecent.length === 0) {
    const newRecentCompany = {
      name: recentSearch.companyName,
      symbol: recentSearch.symbol,
      rating: recentSearch.changePercent,
    };
    const newRecentCompaniesArray = [
      newRecentCompany,
      ...store.recentCompanies,
    ];
    const newStorageObject = {
      ...store,
      recentCompanies: newRecentCompaniesArray,
    };
    localStorage.setItem('monetusMoney', JSON.stringify(newStorageObject));
    return false;
  }
  return true;
};

export default updateRecentCompanies;
