import { useRef, useInsertionEffect, useCallback } from "react";

// Define a generic type for the function
type AnyFunction = (...args: any) => any;

export function useEffectEvent<T extends AnyFunction>(fn: T): T {
  // Use a ref to store the function
  const ref = useRef<T | null>(null);

  // Update the ref with the latest function
  useInsertionEffect(() => {
    ref.current = fn;
  }, [fn]);

  // Return a stable callback that uses the latest function
  return useCallback((...args: Parameters<T>): ReturnType<T> => {
    const f = ref.current;
    if (f === null) {
      throw new Error(
        "useEffectEvent callback cannot be invoked during render.",
      );
    }
    return f(...args);
  }, []) as T;
}
