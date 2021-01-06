import React, { PropsWithChildren } from 'react'
import Slot, { getSlots, WithSlot } from '../Slot'

interface SideLayoutProps {
  sider?: React.ReactNode
  header?: React.ReactNode
  content?: React.ReactNode
}
/**
 * 可以作为布局layout
 * 如果不传参数
 * 也可作为微前端的挂载点
 * 但不能同时使用
 * @param props
 */
const SideLayout: WithSlot & React.FC<PropsWithChildren<SideLayoutProps>> = (
  props
) => {
  const { sider, header, content } = getSlots<SideLayoutProps>(props)

  return (
    <div className="flex">
      <div id="siderbar" className="flex-none">
        {sider}
      </div>
      <div className="flex-auto">
        <div id="header">{header}</div>
        <div id="microapp-container">{content}</div>
      </div>
    </div>
  )
}

SideLayout.Slot = Slot

export default SideLayout
