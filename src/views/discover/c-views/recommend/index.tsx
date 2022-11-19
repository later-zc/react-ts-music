import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import request from '@/service'

interface IProps {
  children?: ReactNode
}

interface ICount {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
  exclusive: boolean
  monitorImpress: any
  monitorClick: any
  monitorType: any
  monitorImpressList: any
  monitorClickList: any
  monitorBlackList: any
  extMonitor: any
  extMonitorInfo: any
  adSource: any
  adLocation: any
  adDispatchJson: any
  encodeId: string
  program: any
  event: any
  video: any
  song: any
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = () => {
  const [count, setCount] = useState<ICount[]>([])

  useEffect(() => {
    request
      .get({
        url: '/banner'
      })
      .then((res) => {
        setCount(res.banners)
      })
  }, [])

  return (
    <div>
      {count.map((item, index) => (
        <div key={index}>{item.imageUrl}</div>
      ))}
    </div>
  )
}

export default memo(Recommend)
