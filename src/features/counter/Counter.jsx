import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from "./counterSlice"

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch  = useDispatch();
  return (
    <>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
            <button onClick={() => dispatch(decrementByAmount(20))}>decrement by 20</button>
        </div>
    </>
  )
}

export default Counter