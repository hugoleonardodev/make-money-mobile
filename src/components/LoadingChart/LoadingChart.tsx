import React from 'react';

import { CenteredView, Loading, LoadingChartContainer } from './styles';
import NotFound from '../NotFound';

const LoadingChart: React.FC = () => {
  const [isNotFound, setIsNotFound] = React.useState(false);

  React.useEffect(() => {
    const notFoundTimer = setTimeout(() => {
      return setIsNotFound(true);
    }, 2000);
    return () => clearTimeout(notFoundTimer);
  }, []);

  return (
    <LoadingChartContainer>
      <CenteredView>
        <Loading>Loading</Loading>
        {isNotFound && <NotFound />}
      </CenteredView>
    </LoadingChartContainer>
  );
};

export default LoadingChart;
