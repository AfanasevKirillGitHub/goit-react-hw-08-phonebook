
import { Header } from './Header/Header';
import { Wrapper } from './Layout.styled';

export const Layout = ({ children }) => {

  return (<>
    <Header />
    <Wrapper>{children}</Wrapper>
  </>)

};
