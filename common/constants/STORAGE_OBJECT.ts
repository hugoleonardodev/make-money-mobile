import {
  AMAZON,
  APPLE,
  FACEBOOK,
  MICROSOFT,
  STARBUCKS,
  TWITTER,
} from '../assets/LOGOS';

const STORAGE_OBJECT = {
  recentCompanies: [
    { name: 'Apple Inc', symbol: 'AAPL', rating: 4.35, logo: APPLE },
    { name: 'Amazon.com Inc.', symbol: 'AMZN', rating: -1.35, logo: AMAZON },
    {
      name: 'Microsoft Corporation',
      symbol: 'MSFT',
      rating: -3.95,
      logo: MICROSOFT,
    },
    { name: 'Starbucks Corp.', symbol: 'SBUX', rating: 2.15, logo: STARBUCKS },
    { name: 'Twitter Inc', symbol: 'TWTR', rating: -0.33, logo: TWITTER },
    {
      name: 'Facebook Inc - Class A',
      symbol: 'FB',
      rating: -7.33,
      logo: FACEBOOK,
    },
  ],
  favoriteCompanies: [
    { name: 'Apple Inc', symbol: 'AAPL', rating: 4.35, logo: APPLE },
    { name: 'Starbucks Corp.', symbol: 'SBUX', rating: 2.15, logo: STARBUCKS },
    { name: 'Twitter Inc', symbol: 'TWTR', rating: -0.33, logo: TWITTER },
  ],
  userName: 'João da Silva Almeida Magalhães',
  publishableToken: '?token=pk_2f111dbdf71340fb93e70206a8ee14be',
};

export default STORAGE_OBJECT;
