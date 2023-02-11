import styled from 'styled-components';

export const FilterInput = styled.input`
  text-align: center;
  width: 90%;
  height: 20px;
  padding: 8px;
  font-size: 14px;
  outline: none;
  border: none;
  background-color: black;
  color: white;
  border-bottom: solid 2px;
  caret-color: transparent;

  @media (min-width: 768px) {
    font-size: 16px;
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

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterText = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 10px 0;
  color: white;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    margin: 0 0 15px 0;
  }
`;
