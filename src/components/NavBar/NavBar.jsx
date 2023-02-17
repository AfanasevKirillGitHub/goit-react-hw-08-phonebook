import {
  NavList,
  HeaderNavLink,
  NavItem,
} from 'components/Header/Header.styled';
import { useAuth } from 'hooks/useAuth';

export const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavList>
      <NavItem>
        <HeaderNavLink to="/">Home</HeaderNavLink>
      </NavItem>
      {isLoggedIn && (
        <NavItem>
          <HeaderNavLink to="/contacts">Phonebook</HeaderNavLink>
        </NavItem>
      )}
    </NavList>
  );
};
