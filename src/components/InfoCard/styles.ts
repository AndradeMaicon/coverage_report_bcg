import styled from "styled-components"

interface IContainerProps {
  position: {
    x: number,
    y: number,
  }
}

interface IDataProps {
  color: string
}

export const StyleContainer = styled.div`
  .infoBox {
    position: absolute;
  
    display: flex;
    flex-direction: column;
  
    align-items: center;
  
    width: 15rem;
    height: 7rem;
  
    border-radius: 0.8rem;
  
    padding: 1.2rem;
  
    background: var(--text-color-light);
    box-shadow: 9px 11px 23px rgba(0, 0, 0, 0.1);
  
    z-index: 100;
  }

  .infoCard-content {
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;
  }
`;

export const InfoBoxArrow = styled.div`
  position: relative;

  &::before {
      content: '';
      position: absolute;
      width: 1.6rem;
      height: 1.6rem;
      background: var(--text-color-light);;

      top: -0.1rem;
      left: -0.8rem;
      border-radius: 0 0 0.4rem 0;

      transform: rotate(45deg);
    }
`;

export const Title = styled.p`
  font-size: 1.1rem;
  font-weight: 900;

  color: var(--text-color);
`;

export const Data = styled.span<IDataProps>`
  font-size: 3rem;
  font-weight: 900;

  color: ${({color}) => color};
`;