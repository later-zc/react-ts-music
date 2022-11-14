import { createSlice } from '@reduxjs/toolkit'

const counterSilce = createSlice({
  name: 'counter',
  initialState: {
    num: 100,
    age: 18
  },
  reducers: {}
})

export default counterSilce.reducer
