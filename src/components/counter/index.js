"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center space-x-4">
      <button
        className="text-lg border rounded px-8"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="text-lg border rounded px-8"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button className="text-lg border rounded" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
