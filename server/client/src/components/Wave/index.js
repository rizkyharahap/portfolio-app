import styled, { css } from 'styled-components';
import wavePatern from '../../assets/images/wave.svg';

export const WaveBottom = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
  background-image: url(${wavePatern});
`;
