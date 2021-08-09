import React from 'react';

import { RECENT, SEARCH } from '../../../common/assets/ICONS';
import { useStocks } from '../../../core/hooks/useStocks';
import CompanyName from '../../components/CompanyName';
import HighOrLow from '../../components/HighOrLow';
import DashboardChart from '../../containers/DashboardChart';
import RecentCompaniesCarousel from '../../containers/RecentCompaniesCarousel';

import {
  ButtonContainer,
  ChangesContainer,
  DashboardBtn,
  DashboardContainer,
  DashboardInputsContainer,
  DashboardTextInput,
  RecentCompaniesIcon,
  RecentCompaniesTitle,
  RecentCompaniesTitleWrapper,
  SearchBtnIcon,
} from './styles';

const Dashboard: React.FC = () => {
  const { stock, symbol, handleInputSymbol, handleSearch } = useStocks();

  return (
    <DashboardContainer>
      <DashboardInputsContainer>
        <DashboardTextInput
          onChangeText={handleInputSymbol}
          value={symbol}
          placeholder="Buscar empresa"
        />
        <ButtonContainer>
          <DashboardBtn onPress={() => handleSearch(symbol)}>
            <SearchBtnIcon source={{ uri: SEARCH }} />
          </DashboardBtn>
        </ButtonContainer>
      </DashboardInputsContainer>
      <ChangesContainer>
        <CompanyName
          companyName={stock.currentPrice.companyName}
          companySymbol={stock.currentPrice.symbol}
        />
        <HighOrLow
          change={stock.currentPrice.change}
          changePercent={stock.currentPrice.changePercent}
          latestPrice={stock.currentPrice.latestPrice}
        />
      </ChangesContainer>
      <DashboardChart />
      <RecentCompaniesTitleWrapper>
        <RecentCompaniesIcon source={{ uri: RECENT }} />
        <RecentCompaniesTitle>Empresas recentes</RecentCompaniesTitle>
      </RecentCompaniesTitleWrapper>
      <RecentCompaniesCarousel />
    </DashboardContainer>
  );
};

export default Dashboard;
