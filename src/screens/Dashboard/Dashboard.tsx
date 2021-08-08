import React from 'react';
import { View } from 'react-native';
import DashboardChart from '../../containers/DashboardChart';
import FavoriteCompaniesCarousel from '../../containers/FavoriteCompaniesCarousel';

const Dashboard: React.FC = () => {
  return (
    <View>
      <DashboardChart />
      <FavoriteCompaniesCarousel />
    </View>
  );
};

export default Dashboard;
