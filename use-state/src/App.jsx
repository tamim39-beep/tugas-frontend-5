//jangan lupa import useState
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>Dzikir counter</p>
      <h1>{count}</h1>
      <button onClick={increment}> +1</button>
      <button onClick={decrement}> -1</button>
      <button onClick={reset}></button>
    </div>
  );
}
