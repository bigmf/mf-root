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

interface MixLayoutProps {
  appLoading: boolean
}
const MixLayout: React.FC<MixLayoutProps> = ({ appLoading }) => {
  const [menuData] = useFetchMenuData()
  const globalSetting = useContext(GlobalSettingContext)
  const { menuTheme, menuMode } = globalSetting

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ padding: 0 }}>
        <LayoutHeader userbar={<UserBar />} />
      </Header>
      <Layout>
        <Sider collapsible theme={menuTheme}>
          <Spin
            spinning={!menuData}
            indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
          >
            <AppLogo />
            <SiderBar
              menuData={menuData}
              theme={menuTheme}
              mode={menuMode}
            ></SiderBar>
          </Spin>
        </Sider>
        <Layout>
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
      </Layout>
    </Layout>
  )
}

export default MixLayout
