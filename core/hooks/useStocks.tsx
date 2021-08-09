import React from 'react';

import { Action } from '../actions';
import { CompanyQuote, IntradayPrice } from './types';
import { InitialState, initialState, stocksReducer } from '../reducers/index';

import getLocalStorage from '../../services/store/getLocalStorage';
import updateRecentCompanies from '../../services/store/updateRecentCompanies';
import { StorageObject } from '../../services/store/setLocalStorage';
import updateFavoriteCompanies from '../../services/store/updateFavoriteCompanies';

import deleteFavoriteCompany from '../../services/store/deleteFavoriteCompany';
import HttpClient from '../../services/api/HttpClient';

export interface StocksProvider {
  currentPrice: CompanyQuote;
  lastPrice: CompanyQuote;
  intradayPrice: IntradayPrice[];
}

export interface StocksContextData {
  stock: StocksProvider;
  setStock: React.Dispatch<Action>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  symbol: string;
  handleInputSymbol: (text: string) => void;
  handleSearch: (searchSymbol: string) => Promise<void>;
  refreshStock: boolean;
  refreshRecents: boolean;
  setRefreshRecents: React.Dispatch<React.SetStateAction<boolean>>;
  storage: StorageObject;
  isMarketOpen: boolean;
  refreshFavorites: boolean;
  setRefreshFavorites: React.Dispatch<boolean>;
  handleFavorite: (companySymbol: string) => Promise<void>;
  removeFavorite: (companySymbol: string) => void;
}

export const StocksContext = React.createContext<StocksContextData>(
  {} as StocksContextData
);

export const StocksProvider: React.FC = ({ children }) => {
  const [stock, setStock] = React.useReducer(
    stocksReducer,
    initialState as InitialState
  );

  const [isLoading, setIsLoading] = React.useState(false);

  const [error, setError] = React.useState(false);

  const [symbol, setSymbol] = React.useState('');

  const [isMarketOpen, setIsMarketOpen] = React.useState(false);

  const [refreshStock, setRefreshStock] = React.useState(false);

  const [refreshRecents, setRefreshRecents] = React.useState(false);
  const [storage, setStorage] = React.useState({} as StorageObject);
  const [refreshChart, setRefreshChart] = React.useState(false);
  const [recentSymbol, setRecentSymbol] = React.useState('MSFT');
  const [refreshFavorites, setRefreshFavorites] = React.useState(false);

  React.useEffect(() => {
    const store = getLocalStorage();
    setStorage(store);
  }, []);

  const handleInputSymbol = React.useCallback(
    (text) => {
      setSymbol(text.toUpperCase());
    },
    [setSymbol]
  );

  const handleRequest = React.useCallback(
    async (
      searchSymbol: string,
      setStock: React.Dispatch<Action>,
      companyQuote: CompanyQuote
    ) => {
      const api = new HttpClient();
      const intradayPrices = await api.getIntraday(searchSymbol);
      setStock({
        type: '@stocks/UPDATE_INTRADAY_PRICES',
        payload: intradayPrices as IntradayPrice[],
      });
      setStock({
        type: '@stocks/UPDATE_REAL_TIME_QUOTES',
        payload: companyQuote,
      });
    },
    []
  );

  const handleRecent = React.useCallback(
    (searchSymbol: string, companyQuote: CompanyQuote) => {
      const isRecent = updateRecentCompanies(
        isLoading,
        companyQuote,
        searchSymbol
      );
      if (!isRecent) {
        const store = getLocalStorage();
        setStorage(store);
        setRefreshRecents(true);
        // eslint-disable-next-line no-console
        return console.log('Recent Array Updated');
      }
      // eslint-disable-next-line no-console
      return console.log(`Already Visited ${searchSymbol}`);
    },
    [isLoading]
  );

  const handleSearch = React.useCallback(
    async (searchSymbol = 'MSFT') => {
      setIsLoading(true);
      setRecentSymbol(searchSymbol);
      const api = new HttpClient();
      const companyQuote = await api.getQuote(searchSymbol);
      await handleRequest(searchSymbol, setStock, companyQuote);
      setTimeout(() => {
        handleRecent(searchSymbol, companyQuote);
        setIsLoading(false);
      }, 1000);
    },
    [handleRecent, handleRequest]
  );

  const handleFavorite = React.useCallback(
    async (companySymbol) => {
      setRefreshFavorites(false);
      const api = new HttpClient();
      const newFavorite = await api.getQuote(companySymbol);
      const isUpdated = updateFavoriteCompanies(
        newFavorite.companyName,
        newFavorite.symbol,
        newFavorite.changePercent
      );
      if (isUpdated) {
        setRefreshFavorites(true);
      }
    },
    [setRefreshFavorites]
  );

  const removeFavorite = React.useCallback(
    (companySymbol) => {
      setRefreshRecents(false);
      setRefreshFavorites(false);
      const store = getLocalStorage();
      deleteFavoriteCompany(store, companySymbol);
      setRefreshRecents(true);
      setRefreshFavorites(true);
    },
    [setRefreshFavorites, setRefreshRecents]
  );

  React.useEffect(() => {
    (async function () {
      setIsLoading(true);
      const api = new HttpClient();
      const resultQuote = await api.getQuote(recentSymbol);
      if (resultQuote.isUSMarketOpen) {
        setIsMarketOpen(true);
        await handleRequest(recentSymbol, setStock, resultQuote);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    })();
  }, [handleRequest, recentSymbol]);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Refresh Charts every minute if isMarketOpen');
    setRefreshChart(true);
    const oneMinuteTimer = setTimeout(async () => {
      const api = new HttpClient();
      const resultQuote = await api.getQuote(recentSymbol);
      if (resultQuote.isUSMarketOpen) {
        await handleRequest(recentSymbol, setStock, resultQuote);
        setIsMarketOpen(true);
        setRefreshChart(false);
      }
      setIsMarketOpen(false);
    }, 60000);

    return () => clearTimeout(oneMinuteTimer);
  }, [
    handleRequest,
    setIsMarketOpen,
    recentSymbol,
    setRefreshChart,
    refreshChart,
  ]);

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Refresh Indicator High/Low every 5 seconds if isMarketOpen');
    setRefreshStock(false);
    let fiveSecondsTimer: NodeJS.Timeout;
    if (isMarketOpen) {
      fiveSecondsTimer = setTimeout(async () => {
        const api = new HttpClient();
        const companyQuote = await api.getQuote(recentSymbol);
        if (isMarketOpen && !refreshStock) {
          setStock({
            type: '@stocks/UPDATE_REAL_TIME_QUOTES',
            payload: companyQuote,
          });
          setRefreshStock(true);
        }
      }, 5000);
    }
    setIsMarketOpen(false);

    return () => clearTimeout(fiveSecondsTimer);
  }, [isMarketOpen, setRefreshStock, refreshStock, recentSymbol]);

  return (
    <StocksContext.Provider
      value={{
        stock,
        setStock,
        error,
        setError,
        isLoading,
        setIsLoading,
        symbol,
        handleInputSymbol,
        handleSearch,
        refreshStock,
        refreshRecents,
        setRefreshRecents,
        storage,
        isMarketOpen,
        refreshFavorites,
        setRefreshFavorites,
        handleFavorite,
        removeFavorite,
      }}
    >
      {children}
    </StocksContext.Provider>
  );
};

export const useStocks = (): StocksContextData => {
  const context = React.useContext(StocksContext);

  if (!context) {
    throw new Error('useStocks must be used within an StocksProvider');
  }

  return context;
};
