const mockjs = require('mockjs')
const Random = mockjs.Random

function successWrap(data) {
  return {
    success: true,
    data
  }
}
function failWrap(errorCode, errorMessage) {
  return {
    success: false,
    errorCode,
    errorMessage
  }
}

module.exports = {
  'GET /api/menus': function (req, res, u, b) {
    const dataSource = [
      {
        code: Random.word(6),
        name: 'Welcome',
        icon: '',
        route: '/welcome'
      },
      {
        code: Random.word(6),
        name: '游戏',
        icon: '',
        children: [
          {
            code: Random.word(6),
            name: '魔兽世界',
            route: '/wow'
          }
        ]
      }
    ]
    res.json(successWrap(dataSource))
  }
}
