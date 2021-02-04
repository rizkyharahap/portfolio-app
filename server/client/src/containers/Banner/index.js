import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonLink } from '../../components/Button';
import { ContainerFluid } from '../../components/Container';

const Character = React.lazy(() => import('../../components/Avatar'));

const BannerContainer = styled.section`
  ${ContainerFluid}

  overflow:hidden;
  height: 120vh;
  position: relative;
`;

const ShortDesc = styled.div`
  position: relative;
  top: 10vh;
  z-index: 30;
  max-width: 300px;
  color: #9b9b9b;

  @media (min-width: 576px) {
    top: 20vh;
    max-width: 400px;
  }
`;

const TitleBanner = css`
  font-size: 6rem;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
  line-height: 0.8;
  display: inline-block;

  @media (min-width: 576px) {
    font-size: 6rem;
  }

  @media (min-width: 768px) {
    font-size: 7rem;
  }

  @media (min-width: 992px) {
    font-size: 8rem;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  width: 90%;
  top: 50%;
  display: flex;
  flex-direction: column;
  flex-flow: column;
  justify-content: center;

  &:nth-child(3) {
    z-index: 20;
  }

  h2 span {
    ${TitleBanner}
    color: white;
    display: block;

    &:nth-child(2) {
      color: white;
      float: right;
    }
  }

  &:nth-child(3) h2 span {
    ${TitleBanner}
    -webkit-text-stroke: 2px white;
    display: block;
    color: transparent;

    &:nth-child(2) {
      color: transparent;
      float: right;
    }
  }
`;

export default function Banner() {
  return (
    <BannerContainer id="Hero">
      <ShortDesc data-aos="zoom-in-right">
        <p>
          The perfection in applying the design to the website was very
          interesting to me. Focusing on user experience and performance on the
          website is a challenge
        </p>
        <ButtonLink type="button">Know Me</ButtonLink>
      </ShortDesc>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Character />
      </React.Suspense>

      <TitleContainer>
        <h2>
          <span data-aos="fade-right">Frontend</span>
          <span data-aos="fade-left">Web Design</span>
        </h2>
      </TitleContainer>
      <TitleContainer>
        <h2>
          <span data-aos="fade-right">Frontend</span>
          <span data-aos="fade-left">Web Design</span>
        </h2>
      </TitleContainer>
    </BannerContainer>
  );
}
