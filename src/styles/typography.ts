import styled from "styled-components";

export const Title = styled.div<{ $color: string }>({
  fontSize: "20px",
  lineHeight: "34px",
  fontWeight: 500,
});

export const Subtitle = styled.div<{ color?: string; fontWeight?: number }>`
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.color || "#000"};
  font-weight: ${(props) => props.fontWeight || 500};
  text-align-last: center;
  text-align: justify;
`;

export const Caption = styled.div({
  fontSize: "14px",
  lineHeight: "21px",
  color: "#7E838F",
});

export const LinkedText = styled.a`
  text-decoration: underline;
  color: #1043a6;
  transition: color 0.2s ease-in-out;
  margin-right: 8px;
  cursor: pointer;
`;
