import styled from 'styled-components/native';
import CompanyRating from './CompanyRating';

interface RatingFeedback {
  feedback: 'success' | 'error';
}

export const CompanyRatingContainer = styled.View`
  display: flex;
  align-items: center;
  padding-right: 8px;
  flex-direction: row;
`;

export const HeadingRating = styled.Text<RatingFeedback>`
  color: ${(props) =>
    props.feedback === 'success'
      ? props.theme.colors.success.main
      : props.theme.colors.error.main};
  font-size: larger;
  font-weight: 600;
  margin-left: 16px;
`;

export const CompanyRatingIcons = styled.Image`
  width: 24px;
  height: 12px;
`;
