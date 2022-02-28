import { useState, useEffect, useRef } from "react";
import { useBodyRef } from "../contexts/BodyRefProvider";

export const useInViewport = (componentRef) => {
  const bodyRef = useBodyRef();
  const [isInViewPort, setIsInViewPort] = useState(false);
  const inViewPort = useRef(false);
  useEffect(() => {
    bodyRef?.current?.addEventListener("scroll", () => {
      if (
        componentRef?.current.getBoundingClientRect().top >= 0 &&
        componentRef?.current.getBoundingClientRect().top <= window.innerHeight
      ) {
        !inViewPort.current && setIsInViewPort(true);
      } else {
        inViewPort.current && setIsInViewPort(false);
      }
    });
  }, [bodyRef, componentRef]);

  useEffect(() => {
    inViewPort.current = isInViewPort;
  }, [isInViewPort]);

  return isInViewPort;
};

export const useAnimationTrigger = (componentRef) => {
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const isInViewPort = useInViewport(componentRef);

  useEffect(() => {
    if (isInViewPort) {
      setAnimationTrigger(true);
    }
  }, [isInViewPort]);

  return animationTrigger;
};
