import styled from "styled-components";

export const ToastContainer = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: ${({ visible }) => (visible ? '20px' : '-100px')};
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  transition: bottom 0.3s ease-in-out;
`;