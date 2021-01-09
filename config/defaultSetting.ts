export interface GlobalSetting {
  layout?: 'sider' | 'top' | 'mix'
  menuMode?: 'vertical' | 'horizontal' | 'inline'
  menuTheme?: 'dark' | 'light'
}

const setting: GlobalSetting = {
  layout: 'sider',
  menuMode: 'inline',
  menuTheme: 'dark'
}

export default setting
