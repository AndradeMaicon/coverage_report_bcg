import styled from "styled-components";

export const Label = styled.label`
  display: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 4rem;

  background: var(--background);
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.1);
  
  border-radius: 0.8rem;

  padding: 0 4rem;

  &:hover {
    background: var(--text-color-light);
  } 
  
  &:focus {
    border: 0.2rem solid var(--ninetyToHundred);
  }
`;