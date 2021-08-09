import React from 'react';
import { StyleSheet } from 'react-native';

import CompanyName from '../CompanyName';
import CompanyRating from '../CompanyRating/CompanyRating';
import FavoriteButton from '../FavoriteButton';
import { useStocks } from '../../../core/hooks/useStocks';

import {
  RecentCompaniesCardContainer,
  RecentCompaniesCardWrapper,
  RecentCompaniesLogoImage,
  RecentCompanisDisplayInfo,
} from './styles';

import { MONETUS } from '../../../common/assets/LOGOS';

interface RecentCompaniesCardProps {
  companyLogo?: string;
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
      style={styles.container}
      onPress={() => handleSearch(companySymbol)}
    >
      <RecentCompanisDisplayInfo
        style={[
          styles.square,
          {
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2,
          },
        ]}
      >
        <RecentCompaniesCardWrapper>
          <RecentCompaniesLogoImage source={{ uri: companyLogo || MONETUS }} />
          <CompanyName
            companyName={companyName}
            companySymbol={companySymbol}
          />
        </RecentCompaniesCardWrapper>
        <RecentCompaniesCardWrapper>
          <FavoriteButton hasValue={companySymbol} />
          <CompanyRating companyRating={companyRating} />
        </RecentCompaniesCardWrapper>
      </RecentCompanisDisplayInfo>
    </RecentCompaniesCardContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  square: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
    height: 100,
    shadowColor: 'black',
    width: 200,
  },
  controls: {
    paddingHorizontal: 12,
  },
});

export default RecentCompaniesCard;
