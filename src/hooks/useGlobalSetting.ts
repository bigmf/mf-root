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
    }, true)

    const loader = (loading: boolean) => setLoading(loading)

    registerMicroApps(
      [
        {
          name: 'passport-app', // app name registered
          entry: '//localhost:3002',
          container: '#microapp-passport-container',
          activeRule: '/passport',
          loader,
          props: {
            data: {}
          }
        },
        {
          name: 'vue-app',
          entry: '//localhost:3003',
          container: '#microapp-vue-container',
          activeRule: '/dashboard/vue',
          loader,
          props: {}
        },
        {
          name: 'react-app',
          entry: '//localhost:3004',
          container: '#microapp-react-container',
          activeRule: '/dashboard/react',
          loader,
          props: {}
        }
      ],
      {
        // @ts-ignore
        // afterMount: (app) => setGlobalState(setting)
      }
    )

    runAfterFirstMounted(() => {
      console.log('[MainApp] first app mounted')
    })

    // setDefaultMountApp('/#/login')

    // start({ prefetch: ['vue-app', 'react-app'] })
  }, [])

  return [setting, loading]
}

export default useGlobalSetting
