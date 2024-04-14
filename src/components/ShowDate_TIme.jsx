import { useEffect, useState } from "react";

function showDateTime() {
  const [secondState, setSecondState] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondState(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="timeDate">
      <p>
        This is current Time : {secondState.toDateString()} | {secondState.toTimeString()}
      </p>
    </div>
  );
}

export default showDateTime;
