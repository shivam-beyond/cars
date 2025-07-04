import { useEffect, useRef } from "react";

export default function useDebouncedEffect(
  callback,
  dependencies,
  delay = 300,
) {
  const timeout = useRef(null);

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timeout.current);
    };
  }, dependencies);
}
