import styled from "styled-components";

export const Container = styled.div`
  grid-area: MN;

  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;

  .page-header {
    margin-top: 4rem;

    display: flex;
    align-items: center;
  }

  .go-back {
    display: flex;

    align-items: center;
    justify-content: center;

    margin-right: 5rem;

    cursor: pointer;

    width: 3rem;
    height: 3rem;

    border-radius: 50%;

    background: var(--eightyToNinety);

    transition: background 0.3s;

    &:hover {
      background: var(--sixtyToSeventy);
    }

    > svg {
      color: var(--text-color-light);
    }
  }

  #state-name {
    font-size: 3rem;
    color: var(--primary);
  }

  #year-selected {
    color: var(--eightyToNinety);
  }

  #map-container{
    width: 100%;  

    display: flex;
    flex: 1;

    align-items: center;
    justify-content: center;

    > svg {
      width: 60rem;
      height: 60rem;
    }
  }
`;