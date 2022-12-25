import styled from 'styled-components';

export const FilterInput = styled.input`
  text-align: center;
  width: 325px;
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

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterText = styled.p`
  color: white;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 20px;
`;
