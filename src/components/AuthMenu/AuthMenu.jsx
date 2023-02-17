import {
  NavList,
  HeaderNavLink,
  NavItem,
} from 'components/Header/Header.styled';

export const AuthMenu = () => {
  return (
    <NavList>
      <NavItem>
        <HeaderNavLink to="register">Registration</HeaderNavLink>
      </NavItem>
      <NavItem>
        <HeaderNavLink to="login">Log In</HeaderNavLink>
      </NavItem>
    </NavList>
  );
};
