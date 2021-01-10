import React from 'react'
import { Menu } from 'antd'
import { MenuProps } from 'antd/es/menu'

const { SubMenu } = Menu
interface MenuItem {
  id: string
  name: string
  icon?: string
  route?: string
  children?: MenuItem[]
}

interface WithTopLogo {
  TopLogo: React.FC
}
export interface SiderBarProps
  extends Pick<
    MenuProps,
    'mode' | 'theme' | 'defaultSelectedKeys' | 'defaultOpenKeys'
  > {
  menuData?: MenuItem[]
}

function renderMenuFromData(data?: MenuItem[]) {
  if (!data) return null
  return data.map((item) => {
    const { id, name, icon, route, children } = item

    if (children) {
      return (
        <SubMenu key={id} title={name}>
          {renderMenuFromData(children)}
        </SubMenu>
      )
    } else {
      return <Menu.Item key={id}>{name}</Menu.Item>
    }
  })
}

const SiderBar: React.FC<SiderBarProps> = (props) => {
  const { menuData, mode, theme, defaultSelectedKeys, defaultOpenKeys } = props
  return (
    <Menu
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      mode={mode}
      theme={theme}
    >
      {renderMenuFromData(menuData)}
    </Menu>
  )
}

export default SiderBar
