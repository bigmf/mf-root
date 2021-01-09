import React, { useState, useEffect } from 'react'
import {
  registerMicroApps,
  start,
  runAfterFirstMounted,
  setDefaultMountApp,
  initGlobalState
} from 'qiankun'

function useGlobalSetting<T = Record<string, any>>(
  defaultSetting: T
): [T, boolean] {
  const [setting, changeSetting] = useState(defaultSetting)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const { onGlobalStateChange, setGlobalState } = initGlobalState(
      defaultSetting
    )

    onGlobalStateChange((value, prev) => {
      changeSetting((prevSetting) => {
        return {
          ...prevSetting,
          ...value
        }
      })
    })

    const loader = (loading: boolean) => setLoading(loading)

    registerMicroApps([
      {
        name: 'auth-app', // app name registered
        entry: '//localhost:3002',
        container: '#microapp-container',
        activeRule: '/#/login',
        loader,
        props: {}
      }
    ])

    runAfterFirstMounted(() => {
      console.log('[MainApp] first app mounted')
    })

    // setDefaultMountApp('/#/login')

    start()
  }, [])

  return [setting, loading]
}

export default useGlobalSetting
