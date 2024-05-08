import styled from "styled-components";

export const LocationContainer = styled.div`
  width: 90%;
  height: 179px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f7f9;
  border: 1px solid #fff;
  border-radius: 16px;
  padding: 16px;
  box-sizing: border-box;
  margin: 32px 0;
  transition: all 0.75s ease-in;

  &.show {
    opacity: 1;
    transform: translateY(-10%);
  }
`;

export const InformationContainer = styled.div({
  display: "flex",
  height: "100%",
  flexFlow: "column wrap",
  gap: "12px 32px",
  direction: "ltr",
  alignItems: "flex-start",
});

export const content = styled.span({});
