import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import headerTitles from '@/assets/data/header_titles.json'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  const showItem = (item: any) =>
    item.type === 'path' ? (
      <NavLink to={item.link}>
        {item.title}
        <i className="icon sprite_01"></i>
      </NavLink>
    ) : (
      <a href={item.link} target="_blank" rel="noreferrer">
        {item.title}
      </a>
    )

  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <a className="logo sprite_01" href="/#">
            网易云音乐
          </a>
          <div className="title-list">
            {headerTitles.map((item) => (
              <div className="item" key={item.title}>
                {showItem(item)}
              </div>
            ))}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <span className="center">创作者中心</span>
          <span className="login">登录</span>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
