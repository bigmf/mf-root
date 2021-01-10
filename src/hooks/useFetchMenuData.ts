import React, { useState, useEffect } from 'react'
import { SiderBarProps } from '@/components/SiderBar'
import { fetchMenu } from '@/services/menu'

function useFetchMenuData() {
  const [menuData, setMenuData] = useState<SiderBarProps['menuData']>()

  useEffect(() => {
    fetchMenu('admin').then((res) => {
      setMenuData(res.data)
    })
  }, [])

  return [menuData]
}

export default useFetchMenuData
