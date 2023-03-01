import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const HeaderTemplate = () => {
    return (
        <Header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </Header>
    )
};

export default HeaderTemplate;

