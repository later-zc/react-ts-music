import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { Carousel } from 'antd'

import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay autoplaySpeed={3500}>
            {banners.map((item) => (
              <div className="banner-item" key={item.imageUrl}>
                <img className="image" src={item.imageUrl} alt={item.title} />
              </div>
            ))}
          </Carousel>
        </BannerLeft>

        <BannerRight></BannerRight>

        <BannerControl>
          <button className="btn left"></button>
          <button className="btn right"></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
