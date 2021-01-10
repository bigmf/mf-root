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
        id: Random.word(6),
        name: '个人学习',
        icon: 'UpOutlined',
        children: [
          {
            id: Random.word(6),
            name: '样例',
            icon: 'UpOutlined',
            route: '/demos'
          },
          {
            id: Random.word(6),
            name: '组件',
            icon: 'UpOutlined',
            route: '/components'
          }
        ]
      }
    ]
    return res.json(dataSource)
  }
}
