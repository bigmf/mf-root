import React, { useMemo } from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
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
    const { id, name, icon, route = '/', children } = item

    if (children) {
      return (
        <SubMenu key={id} title={name}>
          {renderMenuFromData(children)}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={id}>
          <Link to={route}>{name}</Link>
        </Menu.Item>
      )
    }
  })
}

const SiderBar: React.FC<SiderBarProps> = (props) => {
  const { menuData, mode, theme, defaultSelectedKeys, defaultOpenKeys } = props
  const location = useLocation()
  const selectedKey = useMemo(() => {
    const snippetPaths = location.pathname.split('/')
    return snippetPaths.length > 0 ? snippetPaths[snippetPaths.length - 1] : ''
  }, [location.pathname])

  return (
    <Menu
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      openKeys={['vue', 'react']}
      selectedKeys={[selectedKey]}
      mode={mode}
      theme={theme}
    >
      {renderMenuFromData(menuData)}
    </Menu>
  )
}

export default SiderBar
