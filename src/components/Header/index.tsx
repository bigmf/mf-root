import React from 'react'
import { Space } from 'antd'

interface LayoutHeaderProps {
  logo?: React.ReactNode
  siderbar?: React.ReactNode
  userbar?: React.ReactNode
}

const LayoutHeader: React.FC<LayoutHeaderProps> = (props) => {
  const { logo, siderbar, userbar } = props
  return (
    <div className="bg-white flex">
      <div className="flex-initial">{logo}</div>
      <div className="flex-auto">{siderbar}</div>
      <div className="flex-initial">{userbar}</div>
    </div>
  )
}

export default LayoutHeader
