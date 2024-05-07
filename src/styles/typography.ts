import styled from "styled-components";

export const Title = styled.div<{$color:string}>({
    fontSize:"20px",
    lineHeight:"34px",
    fontWeight:500,
    
})

export const Subtitle = styled.div({
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight:500
})

export const Caption = styled.div({
    fontSize:"14px",
    lineHeight:"21px",
    color:"#7E838F"
})

export const LinkedText = styled.a`
text-decoration: underline;
color: #1043A6;
transition: color 0.2s ease-in-out;
margin-right: 8px;
cursor: pointer

`;
