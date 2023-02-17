import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import banner from '../../images/heroBanner.jpg';

export const Section = styled.section`
min-width: 300px;
padding-top: 100px;
padding-bottom: 100px;
background-image: -webkit-gradient(linear, left top, right top, from(rgba(47, 48, 58, 0.4)), to(rgba(47, 48, 58, 0.4))),url("../images/hero-section/desktop-banner.jpg");
background-image: linear-gradient(to right, rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)), url(${banner});
background-repeat: no-repeat;
background-size: cover;
background-position: center;


   @media (min-width: 768px) {
padding-top: 200px;
padding-bottom: 200px;
min-width: 768px;
  }
     @media (min-width: 1024px) {
padding-top: 250px;
padding-bottom: 250px;
min-width: 1024px;
  }
       @media (min-width: 1280px) {
padding-top: 400px;
padding-bottom: 400px;
min-width: 1440px;
  }
`;


export const JoinButton = styled(NavLink)`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  padding: 5px 20px;
  border-radius: 60px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 500;
  background-color: #ffffff50;
  color: #fff;
  transition: all 0.5s ease-out;


  &:hover {
    transition: all 0.5s ease-out;
    background-color: #49869ea7;
  }

  @media (min-width: 768px) {
    font-size: 30px;
    padding: 10px 40px;
  }
`