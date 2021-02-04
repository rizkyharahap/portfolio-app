import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Scrollbar } from 'swiper';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Text, Subtitle } from '../Typhographi';
import PraSejahtera from '../../assets/images/pra-sejahtera.jpg';
import SMP3Watulimo from '../../assets/images/smp3watulimo.jpg';

SwiperCore.use([Scrollbar]);

const Content = styled.article`
  width: 100%;
  margin-bottom: 3rem;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.07);
`;

const Figure = styled.figure`
  width: 100%;
  height: 250px;
  overflow: hidden;
  margin: 0;
  position: relative;

  @media (min-width: 576px) {
    height: 300px;
  }

  @media (min-width: 768px) {
    height: 340px;
  }

  @media (min-width: 992px) {
    height: 380px;
  }
`;

const Image = styled.img.attrs(() => ({
  className: 'swiper-lazy',
}))`
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease, opacity 0.5s ease;

  &:hover {
    opacity: 0.7;
    transform: scale(1.2);
  }
`;

const data = [
  {
    link: 'https://pra-sejahtera.web.app/',
    image: PraSejahtera,
    name: 'Pra-Sejahtera',
    description:
      'Application for Submission, Reporting, Donation for Pre-Prosperous Families',
  },
  {
    link: 'https://smpn3watulimo.sch.id/',
    image: SMP3Watulimo,
    name: 'SMP 3 Watulimo',
    description:
      'Website for junior high school located in Watulimo Subdistrict, Trenggalek, East Java',
  },
];

export default function Carousel() {
  const params = {
    slidesPerView: 2,
    spaceBetween: 20,
    containerClass: '',
    grabCursor: true,
    lazy: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      hide: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
        scrollbar: {
          hide: false,
        },
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
        scrollbar: {
          hide: false,
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative' }}>
      <Swiper {...params}>
        {data.map((res) => {
          return (
            <Content key={res.link}>
              <a href={res.link} target="blank">
                <Figure>
                  <Image alt={res.name} src={res.image} />
                  <div className="swiper-lazy-preloader" />
                </Figure>
              </a>
              <Text>{res.name}</Text>
              <Subtitle>{res.description}</Subtitle>
            </Content>
          );
        })}
      </Swiper>
    </div>
  );
}
