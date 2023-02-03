import styled from 'styled-components';

export const FilterInput = styled.input`
  text-align: center;
  width: 100%;
  height: 25px;
  padding: 8px;
  font-size: 18px;
  outline: none;
  border: none;
  background-color: black;
  color: white;
  border-bottom: solid 2px;

  &:focus {
    transform: scale(1.02);
    transition: all 0.5s ease-out;
    background-color: #49869ea7;
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
  margin: 0 0 15px 0;
  color: white;
  font-size: 20px;
`;
