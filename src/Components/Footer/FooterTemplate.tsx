import styled from 'styled-components';

export const Footer = styled.div`
  padding: 30px;
  background-color: rgb(165, 144, 185);
`;

const FooterTemplate = () => {
    return (
        <Footer>
            <a href="/">Life like a game!</a>  
        </Footer>
    )
};

export default FooterTemplate;