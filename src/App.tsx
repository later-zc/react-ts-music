import React, { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import routes from './router'
import { useAppSelector } from './store'
// import { RootStateType } from './store'
// import store from './store'

// type GetStateFnType = typeof store.getState
// type RootStateType = ReturnType<GetStateFnType>

function App() {
  const state = useAppSelector(
    (state) => ({
      counter: state.counter.num
    }),
    shallowEqual
  )

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前计数：{state.counter}</h2>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
