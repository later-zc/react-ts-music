import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavWrapper } from './style'
import { Link } from 'react-router-dom'
import { discoverMenu } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => (
          <div className="item" key={item.title}>
            <Link to={item.link}>{item.title}</Link>
          </div>
        ))}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
