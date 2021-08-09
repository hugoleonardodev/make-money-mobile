import styled from 'styled-components/native';

export const FavoriteCompaniesContainer = styled.View`
  /* display: flex; */
  /* flex-direction: row; */
  /* border: 1px solid black; */
  height: 12vh;
  /* padding: 8px; */
`;

export const FavoriteCompaniesCardTouchable = styled.TouchableWithoutFeedback`
  /* display: flex; */
  /* flex-direction: row; */
  /* width: 352px;
  justify-content: space-between; */
  /* box-shadow: 0px 8px 20px -2px rgb(43 37 63 / 10%); */
  /* border-radius: 8px;
  margin-top: 20px;
  align-items: center;
  background: #fafafa;
  cursor: pointer; */
  /* transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  } */
  /* padding: 8px; */
`;

export const CompanyNameAndLogoContainer = styled.View`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* width: 60vw; */
`;

export const FavoriteCompaniesCardWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 8px;
`;

export const FavoriteCompaniesIcon = styled.Image`
  width: 36px;
  height: 36px;
  /* margin-right: 16px; */
`;
