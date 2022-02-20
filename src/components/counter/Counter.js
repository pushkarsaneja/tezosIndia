import React, { useEffect, useState, useRef } from "react";
// import { useBodyRef } from "../../contexts/BodyRefProvider";
import { useInViewport } from "../../customHooks/customHooks";
import "./counter.scss";

const Counter = ({ number }) => {
  const start = number - 100 > 0 ? number - 100 : 0;
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const counterRef = useRef();
  const isInViewPort = useInViewport(counterRef);

  useEffect(() => {
    if (isInViewPort && countRef.current < number) {
      const myInterval = setInterval(() => {
        setCount((prev) => prev + 1);
        countRef.current += 1;
        if (countRef.current >= number) clearInterval(myInterval);
      }, 10);
    }
  }, [number, isInViewPort]);

  return (
    <span className="counter" ref={counterRef}>
      {count}
      <sup>+</sup>
    </span>
  );
};

export default Counter;
