import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 48px;
  background: linear-gradient(to left, #1043A6 0%, #0C317C 100%);
  color: #F9F5FF;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  font-family: inherit;
  margin-top: 24px;
  border: 1px solid #fff;
  cursor: pointer;

  &:disabled {
    background: gray;
    
    
  }
`;