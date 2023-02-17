import { useAuth } from '../../hooks/useAuth';
import { NavBar } from '../NavBar/NavBar';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthMenu } from '../AuthMenu/AuthMenu.jsx';
import { HeaderNav, HeaderWrapper } from './Header.styled';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderWrapper>
      <HeaderNav>
        <NavBar />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </HeaderNav>
    </HeaderWrapper>
  );
};
