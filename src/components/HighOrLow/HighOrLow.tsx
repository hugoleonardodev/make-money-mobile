import React from 'react';
import High from '../../../assets/icons/high-icon.svg';
import Low from '../../../assets/icons/low-icon.svg';

import { ERROR, SUCCESS } from '../../../common/constants/THEME';
import {
  ChangesHeading3,
  ChangesInfos,
  HighOrLowContainer,
  HighOrLowDisplay,
} from './styles';

interface HighOrLowProps {
  change: number;
  changePercent: number;
  latestPrice: number;
}

const HighOrLow: React.FC<HighOrLowProps> = ({
  change,
  changePercent,
  latestPrice,
}) => {
  return (
    <HighOrLowContainer>
      <ChangesInfos>
        <ChangesHeading3>
          {changePercent > 0 ? <High /> : <Low />}
        </ChangesHeading3>
        <ChangesHeading3>{`$${latestPrice}`}</ChangesHeading3>
      </ChangesInfos>
      <HighOrLowDisplay changePercent={changePercent}>
        {`$${change.toFixed(2)} (${changePercent.toFixed(3)}%)`}
      </HighOrLowDisplay>
    </HighOrLowContainer>
  );
};

export default HighOrLow;
