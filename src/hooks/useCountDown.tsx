import { useEffect, useRef, useState } from "react";

interface UseTimerOptions {
  startsFrom: number;
}

export function useTimer({ startsFrom }: UseTimerOptions) {
  // States
  const [timer, setTimer] = useState<number>(startsFrom);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  // Refs
  const timerId = useRef<ReturnType<typeof setInterval> | null>(null);
  // Variables
  const isDone = timer === 0;

  // Watchers
  useEffect(() => {
    if (isStarted) {
      timerId.current = setInterval(() => {
        setTimer((prevTimer) => {
          const nextTimer = prevTimer - 1;

          if (nextTimer === 0) {
            stop();
          }

          return nextTimer;
        });
      }, 1000);
    } else {
      if (timerId.current) {
        clearInterval(timerId.current);
        timerId.current = null;
      }
    }
  }, [isStarted]);

  // Handlers
  function start() {
    setIsStarted(true);
  }

  function stop() {
    setIsStarted(false);
  }

  function reset() {
    setIsStarted(true);
    setTimer(startsFrom);
  }

  return {
    value: timer,
    isDone,
    start,
    stop,
    reset,
  };
}