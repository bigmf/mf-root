import React, { useContext } from 'react'
import GlobalSettingContext from '@/contexts/GlobalSettingContext'

const UserBar: React.FC = (props) => {
  const setting = useContext(GlobalSettingContext)
  return (
    <div style={{ minWidth: 280 }}>
      {setting.currentUser?.username
        ? `你好，${setting.currentUser.username}`
        : '游客模式'}
    </div>
  )
}

export default UserBar
