const { default: styled } = require('styled-components');

const Header = styled.header`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  margin-bottom: 1.5rem;

  @media (min-width: 576px) {
    margin-bottom: 1.75rem;
  }

  @media (min-width: 992px) {
    margin-bottom: 2rem;
  }
`;

export default Header;
