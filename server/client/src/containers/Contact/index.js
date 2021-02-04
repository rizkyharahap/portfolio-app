import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonLink } from '../../components/Button';
import { Container } from '../../components/Container';
import { Subtitle, TextHeading } from '../../components/Typhographi';

import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as GmailIcon } from '../../assets/icons/gmail.svg';

const SocialMedia = styled.span`
  margin-bottom: 0.5rem;
  display: flex;

  -webkit-box-reflect: below -30% -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      color-stop(0.5, transparent),
      to(white)
    );

  span {
    width: 30px;
    margin-right: 15px;

    &:hover {
      svg {
        opacity: 0.8;
      }
    }
  }
`;
export default function Contact() {
  return (
    <Container id="Contact" data-aos="zoom-in-up">
      <TextHeading style={{ marginBottom: '4rem' }}>
        <span>Contact</span>
      </TextHeading>
      <a
        href="mailto:rizkyhh1999@gmail.com"
        target="blank"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <SocialMedia>
          <span>
            <GmailIcon fill="#FFF" />
          </span>
        </SocialMedia>
        <Subtitle>rizkyhh1999@gmail.com</Subtitle>
      </a>

      <a
        href="https://www.instagram.com/rizky_haphap/?hl=id"
        target="blank"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <SocialMedia>
          <span>
            <InstagramIcon fill="#FFF" />
          </span>
        </SocialMedia>
        <Subtitle>@rizky_haphap</Subtitle>
      </a>

      <a
        href="https://www.linkedin.com/in/rizki-harahap/"
        target="blank"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <SocialMedia>
          <span>
            <LinkedInIcon fill="#FFF" />
          </span>
        </SocialMedia>
        <Subtitle>Rizki Harahap</Subtitle>
      </a>

      <a
        href="https://github.com/rizkyharahap"
        target="blank"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <SocialMedia>
          <span>
            <GithubIcon fill="#FFF" />
          </span>
        </SocialMedia>
        <Subtitle>rizkyharahap</Subtitle>
      </a>
    </Container>
  );
}
