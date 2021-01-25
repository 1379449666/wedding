<template>
    <div class="photo">
      <image class="bg-image" :src="background"/>
      <h-swiper :list="list" :isGif="isGif"></h-swiper>
    </div>
</template>

<script>
import HSwiper from 'components/swiper'
// import imgData from 'common/json/imgData.json'
export default {
  name: 'Photo',
  components: {
    HSwiper
  },
  onLoad () {
    this.getList()
    const db = wx.cloud.database()
    const common = db.collection('common')
    common.get().then(res => {
      this.background = res.data[0].background
    })
  },
  onShow () {
    // const that = this
    // that.isGif = !that.isGif
    // that.getList()
  },
  data () {
    return {
      list: [],
      isGif: false,
      background: ''
    }
  },
  methods: {
    getList () {
      const that = this
      const db = wx.cloud.database()
      const banner = db.collection('indexBanner')
      // const _ = db.command
      // banner.doc('baada3ac5ed8c27a004af8e365935dcb').update({
      //   data: {
      //     indexBanner: _.push('https://www.zppinc.com/new_lxjh/storage/app/public/artist/2/9817159099511131.jpg')
      //   }
      // }).then(res => {
      //   console.log(res)
      // })
      // return false
      banner.get().then(res => {
        console.log(res)
        let list = []
        for (let i = 0; i < res.data[0].indexBanner.length; i++) {
          let show = i === 0
          list.push({
            url: res.data[0].indexBanner[i],
            show: show
          })
        }
        that.list = list
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.photo
    height 100%
</style>
