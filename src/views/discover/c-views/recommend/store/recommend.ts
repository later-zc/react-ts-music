import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanner } from '../services/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const res = await getBanner()
    dispatch(changeBannersAction(res.banners))
  }
)

interface IRecommendState {
  banners: any[]
}

const initialState: IRecommendState = {
  banners: []
}

const slice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { changeBannersAction } = slice.actions
export default slice.reducer
