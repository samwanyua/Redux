import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from "./counterSlice"
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch  = useDispatch();

    const [amount, setAmount] = useState(0);
    const addValue = Number(amount) || 0

    const resetAll = () => {
      setAmount(0)
      dispatch(reset())
    }
  return (
    <>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            {/* <button onClick={() => dispatch(reset())}>Reset</button> */}
        </div>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <div>
          <button onClick={() => dispatch(incrementByAmount(addValue))}>Add amount</button>
          <button onClick={resetAll}>Reset all</button>

        </div>
    </>
  )
}

export default Counter