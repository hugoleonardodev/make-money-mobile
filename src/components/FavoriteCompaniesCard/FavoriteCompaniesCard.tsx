import React from 'react';
import CompanyName from '../CompanyName';
import CompanyRating from '../CompanyRating/CompanyRating';
import RemoveFavoriteButton from '../RemoveFavoriteButton';
import { StyleSheet } from 'react-native';

import {
  CompanyNameAndLogoContainer,
  FavoriteCompaniesCardTouchable,
  FavoriteCompaniesCardWrapper,
  FavoriteCompaniesContainer,
  FavoriteCompaniesIcon,
} from './styles';

interface FavoriteCompaniesCardProps {
  companyLogo?: string;
  companyName: string;
  companySymbol: string;
  companyRating: number;
  handleSearch: (searchSymbol: string) => Promise<void>;
}

const FavoriteCompaniesCard: React.FC<FavoriteCompaniesCardProps> = ({
  companyLogo,
  companyName,
  companySymbol,
  companyRating,
  handleSearch,
}) => {
  return (
    <FavoriteCompaniesContainer>
      <FavoriteCompaniesCardTouchable
        onPress={() => handleSearch(companySymbol)}
      >
        <CompanyNameAndLogoContainer
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
          <FavoriteCompaniesCardWrapper>
            <FavoriteCompaniesIcon source={{ uri: companyLogo }} />
            <CompanyName
              companyName={companyName}
              companySymbol={companySymbol}
            />
          </FavoriteCompaniesCardWrapper>
          <FavoriteCompaniesCardWrapper
            style={{ width: '100%', justifyContent: 'space-between' }}
          >
            <CompanyRating companyRating={companyRating} />
            <RemoveFavoriteButton companySymbol={companySymbol} />
          </FavoriteCompaniesCardWrapper>
        </CompanyNameAndLogoContainer>
      </FavoriteCompaniesCardTouchable>
    </FavoriteCompaniesContainer>
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
    width: '100%',
  },
  controls: {
    paddingHorizontal: 12,
  },
});

export default FavoriteCompaniesCard;
