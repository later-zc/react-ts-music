import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'
import AppPlayerBar from './views/player/app-player-bar'

// import { RootStateType } from './store'
// import store from './store'

// type GetStateFnType = typeof store.getState
// type RootStateType = ReturnType<GetStateFnType>

function App() {
  return (
    <div className="App">
      <AppHeader />

      <Suspense fallback="">{useRoutes(routes)}</Suspense>
      <AppFooter />
      <AppPlayerBar />
    </div>
  )
}

export default App
