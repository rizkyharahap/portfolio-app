import styled, { css } from 'styled-components';

const Container = styled.section`
  position: relative;
  padding: 15vh 1rem;
  margin: auto;
  max-width: 1140px;

  @media (min-width: 576px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    padding-left: 14rem;
    padding-right: 14rem;
  }
`;

const ContainerFluid = css`
  width: 90%;
  max-width: 1450px;
  padding: 0 5%;
  margin: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export { Container, ContainerFluid };
