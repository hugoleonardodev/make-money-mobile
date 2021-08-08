import React from 'react';
import CompanyName from '../CompanyName';
import CompanyRating from '../CompanyRating/CompanyRating';
import { useStocks } from '../../../core/hooks/useStocks';

import {
  CompanyNameAndLogoContainer,
  FavoriteCompaniesCardContainer,
} from './styles';

interface FavoriteCompaniesCardProps {
  companyLogo: JSX.Element;
  companyName: string;
  companySymbol: string;
  companyRating: number;
}

const FavoriteCompaniesCard: React.FC<FavoriteCompaniesCardProps> = ({
  companyLogo,
  companyName,
  companySymbol,
  companyRating,
}) => {
  const { handleSearch } = useStocks();

  return (
    <FavoriteCompaniesCardContainer
      title=""
      onPress={() => handleSearch(companySymbol)}
    >
      <CompanyNameAndLogoContainer>
        {companyLogo}
        <CompanyName companyName={companyName} companySymbol={companySymbol} />
      </CompanyNameAndLogoContainer>
      <CompanyRating companyRating={companyRating} />
    </FavoriteCompaniesCardContainer>
  );
};

export default FavoriteCompaniesCard;
