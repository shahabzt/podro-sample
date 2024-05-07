import styled from "styled-components";

export const SearchBoxContainer = styled.form({
  display: "flex",
  width: "66%",
  marginTop:"32px"
});

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 0 8px 8px 0;
  padding: 16px;
  border-left-style: none;
  width: 100%;
`;

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-family: inherit;
`;

export const SearchButton = styled.button`
  background: linear-gradient(to left, #1043a6 0%, #0c317c 100%);
  color: #fff;
  border: none;
  border-radius: 8px 0 0 8px;
  border-right-style: none;
  cursor: pointer;
  width: 56px;
`;
