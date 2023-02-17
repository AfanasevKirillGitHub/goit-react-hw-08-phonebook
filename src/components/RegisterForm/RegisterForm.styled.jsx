import styled from 'styled-components';

export const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #000;
`;

export const RegisterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  font-size: 18px;
  font-family: 'Ubuntu';
  font-weight: 800;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const RegisterInput = styled.input`
  text-align: center;
  width: 250px;
  height: 20px;
  padding: 8px;
  font-size: 14px;
  outline: none;
  border: none;
  background-color: black;
  color: white;
  border-bottom: solid 2px;
  caret-color: transparent;
  ::placeholder {
    color: #ffffff9d;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    width: 450px;
    height: 25px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }

  &:focus {
    transform: scale(1.02);
    transition: all 0.5s ease-out;
    background-color: #49869ea7;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
