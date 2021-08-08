import styled from 'styled-components/native';

interface RatingFeedback {
  feedback: 'success' | 'error';
}

export const CompanyRatingContainer = styled.View`
  display: flex;
  align-items: center;
  padding-right: 8px;
`;

export const HeadingRating = styled.Text<RatingFeedback>`
  color: ${(props) =>
    props.feedback === 'success'
      ? props.theme.colors.success.main
      : props.theme.colors.error.main};
`;
