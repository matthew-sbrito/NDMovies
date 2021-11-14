import styled from 'styled-components';

export const Container = styled.footer`
  grid-area: Footer;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.secondaryColor};
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  height: 60px;
  span{
    margin: 5px;
  }
`;
