import React from 'react'
import BaseSiderBar, { BaseSiderBarProps } from './BaseSiderBar'

export interface VisibleSiderBarProps extends BaseSiderBarProps {
  // 适应有些子应用不需要显示菜单栏
  visible?: boolean
}

const VisibleSiderBar: React.FC<VisibleSiderBarProps> = (props) => {
  const { visible, ...restProps } = props
  if (!visible) return null
  return <BaseSiderBar {...restProps}></BaseSiderBar>
}

export default VisibleSiderBar

VisibleSiderBar.defaultProps = {
  visible: true
}
