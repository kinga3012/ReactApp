import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    clear: (state) => {
        state.value = 0;
    },
    setValue: (state, action) => {
        state.value = action.payload
    },
  },
})

export const { increment, decrement, clear, setValue } = counterSlice.actions

export default counterSlice.reducer