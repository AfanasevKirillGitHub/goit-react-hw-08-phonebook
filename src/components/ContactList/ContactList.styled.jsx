import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  color: white;
  font-size: 24px;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  height: 35px;
  gap: 8px;
  list-style: none;
  color: white;
  font-size: 24px;
`;

export const Text = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  width: 60px;
  border: none;
  outline: none;
  color: #d34c3a;
  background-color: #d34c3a;
  transition: all 0.5s ease-out;

  &:hover {
    transform: scale(1.1);
    background-color: #db4733;
    color: black;
    width: 100px;
  }
`;
