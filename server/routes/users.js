const router = require('koa-router')()
const mysql = require('../utils/query.js')
const sql = require('../utils/sql.js')
const dbService = require('../service/db.js')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})
/**
 *  author:
 *  name :
 */
router.get('/books/publisher', async ctx => {
  const publisherName = '人民日报出版社'
  const obj = {}
  // obj.books = await mysql.query(sql.queryByPublisher, [publisherName])
  await dbService.getAllBooks()
  obj.code = 1
  ctx.response.body = obj
})

module.exports = router
