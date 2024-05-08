import { useCallback, useRef } from "react";

interface ThrottleOptions {
  maxRequests: number;
  interval: number;
}

const useThrottle = ({ maxRequests, interval }: ThrottleOptions) => {
  //States
  const lastCallTimeRef = useRef<number>(0);
  const requestCountRef = useRef<number>(0);
  //Memos
  const throttledFunction = useCallback(
    (callback: () => void) => {
      const now = Date.now();
      const timeSinceLastCall = now - lastCallTimeRef.current;

      if (timeSinceLastCall < interval) {
        if (requestCountRef.current >= maxRequests) {
          return;
        }
        requestCountRef.current++;
      } else {
        requestCountRef.current = 1;
      }

      lastCallTimeRef.current = now;
      callback();
    },
    [maxRequests, interval]
  );

  return throttledFunction;
};

export default useThrottle;
