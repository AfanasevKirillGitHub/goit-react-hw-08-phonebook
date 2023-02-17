import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
position: fixed;
z-index: 999;
  display: flex;
  height: 40px;
  width: 100%;
  background-color: transparent;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;


  @media (min-width: 768px) {
   height: 60px;
  }
   @media (min-width: 1024px) {
   height: 80px;
  }
`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 160px;
  }
    @media (min-width: 1024px) {
    gap: 360px;
  }
     @media (min-width: 1280px) {
    gap: 760px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) {
    gap: 30px;
  }
`;


export const AuthList = styled.ul`
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) {
    gap: 30px;
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderNavLink = styled(NavLink)`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 2px 15px;
  border-radius: 60px;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  color: #fff;
  background-color: transparent;
    transition: all 0.5s ease-out;
  &.active {
    color: #ffffff;
    background-color: #49869ea7;
     transition: all 0.5s ease-out;
  }

  &:hover:not(.active),
  &:focus:not(.active) {
    transform: scale(1.1);
     transition: all 0.5s ease-out;
      background-color: #49869ea7;
  }


  @media (min-width: 768px) {
    flex-direction: column;
    font-size: 24px;
    padding: 4px 18px;
  }
`;
