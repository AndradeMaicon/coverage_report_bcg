import styled from "styled-components";

export const Container = styled.footer`
  grid-area: MN;

  position: fixed;
  bottom: 0;

  width: 100%;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
  }

  .footer-text {
    color: var(--primary);
    font-size: 1rem
  }

  .footer-link{
    margin-left: 1rem;

    > svg {
      color: var(--primary);
    }
  }
`;
