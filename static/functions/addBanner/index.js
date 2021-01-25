// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const _ = db.command
const banner = 'banner'
// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event, context)
  const add = db.collection(banner).doc('f2a60d815ed74637003429667e81a587').update({
    data: {
      bannerList : _.push(event.url)
    }
  })
  return {
    add
  }
}