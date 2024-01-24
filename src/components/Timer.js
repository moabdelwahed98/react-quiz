import { useEffect, useState } from "react";

export default function Timer({ dispatch, time = null }) {
    const [timer, setTimer] = useState(time);

    const min = String(Math.floor(timer / 60)).padStart(2, "0");
    const sec = String(timer % 60).padStart(2, "0");
  useEffect(
    function () {
      const timerID = setInterval(function () {
        setTimer((cur) => cur - 1);
      }, 1000);
      return function () {
        clearInterval(timerID);
      };
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {min}:{sec}
    </div>
  );
}
