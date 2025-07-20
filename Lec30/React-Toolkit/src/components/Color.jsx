import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  Red, Black, Blue ,Green  } from '../Slices/colorSlices'

export function Color() {
  const color = useSelector((state) => state.color.color)
  const dispatch = useDispatch()

  return (
    <div>
        <p style={{color:color}}>This is a para</p>
      <div>
        <button onClick={()=>dispatch(Red())}>Red</button>
        <button onClick={()=>dispatch(Blue())}>Blue</button>
        <button onClick={()=>dispatch(Green())}>Green</button>
        <button onClick={()=>dispatch(Black())}>Black</button>
      </div>
    </div>
  )
}