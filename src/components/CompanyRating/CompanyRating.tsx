import React from 'react';

import {
  CompanyRatingContainer,
  CompanyRatingIcons,
  HeadingRating,
} from './styles';

import { HIGH, LOW } from '../../../common/assets/ICONS';
import { ERROR, SUCCESS } from '../../../common/constants/THEME';

interface CompanyRatingProps {
  companyRating: number;
}

const CompanyRating: React.FC<CompanyRatingProps> = ({ companyRating }) => {
  return (
    <CompanyRatingContainer>
      <HeadingRating feedback={companyRating > 0 ? SUCCESS : ERROR}>
        {companyRating > 0 && <>+</>}
        {`${companyRating.toFixed(3)}%`}
      </HeadingRating>
      {companyRating > 0 ? (
        <CompanyRatingIcons source={{ uri: HIGH }} />
      ) : (
        <CompanyRatingIcons source={{ uri: LOW }} />
      )}
    </CompanyRatingContainer>
  );
};

export default CompanyRating;
