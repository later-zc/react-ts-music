import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type GetStateFnType = typeof store.getState
export type RootStateType = ReturnType<GetStateFnType>

// useAppSelector辅助函数，省略state中的类型注解，自动推导
// TypedUseSelectorHook利用调用签名的形式，帮助我们推导出state的类型
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export default store
