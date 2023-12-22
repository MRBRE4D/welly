import { useState } from "react";

export default function PriceCounter() {
  const [count, setCount] = useState(0);

  // 增加
  const increase = () => {
    setCount(count + 1);
  };

  // 減少
  const decrease = () => {
    setCount((prevCount) => {
      // 不能小於0
      if (prevCount <= 0) return 0;
      return prevCount - 1;
    });
  };
  return (
    <>
      <div>
        <button
          onClick={() => {
            decrease();
          }}
        >
          &minus;
        </button>
        <div id="value">{count}</div>
        <button
          onClick={() => {
            increase();
          }}
        >
          &#43;
        </button>
      </div>
    </>
  );
}
