import styled from 'styled-components/native';

export const DashboardContainer = styled.View``;

export const ChangesContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 32px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

export const DashboardInputsContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const DashboardTextInput = styled.TextInput`
  margin: 16px;
  border: 2px solid lightgray;
  border-radius: 8px;
  padding: 8px;
  width: 70vw;
`;

export const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary.main};
  width: 18vw;
  height: 40px;
  border: 2px solid lightgray;
  border-radius: 8px;
  background: blue;
  margin-top: 14px;
`;

export const DashboardBtn = styled.TouchableWithoutFeedback`
  margin: 16px;
  margin-top: 16px;
`;

export const SearchBtnText = styled.Text`
  color: ${(props) => props.theme.colors.common.white};
  font-size: x-large;
  display: flex;
  justify-content: center;
`;

export const RecentCompaniesTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
`;

export const RecentCompaniesIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

export const RecentCompaniesTitle = styled.Text`
  font-size: large;
  font-weight: 600;
  margin-left: 16px;
`;

export const SearchBtnIcon = styled.Image`
  width: 24px;
  height: 32px;
`;
