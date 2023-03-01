import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

export const Header = styled.div`
  padding: 30px;
  background-color: antiquewhite;

  ul {
    list-style: none;
    display: flex;
    
    li {
      padding-right: 10px;
    }
  }
`;

export const Main = styled.div`
  padding: 30px;
  background-color: rgb(144, 182, 185);
`;

export const Footer = styled.div`
  padding: 30px;
  background-color: rgb(165, 144, 185);
`;