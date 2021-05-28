const menus = [
  {
    id: 'vue',
    name: '子应用-Vue',
    icon: 'UpOutlined',
    children: [
      {
        id: 'welcome',
        name: 'Welcome',
        icon: 'UpOutlined',
        route: '/dashboard/vue/welcome'
      },
      {
        id: 'other',
        name: 'Other',
        icon: 'UpOutlined',
        route: '/dashboard/vue/other'
      }
    ]
  },
  {
    id: 'react',
    name: '子应用-React',
    icon: 'UpOutlined',
    children: [
      {
        id: 'profile',
        name: 'Profile',
        icon: 'UpOutlined',
        route: '/dashboard/react/profile'
      }
    ]
  }
]

export default menus
