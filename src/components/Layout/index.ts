import styled from 'styled-components';

// grid-area HD => header
// grid-area MN => main

export const Layout = styled.div`
  display: grid;

  width: 100vw;
  height: 100vh;

  grid-template-rows: 10rem auto;

  grid-template-areas: "HD" "MN";
`;
