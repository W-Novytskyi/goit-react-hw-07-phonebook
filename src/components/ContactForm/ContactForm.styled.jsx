import styled from '@emotion/styled';

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  max-height: 500px;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 3px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 0 20px;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  margin-bottom: 12px;
  margin-top: 5px;
`;

export const Label = styled.label`
  padding: 5px;
  font-size: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  color: #000000;
  padding: 5px 20px;
  margin-left: 25px;
  border: 1px solid #000000;
  border-radius: 3px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
  width: 130px;

  &:active {
    background-color: #1b8bcd;
    color: #ffffff;
    border: none;
  }
`;
