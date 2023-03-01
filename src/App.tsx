import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

const Header = styled.div`
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

const Main = styled.div`
  padding: 30px;
  background-color: rgb(144, 182, 185);
`;

const Footer = styled.div`
  padding: 30px;
  background-color: rgb(165, 144, 185);
`;

function App() {
  return (
    <Wrapper>
      <Header>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </Header>
      <Main>
        Content
      </Main>
      <Footer>
        <a href="/">Life like a game!</a>  
      </Footer>
    </Wrapper>
  );
}

export default App;
