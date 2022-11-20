import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  num: number
  age: number
  direction: 'left' | 'right' | 'up' | 'down'
  names: string[]
}

const initialState: IState = {
  num: 100,
  age: 18,
  direction: 'left',
  names: []
}
const counterSilce = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // changeNumAction(state, { payload }) {
    //   state.num = payload
    // }
    changeNumAction(state, { payload }: PayloadAction<number>) {
      state.num = payload
    }
  }
})

export const { changeNumAction } = counterSilce.actions

export default counterSilce.reducer
