import styled from 'styled-components';

const ButtonLink = styled.button`
  padding: 0;
  font-size: 1.15em;
  text-decoration: underline;
  border: none;
  color: white;
  background-color: transparent;

  -webkit-box-reflect: below -40% -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(transparent),
      color-stop(0.5, transparent),
      to(white)
    );

  &:hover {
    opacity: 0.7;
  }
`;

export { ButtonLink };
