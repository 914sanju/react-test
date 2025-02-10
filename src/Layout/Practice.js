import React, { useState, useEffect } from "react";

function CounterExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set an interval to increment the count every second
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    // Update the document title whenever the count changes
    document.title = `You clicked ${count} times`;
  }, [count]); // Dependency array to trigger only on count change

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CounterExample;