import React from 'react';
import styled from 'styled-components';

import { ReactComponent as InstagramIcon } from '../../../assets/icons/instagram.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/icons/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../../assets/icons/github.svg';
import { ReactComponent as GmailIcon } from '../../../assets/icons/gmail.svg';

const NavigationLink = styled.nav`
  list-style: none;
  display: none;

  li {
    -webkit-box-reflect: below -42% -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(transparent),
        color-stop(0.5, transparent),
        to(white)
      );

    a {
      font-size: 2.5em;
      font-weight: 900;
      margin-top: 8px;

      color: transparent;
      -webkit-text-stroke: white 1px;

      &:hover {
        opacity: 0.7;
        color: white;
        -webkit-text-stroke: 0px;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-flow: row;

    li {
      margin: 0 10px;

      a {
        color: white;
        -webkit-text-stroke: 0px;
        font-size: 1em;
        font-weight: 400;
      }
    }
  }
`;

const SocialMedia = styled.div`
  margin-bottom: 100px;

  display: none;
  -webkit-box-reflect: below -30% -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      color-stop(0.5, transparent),
      to(white)
    );

  a {
    width: 50px;
    margin-right: 15px;

    &:hover {
      svg {
        opacity: 0.8;
      }
    }
  }
`;
export const Navigation = ({ isOpen }) => {
  return (
    <>
      <NavigationLink
        style={isOpen ? { display: 'flex', flexFlow: 'column' } : null}
      >
        <li data-aos="zoom-in-up">
          <a href="#About">About</a>
        </li>
        <li data-aos="zoom-in-up">
          <a href="#Projects">Projects</a>
        </li>
        <li data-aos="zoom-in-up">
          <a href="#Contact">Contact</a>
        </li>
      </NavigationLink>

      <SocialMedia style={isOpen ? { display: 'flex' } : null}>
        <a href="https://www.instagram.com/rizky_haphap/?hl=id" target="blank">
          <InstagramIcon fill="#FFF" />
        </a>
        <a href="https://www.linkedin.com/in/rizki-harahap/" target="blank">
          <LinkedInIcon fill="#FFF" />
        </a>
        <a href="https://github.com/rizkyharahap" target="blank">
          <GithubIcon fill="#FFF" />
        </a>
        <a href="mailto:happywithhap@gmail.com" target="blank">
          <GmailIcon fill="#FFF" />
        </a>
      </SocialMedia>
    </>
  );
};
