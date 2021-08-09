import styled from 'styled-components/native';

interface HighOrLowDisplayProps {
  changePercent: number;
}

export const HighOrLowContainer = styled.View`
  margin-left: 8px;
`;

export const ChangesInfos = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const ChangesHeading3 = styled.Text`
  margin: 0;
  font-size: x-large;
  padding-left: 8px;
  font-weight: 600;
`;

export const HighOrLowDisplay = styled.Text<HighOrLowDisplayProps>`
  color: ${(props) =>
    props.changePercent > 0
      ? props.theme.colors.success.main
      : props.theme.colors.error.main};
  margin: 0;
  font-size: large;
  padding-left: 8px;
  font-weight: 600;
`;
