import React, { useState, useEffect } from "react";
import { ToastContainer } from "./Toast.style";

interface ToastProps {
  message: string;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 4000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <ToastContainer visible={visible}>
      {message}
    </ToastContainer>
  );
};

export default Toast;
