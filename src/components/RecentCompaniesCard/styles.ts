import styled from 'styled-components/native';

export const RecentCompaniesCardContainer = styled.TouchableWithoutFeedback`
  display: flex;
  width: 352px;
  justify-content: space-between;
  /* box-shadow: 0px, 8px, 20px, -2px, #000000; */
  border-radius: 8px;
  margin-top: 20px;
  align-items: center;
  background: #fafafa;
  cursor: pointer;
  margin: 8px;
`;

export const RecentCompanisDisplayInfo = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* padding: 16px 8px; */
  margin: 8px;
`;

export const RecentCompaniesLogoImage = styled.Image`
  height: 32px;
  width: 32px;
`;

export const RecentCompaniesCardWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 8px;
`;
