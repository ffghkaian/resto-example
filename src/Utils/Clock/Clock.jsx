import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let timeNow = h + ":" + m + ":" + s;

  const isOpen = h >= 10 && h < 22;
  const [time, setTime] = useState(timeNow);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(timeNow);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className="clock-container">
      <h3>Goodnight!!!</h3>
      Now is {time}, and we are
      <span className={isOpen ? "open" : "close"}>
        {
          h < 10 ?
            `${" CLOSE, waiting for ready to serve ?"}`
          : h > 10 ?
            `${" OPEN, ready to serve you."}`
          : `${" CLOSE, see you next day."}`
        }
      </span>
    </div>
  );
};

export default Clock;
