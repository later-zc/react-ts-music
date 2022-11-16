import { createSlice } from '@reduxjs/toolkit'

const counterSilce = createSlice({
  name: 'counter',
  initialState: {
    num: 100,
    age: 18
  },
  reducers: {
    changeNumAction(state, { payload }) {
      state.num = payload
    }
  }
})

export const { changeNumAction } = counterSilce.actions

export default counterSilce.reducer
