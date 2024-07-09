import { useEffect } from "react";
import { useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("cancelled the interval");
    };
  }, []);

  let options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString("en-GB", options)} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
