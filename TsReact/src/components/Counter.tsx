import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount((n) => n + 1)}>Increase Count by 1</button>
    </div>
  );
};

export default Counter;
