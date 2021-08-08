import React from 'react';

import HighIcon from '../../../assets/icons/high-icon.svg';
import LowIcon from '../../../assets/icons/low-icon.svg';

import { ERROR, SUCCESS } from '../../../common/constants/THEME';
import { CompanyRatingContainer, HeadingRating } from './styles';

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
        <HighIcon style={{ marginLeft: '4px' }} />
      ) : (
        <LowIcon style={{ marginLeft: '4px' }} />
      )}
    </CompanyRatingContainer>
  );
};

export default CompanyRating;
