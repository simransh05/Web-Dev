import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setZero,decrement,increment } from '../Slices/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
        <p>Current Number = {count}</p>
      <div>
        <button onClick={()=>dispatch(increment())}>Increase</button>
        <button onClick={()=>dispatch(decrement())}>Decrease</button>
        <button onClick={()=>dispatch(setZero())}>Set Zero</button>
      </div>
    </div>
  )
}