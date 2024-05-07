import styled from "styled-components";

export const HeaderContainer = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  position: "relative",
  alignItems: "center",
});

export const PodroLogo = styled.img({
  position: "absolute",
  left: "50%",
  transform: "translate(-50%)",
});

export const BackIcon = styled.img({
  cursor: "pointer",
});

export const ResendCodeContainer = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "16px 0 24px 0",
});
