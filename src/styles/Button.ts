import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 48px;
  background: linear-gradient(to left, #1043a6 0%, #0c317c 100%);
  color: #f9f5ff;
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
