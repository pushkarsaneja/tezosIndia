import React, { useEffect, useState, useRef } from "react";
// import { useBodyRef } from "../../contexts/BodyRefProvider";
import { useInViewport } from "../../customHooks/customHooks";
import "./counter.scss";

const Counter = ({ className = "", number }) => {
  const [count, setCount] = useState(() =>
    number - 100 > 0 ? number - 100 : 0
  );
  const counterRef = useRef();
  const isInViewPort = useInViewport(counterRef);
  let start = count;

  useEffect(() => {
    if (isInViewPort && start < number) {
      const myInterval = setInterval(() => {
        setCount((prev) => prev + 1);
        /* eslint-disable */
        start += 1;
        /* eslint-enable */
        if (start >= number) clearInterval(myInterval);
      }, 10);
    }
  }, [number, isInViewPort]);

  return (
    <span className={`counter ${className}`} ref={counterRef}>
      {count}
      <sup>+</sup>
    </span>
  );
};

export default Counter;
