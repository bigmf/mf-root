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
        name: 'Welcome',
        icon: 'UpOutlined',
        route: '/welcome'
      },
      {
        id: Random.word(6),
        name: '游戏',
        icon: 'UpOutlined',
        children: [
          {
            id: Random.word(6),
            name: '魔兽世界',
            route: '/wow'
          }
        ]
      },
      {
        id: Random.word(6),
        name: '游戏2',
        icon: 'UpOutlined',
        children: [
          {
            id: Random.word(6),
            name: '魔兽世界2',
            route: '/wow2'
          }
        ]
      }
    ]
    return res.json(dataSource)
  }
}
