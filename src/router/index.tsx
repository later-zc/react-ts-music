import { RouteObject } from 'react-router-dom'
import Discover from '@/views/discover'
import React from 'react'

const routes: RouteObject[] = [
  {
    path: '/discover',
    element: <Discover />
  }
]

export default routes
