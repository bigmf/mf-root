import React from 'react'

export interface GlobalSetting {
  layout?: 'sider' | 'top' | 'mix'
  menuMode?: 'vertical' | 'horizontal' | 'inline'
  menuTheme?: 'dark' | 'light'
}

export const defaultSetting: GlobalSetting = {
  layout: 'sider',
  menuMode: 'inline',
  menuTheme: 'dark'
}

const GlobalSettingContext = React.createContext<GlobalSetting>(defaultSetting)

export default GlobalSettingContext
