// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {

const music = await db.collection('music').get()
// music.get().then(res => {
//   console.log(res)
//   app.globalData.musics = res.data
//   innerAudioContext.src = app.globalData.musics[0].musicUrl
// })

  return {
    music
  }
}