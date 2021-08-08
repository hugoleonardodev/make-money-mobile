import React from 'react';
import CompanyName from '../CompanyName';
import CompanyRating from '../CompanyRating/CompanyRating';
import FavoriteButton from '../FavoriteButton';
import { useStocks } from '../../../core/hooks/useStocks';

import {
  RecentCompaniesCardContainer,
  RecentCompanisDisplayInfo,
} from './styles';

interface RecentCompaniesCardProps {
  companyLogo: JSX.Element;
  companyName: string;
  companySymbol: string;
  companyRating: number;
}

const RecentCompaniesCard: React.FC<RecentCompaniesCardProps> = ({
  companyLogo,
  companyName,
  companySymbol,
  companyRating,
}) => {
  const { handleSearch } = useStocks();

  return (
    <RecentCompaniesCardContainer
      title=""
      onPress={() => handleSearch(companySymbol)}
    >
      <RecentCompanisDisplayInfo>
        <FavoriteButton hasValue={companySymbol} />
        {companyLogo}
        <CompanyName companyName={companyName} companySymbol={companySymbol} />
      </RecentCompanisDisplayInfo>
      <CompanyRating companyRating={companyRating} />
    </RecentCompaniesCardContainer>
  );
};

export default RecentCompaniesCard;
