import styled from 'styled-components';

export const Week = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 14px;
  border: 1px solid var(--calendar-border-color);
  border-radius: 8px;
  padding: 16px;
  background-color: var(--calendar-bg-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
    padding: 14px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 15px;
  }
`;

export const Day = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.12;
  text-transform: uppercase;
  color: var(--input-text-color);

  ${({ isWeekend }) => {
    if (isWeekend) {
      return `
        color: var(--button-bgd-color)
      `;
    }
  }};
`;
