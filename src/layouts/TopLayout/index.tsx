import React, { useState, useEffect, useContext } from 'react'
import { Layout, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import SiderBar from '@/components/SiderBar'
import LayoutHeader from '@/components/Header'
import LayoutFooter from '@/components/Footer'
import AppLogo from '@/components/AppLogo'
import UserBar from '@/components/UserBar'
import GlobalSettingContext from '@/contexts/GlobalSettingContext'
import useFetchMenuData from '@/hooks/useFetchMenuData'
import MicroAppContainer from '@/components/MicroAppContainer'

const { Header, Content, Footer, Sider } = Layout

interface TopLayoutProps {
  appLoading: boolean
}

const TopLayout: React.FC<TopLayoutProps> = ({ appLoading }) => {
  const [menuData] = useFetchMenuData()
  const globalSetting = useContext(GlobalSettingContext)
  const { menuTheme, menuMode } = globalSetting

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ padding: 0 }}>
        <LayoutHeader
          logo={<AppLogo className="w-8 sm:w-40" />}
          siderbar={
            <SiderBar
              menuData={menuData}
              theme={menuTheme}
              mode="horizontal"
            ></SiderBar>
          }
          userbar={<UserBar />}
        />
      </Header>
      <Content style={{ margin: '24px' }}>
        <MicroAppContainer
          loading={appLoading}
          mountElementId="microapp-vue-container"
        />
      </Content>
      <Footer>
        <LayoutFooter />
      </Footer>
    </Layout>
  )
}

export default TopLayout
