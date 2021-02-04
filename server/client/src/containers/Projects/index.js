import React from 'react';
import Carousel from '../../components/Carousel';
import { Container } from '../../components/Container';
import { TextHeading } from '../../components/Typhographi';

export default function Project() {
  return (
    <Container
      style={{ overflow: 'hidden' }}
      id="Projects"
      data-aos="zoom-in-up"
    >
      <TextHeading style={{ marginBottom: '4rem' }}>
        <span>What I</span> make
      </TextHeading>
      <Carousel />
    </Container>
  );
}
