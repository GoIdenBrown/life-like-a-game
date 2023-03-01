import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import FooterTemplate from './Components/Footer/FooterTemplate';
import HeaderTemplate from './Components/Header/HeaderTemplate';
import NoPageTemplate from './Components/NoPage/NoPage';
import ProfileTemplate from './Components/Profile/ProfileTemplate';
import SettingsTemplate from './Components/Settings/SettingsTemplate';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

export const Main = styled.div`
  padding: 30px;
  background-color: rgb(144, 182, 185);
`;

const App = () => {
  return (
    <Wrapper>
      <HeaderTemplate />
      <Main>
        <Routes>
          <Route path="/" element={<ProfileTemplate />} />
          <Route path="/profile" element={<ProfileTemplate />} />
          <Route path="/settings" element={<SettingsTemplate />} />
          <Route path="*" element={<NoPageTemplate />} />
        </Routes>
      </Main>
      <FooterTemplate />
    </Wrapper>
  );
};

export default App;
