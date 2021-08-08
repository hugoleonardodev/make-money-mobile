import styled from 'styled-components/native';

export const FavoriteCompaniesCardContainer = styled.Button`
  display: flex;
  width: 352px;
  justify-content: space-between;
  box-shadow: 0px 8px 20px -2px rgb(43 37 63 / 10%);
  border-radius: 8px;
  margin-top: 20px;
  align-items: center;
  background: #fafafa;
  cursor: pointer;
  /* transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  } */
`;

export const CompanyNameAndLogoContainer = styled.View`
  display: flex;
  align-items: center;
`;
