import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'
import classNames from 'classnames'

import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { appShallowEqual, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    appShallowEqual
  )

  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  function handlePreClick() {
    bannerRef.current?.prev()
  }

  function handleNextClick() {
    bannerRef.current?.next()
  }

  let bgImgUrl = banners[currentIndex]?.imageUrl
  if (bgImgUrl) bgImgUrl += '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImgUrl={bgImgUrl}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            ref={bannerRef}
            autoplay
            dots={false}
            autoplaySpeed={3500}
            // effect={'fade'}
            afterChange={handleAfterChange}
          >
            {banners.map((item) => (
              <div className="banner-item" key={item.imageUrl}>
                <img className="image" src={item.imageUrl} alt={item.title} />
              </div>
            ))}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => (
              <li key={item.imageUrl}>
                <span
                  className={classNames('item', {
                    active: index === currentIndex
                  })}
                ></span>
              </li>
            ))}
          </ul>
        </BannerLeft>

        <BannerRight></BannerRight>

        <BannerControl>
          <button className="btn left" onClick={handlePreClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
