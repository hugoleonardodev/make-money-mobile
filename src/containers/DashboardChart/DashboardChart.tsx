import React from 'react';

import {
  Chart,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';

import parseData from '../../../common/helpers';
import { useStocks } from '../../../core/hooks/useStocks';
import { useWindowSize } from '../../../core/hooks/useWindowSize';
import LoadingChart from '../../components/LoadingChart';
import { DashboardChartContainer } from './styles';

const DashboardChart = () => {
  const [width, height] = useWindowSize();
  const { stock, isMarketOpen, isLoading } = useStocks();
  const { intradayPrice, currentPrice } = stock;
  const chartParsedData = parseData(intradayPrice, isMarketOpen);

  return (
    <DashboardChartContainer>
      {isLoading ? (
        <LoadingChart />
      ) : (
        <Chart
          style={{ height: height - 380, width: width }}
          data={chartParsedData}
          padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
          xDomain={{
            min: chartParsedData[0].x,
            max: chartParsedData[chartParsedData.length - 1].x,
          }}
          yDomain={{
            min:
              currentPrice.close *
              (1 -
                (currentPrice.changePercent < 0
                  ? -currentPrice.changePercent
                  : currentPrice.changePercent)),
            max:
              currentPrice.close *
              (1 +
                (currentPrice.changePercent < 0
                  ? -currentPrice.changePercent
                  : currentPrice.changePercent)),
          }}
        >
          <VerticalAxis
            tickCount={11}
            theme={{ labels: { formatter: (v) => v.toFixed(3) } }}
          />
          <HorizontalAxis tickCount={12} />
          <Area
            theme={{
              gradient: {
                from: { color: '#0047bb' },
                to: { color: '#fafafa', opacity: 0.1 },
              },
            }}
          />
        </Chart>
      )}
    </DashboardChartContainer>
  );
};

export default DashboardChart;
