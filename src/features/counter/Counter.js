import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [incAmount, setIncAmount] = useState(0);

  const addValue = Number(incAmount) || 0;
  const resetAll = () => {
    setIncAmount(0);
    dispatch(reset());
  };

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <input
        type="number"
        value={incAmount}
        onChange={(e) => setIncAmount(e.target.value)}
      />
      <button onClick={(e) => dispatch(incrementByAmount(addValue))}>
        Increment {incAmount} By Amount
      </button>
      <button onClick={(e) => dispatch(increment())}>+</button>
      <button onClick={(e) => dispatch(decrement())}>-</button>
      <button onClick={resetAll}>reset</button>
    </div>
  );
};

export default Counter;
