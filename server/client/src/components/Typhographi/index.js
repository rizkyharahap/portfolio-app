import styled from 'styled-components';

const TextHeading = styled.h2`
  width: fit-content;
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  line-height: 0.85;

  span {
    color: transparent;
    -webkit-text-stroke: white 2px;
  }

  &::after {
    content: '';
    display: flex;
    width: 51%;
    border-bottom: 4px double white;
  }

  @media (min-width: 576px) {
    font-size: 3.5rem;
  }

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 992px) {
    font-size: 6rem;
  }
`;

const Title = styled.h2`
  width: fit-content;
  margin: 0rem;
  font-size: 1.5rem;
  font-weight: 700;

  @media (min-width: 576px) {
    font-size: 2rem;
  }
`;

const Text = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;

  @media (min-width: 576px) {
    font-size: 1.25rem;
  }
`;

const Subtitle = styled.p`
  color: #9b9b9b;
`;

export { TextHeading, Title, Text, Subtitle };
