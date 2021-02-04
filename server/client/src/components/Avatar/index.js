import React from 'react';
import styled from 'styled-components';
import BlinkCharacter from '../../assets/images/avatar-happy.webm';

const Character = styled.video`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  height: 70vh;
  z-index: 10;

  @media (min-width: 768px) {
    height: 80vh;
    top: 25%;
  }

  @media (min-width: 992px) {
    height: 90vh;
  }
`;

export default function Avatar({ source, name }) {
  return (
    <Character loop autoPlay muted >
      <source src={BlinkCharacter} type="video/webm" />
      <span>OH NO - you don't support html5 video!</span>
    </Character>
  );
}
