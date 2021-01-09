import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import SideLayout from '@/layouts/SideLayout'
import useGlobalSetting from '@/hooks/useGlobalSetting'
import defaultSetting, { GlobalSetting } from '../config/defaultSetting'
import './global.css'

const App: React.FC = () => {
  const [setting, loading] = useGlobalSetting<GlobalSetting>(defaultSetting)

  return (
    <HashRouter>
      <SideLayout appLoading={loading} />
    </HashRouter>
  )
}

export default App
