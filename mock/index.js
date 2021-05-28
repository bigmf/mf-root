const mockjs = require('mockjs')
const Random = mockjs.Random

module.exports = {
  'GET /api/menus': function (req, res, u, b) {
    const userid = req.query.userid
    if (userid === 'anonymous') {
      return res.status(403).json({
        status: 'error',
        code: 403
      })
    }
    const dataSource = [
      {
        // id: Random.word(6),
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
            id: 'baidumap',
            name: '百度地图',
            icon: 'UpOutlined',
            route: '/dashboard/vue/baidumap'
          }
        ]
      }
    ]
    return res.json(dataSource)
  }
}
