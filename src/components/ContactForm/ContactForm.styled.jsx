import styled from 'styled-components';
import iphone from '../../images/iphone2x.png';

export const ContactFormWrapper = styled.div`
  background-image: url(${iphone});
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
  height: 365px;
  width: 300px;
  position: relative;

  @media (min-width: 768px) {
    width: 400px;
    height: 510px;
  }
  @media (min-width: 1024px) {
    width: 500px;
    height: 610px;
  }
`;

export const Form = styled.form`
  position: absolute;
  left: 20%;
  top: 12%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    top: 14%;
    gap: 20px;
  }
  @media (min-width: 1024px) {
    top: 15%;
    gap: 25px;
  }
`;

export const Input = styled.input`
  width: 120px;
  height: 20px;
  padding: 4px;
  font-size: 14px;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  border-bottom: solid 2px;
  caret-color: transparent;

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 6px;
    width: 155px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    padding: 8px;
    width: 200px;
  }

  &:focus {
    transform: scale(1.05);
    transition: all 0.5s ease-out;
    background-color: #49869ea7;
  }
`;

export const AddContact = styled.button`
  cursor: pointer;
  background-color: #49869e60;
  display: inline-block;
  margin-top: 65px;
  width: 50px;
  height: 50px;
  text-align: center;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 8px;
  font-weight: bold;
  transition: all 1s ease-out;

  @media (min-width: 768px) {
    margin-top: 90px;
    width: 70px;
    height: 70px;
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    margin-top: 125px;
    width: 80px;
    height: 80px;
    font-size: 16px;
  }

  &:hover {
    transform: rotate(1turn) scale(1.2);
    background-color: #49869ea7;
  }
`;

export const Text = styled.p`
  cursor: default;
  margin: 0 0 7px 0;
  color: white;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;
