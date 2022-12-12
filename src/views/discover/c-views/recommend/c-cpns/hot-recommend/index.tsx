import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  return <div>HotRecommend</div>
}

export default memo(HotRecommend)
