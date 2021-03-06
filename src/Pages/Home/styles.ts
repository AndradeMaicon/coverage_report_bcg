import styled from "styled-components";

interface IPercentageProps {
  color: string;
}

export const Container = styled.div`
  grid-area: MN;

  position: relative;

  display: flex;

  margin: 0 auto;

  width: min(128rem , 100%);

  .home-content {
    display: flex;
    flex-direction: column;
    
    justify-content: center;
  }

  .home-map {
    display: flex;

    width: 100%;

    align-items: center;
    justify-content: flex-end;

    > svg {
      width: 50rem;
      height: 50rem;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 6.2rem;

  color: var(--primary);

  > span {
    color: var(--eightyToNinety);
  }
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 1.2rem;

  color: var(--primary);

  margin-top: 1rem;
`;

export const ReportBox = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-row-gap: 2.3rem;

  padding: 3.1rem 4.4rem;
  margin-top: 2rem;

  width: 60rem;
  max-height: 47.3rem;

  border-radius: 0.8rem;

  background: var(--text-color-light);

  box-shadow: 9px 11px 23px rgba(0, 0, 0, 0.1);

  .report-item {
    display: flex;
  }

  .state-name {
    font-weight: 900;
    font-size: 1rem;

    color: var(--primary);
  }
`;

export const Percentage = styled.span<IPercentageProps>`
  font-weight: 900;
  font-size: 1rem;

  color: ${({ color }) => color};

  margin-left: 0.3rem;
`;