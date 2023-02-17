import { HeaderNavLink, NavList, NavItem, HeaderWrapper, HeaderNav, AuthList } from './Header.styled';


export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderNav>
        <NavList>
          <NavItem>
            <HeaderNavLink to="/">Home</HeaderNavLink>
          </NavItem>
          <NavItem>
            <HeaderNavLink to="contacts">Phonebook</HeaderNavLink>
          </NavItem>
        </NavList>
        <AuthList>
          <NavItem>
            <HeaderNavLink to="register">Register</HeaderNavLink>
          </NavItem>
          <NavItem>
            <HeaderNavLink to="login">Log In</HeaderNavLink>
          </NavItem>
        </AuthList>
      </HeaderNav>
    </HeaderWrapper>
  );
};
