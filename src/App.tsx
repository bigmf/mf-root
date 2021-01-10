import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import SideLayout from '@/layouts/SideLayout'
import TopLayout from '@/layouts/TopLayout'
import useGlobalSetting from '@/hooks/useGlobalSetting'
import GlobalSettingContext, {
  GlobalSetting
} from '@/contexts/GlobalSettingContext'
import defaultSetting from '../config/defaultSetting'
import './global.css'
import 'antd/dist/antd.css'

const App: React.FC = () => {
  const [setting, loading] = useGlobalSetting<GlobalSetting>(defaultSetting)

  return (
    <HashRouter>
      <GlobalSettingContext.Provider value={setting}>
        {setting.layout === 'sider' && <SideLayout appLoading={loading} />}
        {setting.layout === 'top' && <TopLayout appLoading={loading} />}
        {setting.layout === 'mix' && <TopLayout appLoading={loading} />}
      </GlobalSettingContext.Provider>
    </HashRouter>
  )
}

export default App
