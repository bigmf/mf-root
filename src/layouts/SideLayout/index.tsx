import React, { useState, useEffect } from 'react'
import { Layout, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import SiderBar, { SiderBarProps } from '@/components/SiderBar'
import LayoutHeader from '@/components/Header'
import LayoutFooter from '@/components/Footer'
import { fetchMenu } from '@/services/menu'
import MicroAppContainer from '@/components/MicroAppContainer'

const { Header, Content, Footer, Sider } = Layout

interface SideLayoutProps {
  appLoading: boolean
}
const SideLayout: React.FC<SideLayoutProps> = ({ appLoading }) => {
  const [menuData, setMenuData] = useState<SiderBarProps['menuData']>()

  useEffect(() => {
    fetchMenu('admin').then((res) => {
      setMenuData(res.data)
    })
  }, [])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <SiderBar.TopLogo />
        <Spin
          spinning={!!menuData}
          indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
        >
          <SiderBar menuData={menuData!}></SiderBar>
        </Spin>
      </Sider>
      <Layout className="site-layout">
        <Header>
          <LayoutHeader />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <MicroAppContainer loading={appLoading} />
        </Content>
        <Footer>
          <LayoutFooter />
        </Footer>
      </Layout>
    </Layout>
  )
}

export default SideLayout
