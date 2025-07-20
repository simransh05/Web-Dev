import { configureStore } from '@reduxjs/toolkit'
import colorSlices from './Slices/colorSlices'
import counterSlice from './Slices/counterSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    color: colorSlices
  },
})
