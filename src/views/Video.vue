<template>
  <div class="base-main-container">
    <div id="video" v-show="play">
      <video ref="video" :src="item && item.src" controls autoplay></video>
      <img class="close" :src="icon.close" @click="handleClose" />
    </div>
    <div class="video-list">
      <video-item v-for="(item, index) in list" :key="index" :item="item" @on-play="onPlay"></video-item>
    </div>
  </div>
</template>

<script>
import VideoItem from '@/components/VideoItem'
import Bus from '../bus/scroll'
import * as API from '../api/video'
import list from '../mock/video.data'

export default {
  components: {
    VideoItem
  },
  data () {
    return {
      icon: {
        close: '/imgs/close.svg'
      },
      play: false,
      item: null,
      list: []
    }
  },
  methods: {
    onPlay (data) {
      let { play, item } = data
      this.play = play
      this.item = item
    },
    handleClose () {
      this.play = false
      this.$refs.video.pause()
    },
    async onScroll (data) {
      let path = this.$route.path
      if (path == data.path) {
        let res = await this.getList()
        res.data.list && (this.list = this.list.concat(res.data.list))
      }
    },
    async getList () {
      // 请求接口异常，则加载本地 mock 数据
      try {
        let res = await API.getList({ time: '时间(以时间分页)', limit: 5 })
        // 构造一个 Promise 对象，使用 async 与 await
        return new Promise((resolve, reject) => {
          if (res.code != 0) return reject(res)
          resolve(res)
        })
      } catch (error) {
        return { data: { list: null } }
      }
    }
  },
  async created () {
    let res = await this.getList()
    this.list = this.list.concat(res.data.list || list)
    Bus.$on('on-scroll', this.onScroll)
  }
}
</script>

<style lang="stylus" scoped>
.base-main-container
  width 100%
  padding 60px 0
  #video
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    margin auto
    background-color rgba(0, 0, 0, 0.9)
    z-index 1
    .close
      position absolute
      top 30px
      left 30px
      width 60px
      height 60px
    video
      width 100%
      height 100%
  .video-list
    width 100%
</style>