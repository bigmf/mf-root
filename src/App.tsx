import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import SideLayout from '@/layouts/SideLayout'
import SiderBar from '@/components/SiderBar'
import Header from '@/components/Header'
import MicroAppContainer from '@/components/MicroAppContainer'
import useGlobalSetting from '@/hooks/useGlobalSetting'
import defaultSetting, { GlobalSetting } from '../config/defaultSetting'
import './global.css'

const App: React.FC = () => {
  const [setting, loading] = useGlobalSetting<GlobalSetting>(defaultSetting)

  const props = {
    sider: setting.visibleSiderBar && (
      <SiderBar remote={{ url: '/api/menus' }}></SiderBar>
    ),
    header: setting.visibleHeader && <Header></Header>,
    content: <MicroAppContainer loading={loading}></MicroAppContainer>
  }
  return (
    <HashRouter>
      <SideLayout {...props} />
    </HashRouter>
  )
}

export default App
