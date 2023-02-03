import styled from 'styled-components';
import imgFrame from '../../images/Frame.png';
import iphone from '../../images/iphone2x.png';

export const ContactFormWrapper = styled.div`
  /* background-image: url(${imgFrame}); */
  background-image: url(${iphone});
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
  height: 610px;
  max-width: 500px;
  position: relative;
`;

export const Form = styled.form`
  position: absolute;
  left: 19%;
  top: 15%;
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
  width: 200px;
  height: 20px;
  padding: 8px;
  font-size: 18px;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  border-bottom: solid 2px;

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
  margin-top: 125px;
  width: 80px;
  height: 80px;
  text-align: center;
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition: all 1s ease-out;

  &:hover {
    transform: rotate(1turn) scale(1.2);
    background-color: #49869ea7;
  }
`;

export const Text = styled.p`
  margin: 0 0 7px 0;
  color: white;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 20px;
`;
