import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #eaecf0;
  padding: 0 12px;
  box-sizing: border-box;

  &::placeholder {
    color: #7e838f;
    font-size: 14px;
    font-family: IRANSansXFaNum;
  }
  &:focus {
    border-color: #7e838f !important;
  }
`;

export const RegisterText = styled.div({
  marginTop: "32px",
});
