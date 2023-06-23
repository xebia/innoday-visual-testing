import { useState } from "react";
import "./Counter.css";

export const Counter = ({
  variant = "primary",
}: {
  variant: "primary" | "secondary";
}) => {
  const [count, setCount] = useState(0);

  return (
    <button className={variant} onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </button>
  );
};
