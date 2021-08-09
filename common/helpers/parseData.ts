import { ChartDataPoint } from 'react-native-responsive-linechart';
import { IntradayPrice } from '../../core/hooks/types';
import X_AXIS_DOMAIN from '../constants/X_AXIS_DOMAIN';

// interface ChartDataPoint {
//   x: string;
//   y: number;
// }

const parseData = (
  intradayData: IntradayPrice[],
  isMarketOpen: boolean
): ChartDataPoint[] => {
  const domainHours = intradayData.map((e: IntradayPrice) => {
    const splitedString = e.minute.split(':');
    const joinedString = splitedString[0] + splitedString[1];
    const numberHour = Number(joinedString);
    if (!isMarketOpen && X_AXIS_DOMAIN.some((f) => f === e.minute)) {
      return {
        x: numberHour / 100,
        y: e.close,
      };
    }
    return {
      x: numberHour / 100,
      y: e.close,
    };
  });
  const result = domainHours.filter((g) => g !== undefined);
  return result;
};

export default parseData;
