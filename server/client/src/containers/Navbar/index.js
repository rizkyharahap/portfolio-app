import React from 'react';
import styled from 'styled-components';
import { ContainerFluid } from '../../components/Container';
import { Navigation } from './Navigation';
import { Toogle } from './Toogle';

const Header = styled.header`
  ${ContainerFluid}

  top: 0;
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  z-index: 40;

  @media (min-width: 768px) {
    top: 40px;
    flex-flow: row;
    align-items: center;
  }
`;

const Logo = styled.h1`
  margin-block-start: 10px;
  margin-block-end: 10px;

  -webkit-box-reflect: below -22px -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      color-stop(0.5, transparent),
      to(white)
    );
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toogleDrawer = () => {
    setIsOpen((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <Header
        style={
          isOpen
            ? {
                height: '100vh',
                backgroundColor: 'black',
              }
            : {
                height: 'auto',
                backgroundColor: 'transparent',
              }
        }
      >
        <Logo>Happinest</Logo>
        <Navigation isOpen={isOpen} />
      </Header>
      <Toogle onClick={toogleDrawer} isOpen={isOpen} />
    </>
  );
}
