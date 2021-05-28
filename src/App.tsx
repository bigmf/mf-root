import React, { useMemo } from 'react'
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import SideLayout from '@/layouts/SideLayout'
import TopLayout from '@/layouts/TopLayout'
import MixLayout from '@/layouts/MixLayout'
import useGlobalSetting from '@/hooks/useGlobalSetting'
import GlobalSettingContext, {
  GlobalSetting
} from '@/contexts/GlobalSettingContext'
import defaultSetting from '../config/defaultSetting'
import MicroAppContainer from '@/components/MicroAppContainer'
import './global.css'
import 'antd/dist/antd.css'

const App: React.FC = () => {
  const [setting, loading] = useGlobalSetting<GlobalSetting>(defaultSetting)

  return (
    <GlobalSettingContext.Provider value={setting}>
      <BrowserRouter basename="">
        <Switch>
          <Route exact path="/">
            <Redirect
              to={{
                pathname: '/passport'
              }}
            />
          </Route>
          <Route path="/passport">
            <MicroAppContainer
              loading={loading}
              mountElementId="microapp-passport-container"
            />
          </Route>
          <Route path="/dashboard">
            <SideLayout appLoading={loading} />
          </Route>
        </Switch>

        {/* {setting.layout === 'top' && <TopLayout appLoading={loading} />} */}
        {/* {setting.layout === 'mix' && <MixLayout appLoading={loading} />} */}
      </BrowserRouter>
    </GlobalSettingContext.Provider>
  )
}

export default App
