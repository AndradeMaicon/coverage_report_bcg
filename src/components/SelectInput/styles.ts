import styled from "styled-components";

export const Label = styled.label`
  display: none;
`;

export const Select = styled.select`
  width: 100%;
  height: 4rem;

  background: var(--background);
  border-radius: 0.8rem;

  padding: 0 4rem;

  &:hover {
    background: var(--text-color-light);
  } 
  
  &:focus {
    border: 0.2rem solid var(--ninetyToHundred);
  }
`;

