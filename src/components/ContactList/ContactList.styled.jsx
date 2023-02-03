import styled from 'styled-components';

export const List = styled.ul`
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
  color: white;
  font-size: 16px;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  height: 30px;
  list-style: none;
  color: white;
  font-size: 20px;
`;

export const Text = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  border: none;
  outline: none;
  color: #d34c3a;
  background-color: #db4733c0;
  transition: all 0.5s ease-out;

  &:hover {
    transform: scale(1.05);
    background-color: #d34c3a;
    color: black;
    width: 60px;
  }
`;
