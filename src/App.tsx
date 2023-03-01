import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NoPageTemplate from './NoPage/NoPage';
import ProfileTemplate from './Profile/ProfileTemplate';
import SettingsTemplate from './Settings/SettingsTemplate';
import { Footer, Header, Main, Wrapper } from './StyledApp';

const App = () => {
  return (
    <Wrapper>
      <Header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </Header>
      <Main>
        <Routes>
          <Route path="/profile" element={<ProfileTemplate />} />
          <Route path="/settings" element={<SettingsTemplate />} />
          <Route path="*" element={<NoPageTemplate />} />
        </Routes>
      </Main>
      <Footer>
        <a href="/">Life like a game!</a>  
      </Footer>
    </Wrapper>
  );
};

export default App;
