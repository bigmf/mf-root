import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { axios, toggleDarkMode } from '@/utils'

interface RemoteInfo {
  url: string
  // 转换接口数据
  postData?: (data: unknown) => SiderMenuItem[]
}

interface SiderMenuItem {
  code: string
  name: string
  icon: string | React.ReactNode
  route?: string | Function
  children?: SiderMenuItem[]
}

export interface BaseSiderBarProps {
  // 宽度
  size?: 'large' | 'default' | 'small'
  // 是否折叠，优先级大于响应式，受canCollapsed控制
  collapsed?: boolean
  canCollapsed?: boolean
  // 远程拉取
  remote?: RemoteInfo
  // 数据
  values?: SiderMenuItem[]
}

async function handleRemote(remote?: RemoteInfo): Promise<SiderMenuItem[]> {
  if (!remote) return []
  try {
    const { data: res } = await axios.get(remote.url)
    if (!res.success) {
      return []
    }
    return remote.postData ? remote.postData(res.data) : res.data
  } catch (error) {
    return []
  }
}

function renderMenu(menus: SiderMenuItem[]) {
  return (
    <ul>
      {menus.map((menu) => {
        const { code, name, icon, route, children } = menu
        if (children) {
          return (
            <li key={code}>
              <div>{name}</div>
              {renderMenu(children)}
            </li>
          )
        }
        const linkNode =
          typeof route === 'string' ? (
            <Link to={route}>{name}</Link>
          ) : (
            <a href="javascript:;" onClick={() => route!()}>
              {name}
            </a>
          )
        const iconNode = typeof icon === 'string' ? null : icon
        return <li key={code}>{[iconNode, linkNode]}</li>
      })}
    </ul>
  )
}

const BaseSiderBar: React.FC<BaseSiderBarProps> = (props) => {
  const { values, remote } = props
  const [renderData, setRenderData] = useState<SiderMenuItem[]>([])

  useEffect(() => {
    if (values) {
      setRenderData(values)
    } else {
      handleRemote(remote).then((data) => setRenderData(data))
    }
  }, [values, remote])

  return (
    <aside>
      <div className="sider-logo"></div>
      {renderMenu(renderData)}
    </aside>
  )
}

export default BaseSiderBar

BaseSiderBar.defaultProps = {
  size: 'default',
  collapsed: false,
  canCollapsed: true
}
