import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./redux/counter";
import "./styles.css";

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> The count is: {count}</h1>
      <button className="button" onClick={() => dispatch(increment())}>increment by 1</button>
      <button className="button" onClick={() => dispatch(decrement())}>decrement by 1</button>
      <button className="button" onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
      <button className="button" onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
