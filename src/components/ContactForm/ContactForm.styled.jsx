import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 24px;
  background: #292929;
  border-radius: 30px;
  text-align: center;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  font-size: 24px;
  color: white;
  background-color: #49869e92;
  outline: none;
  border: none;

  &:focus {
    transform: scale(1.1);
    transition: all 0.5s ease-out;
    background-color: #49869e1f;
  }
`;

export const AddContact = styled.button`
  cursor: pointer;
  background-color: #49869e1f;
  display: inline-block;
  margin-top: 24px;
  width: 80px;
  height: 80px;
  text-align: center;
  border-radius: 50%;
  border-color: white;
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition: all 1s ease-out;

  &:hover {
    transform: rotate(1turn) scale(1.2);
    background-color: #49869e92;
  }
`;

export const Text = styled.p`
  color: white;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 20px;
`;
