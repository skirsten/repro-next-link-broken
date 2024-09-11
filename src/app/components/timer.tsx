"use client";

import { useEffect, useState } from "react";

type TimerProps = {
  startTime: Date;
};

export function Timer(props: TimerProps) {
  const [date, setDate] = useState(() => new Date());

  useEffect(() => {
    const timeout = setInterval(() => {
      setDate(new Date());
    }, 100);

    return () => clearTimeout(timeout);
  }, [props]);

  return (
    <span>
      {((date.getTime() - props.startTime.getTime()) / 1000).toFixed(1)}
    </span>
  );
}
