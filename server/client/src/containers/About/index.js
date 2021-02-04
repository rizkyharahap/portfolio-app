import React from 'react';
import { Container } from '../../components/Container';
import { Subtitle, TextHeading } from '../../components/Typhographi';
import AvatarSmile from '../../assets/images/avatar-smile.JPG';
import styled from 'styled-components';
import { ButtonLink } from '../../components/Button';

const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.3;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${AvatarSmile});
  z-index: -1;

  @media (min-width: 768px) {
    position: relative;
    left: 10%;
    min-width: 400px;
    opacity: 1;
  }
`;

export default function About() {
  return (
    <Container style={{ display: 'flex' }} id="About">
      <article style={{ marginTop: '10vh' }}>
        <TextHeading data-aos="fade-left">
          Get <span>coffee</span> and talk about the <span>future</span>
        </TextHeading>
        <Subtitle data-aos="fade-right">
          <p>
            I'm a Web Developer and UX Designer. Javascript makes web
            development fast and performs well, of course I use that along with
            React
          </p>
          <span style={{ fontSize: '1.1rem' }}>Talk with coffee?</span>
        </Subtitle>
        <ButtonLink data-aos="fade-right" style={{ fontSize: '1.7rem' }}>
          Contact Me
        </ButtonLink>
      </article>
      <ImageBackground></ImageBackground>
    </Container>
  );
}
