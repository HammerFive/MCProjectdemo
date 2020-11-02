// 根据出版社查询图书信息
const queryByPublisher =
  'SELECT a.id, a.name, a.number, a.author, a.digest, a.cover, b.name as publisher, c.name as clazz ' +
  'FROM book a,publisher b,clazz c ' +
  'WHERE a.publisher_id = b.id and a.clazz_id = c.id and b.name = ?'

module.exports = {
  queryByPublisher
}
