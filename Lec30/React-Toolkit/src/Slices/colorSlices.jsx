import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: 'Black',
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    Red: (state) => {
      state.color ='red'
    },
    Green: (state) => {
      state.color ='green'
    },
    Black: (state) => {
      state.color ='black'
    },
    Blue: (state) => {
      state.color ='blue'
    },
  },
})

export const { Red, Black, Blue ,Green } = colorSlice.actions

export default colorSlice.reducer