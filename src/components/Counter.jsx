import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementBy,
  reset,
} from "../slices/counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  return (
    <div>
      <h1>Counter:</h1>
      <p>counter value: {count}</p>

      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementBy(inputRef.current.value))}>
          increment By input
        </button>

        <hr />
        <hr />

        <input name="number" ref={inputRef} />
      </div>
    </div>
  );
};
