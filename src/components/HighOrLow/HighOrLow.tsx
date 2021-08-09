import React from 'react';
import { Image } from 'react-native';

import { HIGH, LOW } from '../../../common/assets/ICONS';

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
          {changePercent > 0 ? (
            <Image
              source={{ uri: HIGH }}
              style={{ width: '24px', height: '12px' }}
            />
          ) : (
            <Image
              source={{ uri: LOW }}
              style={{ width: '24px', height: '12px' }}
            />
          )}
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
