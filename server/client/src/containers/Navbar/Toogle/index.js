import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HumbergerIcon } from '../../../assets/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icons/cancel.svg';

const ToogleButton = styled.button`
  border: none;
  position: fixed;
  top: 20px;
  right: 5%;
  color: white;
  background-color: transparent;
  z-index: 70;

  span {
    font-size: 2em;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Toogle = ({ onClick, isOpen }) => {
  return (
    <ToogleButton onClick={onClick}>
      {isOpen ? (
        <CloseIcon fill="#FFF" width={25} height={25} />
      ) : (
        <HumbergerIcon fill="#FFF" width={25} height={25} />
      )}
    </ToogleButton>
  );
};
