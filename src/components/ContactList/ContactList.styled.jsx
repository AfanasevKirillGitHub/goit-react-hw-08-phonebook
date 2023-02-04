import styled from 'styled-components';

export const ContactListWrapper = styled.div`
  padding-bottom: 25px;

  @media (min-width: 768px) {
    width: 320px;
  }

  @media (min-width: 1024px) {
    width: 450px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  color: white;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
  color: white;

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  padding: 0;
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
