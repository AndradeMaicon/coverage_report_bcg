import styled from "styled-components";

export const Container = styled.header`
  grid-area: HD;

  display: flex;
  width: 100%;

  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 2;

  .search-box {
    display: flex;

    align-items: center;
    justify-content: space-between;

    padding: 2rem 6.2rem;

    height: 10rem;
    width: 118rem;

    background-image: linear-gradient(
      160deg,
      var(--seventyToEighty) 15%,
      var(--eightyToNinety) 50%,
      var(--ninetyToHundred) 100%
    );

    border-radius: 0 0 2.5rem 2.5rem;

    span {
      width: 30rem;
      font-size: 1.6rem;
      font-weight: 700;

      color: var(--text-color-light);

      margin-right: 2rem;
    }
  }

  .search-inputs {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 14rem 5rem;
    grid-column-gap: 2rem;
  }

  #form-submit-button {
    display: flex;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    height: 4rem;
    width: 4rem;

    border-radius: 0.8rem;
    background: var(--background);

    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.1);

    &:hover {
      background: var(--text-color-light);

      > svg {
        color: var(--ninetyToHundred);
      }
    }

  }
`;