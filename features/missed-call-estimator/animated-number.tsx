"use client";

import { useEffect, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  formatter: (value: number) => string;
  duration?: number;
};

export function AnimatedNumber({
  value,
  formatter,
  duration = 650
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let frameId = 0;
    const startTime = performance.now();
    const startValue = displayValue;
    const delta = value - startValue;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(startValue + delta * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, value]);

  return <>{formatter(displayValue)}</>;
}
