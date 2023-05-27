import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  padding: 0 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  color: #000000;
  margin-left: 10px;
  padding: 5px 20px;
  border: 1px solid #000000;
  border-radius: 3px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
  width: 100px;

  &:active {
    background-color: #1b8bcd;
    color: #ffffff;
    border: none;
  }
`;
