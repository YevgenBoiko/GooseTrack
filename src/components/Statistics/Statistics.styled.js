import styled from 'styled-components';

    const size = {
      tablet: '768px',
      desktop: '1440px',
    };

    export const device = {
      tablet: `(min-width: ${size.tablet})`,
      desktop: `(min-width: ${size.desktop})`,
    };


export const StatisticsContainer = styled.div`
  margin: 0 auto;
  max-width: 100%;
  height: 100%;
  position: relative;
  border-radius: 16px;
  background-color: var(--main-background-color);
`;

export const ButtonWrapper = styled('button')`
  width: 121px;
  height: 30px;
  color: var(--btn-text-color);
  background: var(--accent);
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;

  @media ${device.tablet} {
    width: 134px;
    height: 34px;
    margin-right: 8px;
    font-size: 16px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.tablet} {
    justify-content: flex-start;
  }
`;

export const OptionsContainer = styled.div`

  padding-top: 28px;
  padding-right: 14px;
  padding-left: 14px;
  @media ${device.tablet} {
    padding-top: 132px;
    padding-right: 64px;
    padding-left: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media ${device.desktop} {
    padding-top: 134px;
    padding-right: 154px;
    padding-left: 153px;
  }
`;


export const IconSvg = styled.svg`
  width: 8px;
  height: 8px;
  margin-right: 8px;
`;

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  @media ${device.tablet} {
    margin-top: 0px;
  }
`;

export const Item = styled.li`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: var(--calendar-date-color);
  text-align: left;
  &:not(:last-child) {
    margin-right: 15px;
  }
  @media ${device.tablet} {
    font-size: 16px;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const ChartWrapper = styled.div`
  padding-right: 14px;
  padding-left: 14px;
  margin-top: 40px;
  padding-bottom: 135px;
  width: 100%;
  height: auto;
  @media ${device.tablet} {
    padding-bottom: 224px;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media ${device.desktop} {
    padding-bottom: 104px;
    padding-right: 114px;
    padding-left: 113px;
  }
`;

export const Container = styled.div`
  border: 0.8px solid var(--border-statistics);
  border-radius: 16px;
  padding-right: 14px;
  padding-left: 14px;
  padding-bottom: 40px;
  @media ${device.tablet} {
    padding-bottom: 32px;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media ${device.desktop} {
    padding-bottom: 40px;
    padding-right: 40px;
    padding-left: 40px;
  }
`;

export const BtnPrevContainer = styled.button`
  border-radius: 8px 0 0 8px;
  border: 1px solid var(--btn-border-color);
  feel: white;
  overflow: hidden;
  cursor: pointer;
  padding: 8px, 12px, 8px, 12px;
  background-color: var(--main-background-color);

  width: 36px;
  height: 30px;
  margin: 0;
  @media ${device.tablet} {
    width: 38px;
    height: 34px;
  }
`;

export const Text = styled.p`
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  color: var(--calendar-date-color) ;
  padding-left: 14px;
  padding-top: 40px;
  margin-bottom: 20px;
  @media ${device.tablet} {
    padding-top: 32px;
    padding-left: 32px;
  }

  @media ${device.desktop} {
    padding-top: 40px;
    padding-left: 40px;
  }
`;

export const BtnNextContainer = styled.button`
  border-radius: 0 8px 8px 0;
  border: 1px solid var(--btn-border-color);
  overflow: hidden;
  cursor: pointer;
  padding: 8px, 12px, 8px, 12px;
  background-color: var(--main-background-color);
  width: 36px;
  height: 30px;
  margin: 0;
  @media ${device.tablet} {
    width: 38px;
    height: 34px;
  }
`;

export const BtnPrevNextContainer = styled.div`
  display: flex;
`;

