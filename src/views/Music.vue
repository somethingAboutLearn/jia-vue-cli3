<template>
  <div class="base-main-container">
    <div id="audio" v-show="play">
      <audio ref="audio" :src="currentMusicItem && currentMusicItem.src" controls></audio>
    </div>
    <div class="music-list">
      <music-item v-for="(item, index) in list" :key="index" :item="item" :play=" currentMusicItem && item && (currentMusicItem.id == item.id)" @on-play="onPlay"></music-item>
    </div>
  </div>
</template>

<script>
import MusicItem from '@/components/MusicItem'
import Bus from '../bus/scroll'
import * as API from '@/api/music'
import { mapState, mapMutations } from 'vuex'
import { getValue, music, setValue } from '../utils/localStorage/index'
import list from '../mock/music.data'   //  本地 mock 数据源

export default {
  components: {
    MusicItem
  },
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapState('music', ['currentMusicItem']),
    play () {
      return this.currentMusicItem
    }
  },
  watch: {
    currentMusicItem (val) {
      setValue({ key: music, value: val })
    }
  },
  methods: {
    ...mapMutations('music', ['setValue']),
    onPlay (data) {   //  监测播放事件，设置当前播放歌曲信息及播放状态（play）
      let { item, play } = data
      this.setValue({ key: 'currentMusicItem', value: item })
    },
    async onScroll (data) {
      let path = this.$route.path
      if (path == data.path) {
        console.log('滚动到页底加载数据 music', data)
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
    let res = await this.getList(),
      item = getValue(music),
      currentMusicItem = null
    this.list = this.list.concat(res.data.list || list)
    // 首次进入，将默认列表中的第一个元素赋值给当前播放
    // 之后进入，将本地保存的上次元素赋值给当前播放
    if (this.list.length) {
      currentMusicItem = this.list[0]
    }
    if (item) {
      currentMusicItem = item
    }
    this.setValue({ key: 'currentMusicItem', value: currentMusicItem })
    Bus.$on('on-scroll', this.onScroll)
  },
  mounted () {
    this.audio = this.$refs.audio
  }
}
</script>

<style lang="stylus" scoped>
.base-main-container
  width 100%
  padding 60px 0
  #audio
    position fixed
    top 20vh
    right 0
    z-index 1
  .music-list
    width 100%
</style>
