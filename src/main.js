import './animate.wxss'
// import './index.css'
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

wx.cloud.init({
  env: 'wang-999'
})

const app = new Vue(App)
app.$mount()

Vue.prototype.globalData = getApp().globalData
let innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = true
app.globalData.innerAudioContext = innerAudioContext
app.globalData.musics = []
app.globalData.index = 1
app.globalData.animations = [
  `bounce`,
  `flash`,
  `pulse`,
  `rubberBand`,
  `shake`,
  `headShake`,
  `swing`,
  `tada`,
  `wobble`,
  `jello`,
  `bounceIn`,
  `bounceInDown`,
  `bounceInLeft`,
  `bounceInRight`,
  `bounceInUp`,
  `fadeIn`,
  `fadeInDown`,
  `fadeInDownBig`,
  `fadeInLeft`,
  `fadeInLeftBig`,
  `fadeInRight`,
  `fadeInRightBig`,
  `fadeInUp`,
  `fadeInUpBig`,
  `flipInX`,
  `flipInY`,
  `lightSpeedIn`,
  `rotateIn`,
  `rotateInDownLeft`,
  `rotateInDownRight`,
  `rotateInUpLeft`,
  `rotateInUpRight`,
  `jackInTheBox`,
  `rollIn`,
  `zoomIn`,
  `zoomInDown`,
  `zoomInLeft`,
  `zoomInRight`,
  `zoomInUp`,
  `slideInDown`,
  `slideInLeft`,
  `slideInRight`,
  `slideInUp`,
  `heartBeat`
]
// const db = wx.cloud.database()
// const music = db.collection('music')
// music.get().then(res => {
//   console.log(res)
//   app.globalData.musics = res.data
//   innerAudioContext.src = app.globalData.musics[0].musicUrl
// })
wx.cloud.callFunction({
  name: 'music',
  data: {}
}).then(res => {
  console.log(res)
  app.globalData.musics = res.result.music.data
  innerAudioContext.src = app.globalData.musics[0].musicUrl
})
