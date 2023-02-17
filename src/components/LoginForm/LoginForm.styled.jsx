import styled from 'styled-components';

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #000;
`;

export const LoginLabel = styled.label`
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

export const LoginInput = styled.input`
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

export const SignInWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 768px) {
    font-size: 24px;
    gap: 40px;
  }
`;

export const SignIn = styled.button`
  cursor: pointer;
  text-align: center;
  border-radius: 60px;
  padding: 4px 15px;
  font-size: 12px;
  font-family: 'Ubuntu';
  color: #000;
  border: none;
  outline: none;
  background-color: #fff;
  transition: all 0.5s ease-out;

  &:hover,
  &:focus {
    transform: scale(1.04);
    transition: all 0.5s ease-out;
    background-color: #49869ea7;
    color: #fff;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const SignInLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
