<template>
  <div class="base-main-container">
    <div class="picture-list">
      <picture-item v-for="(item, index) in list" :key="index" :item="item"></picture-item>
    </div>
  </div>
</template>

<script>
import PictureItem from '@/components/PictureItem'
import Bus from '../bus/scroll'
import * as API from '../api/picture'
import list from '../mock/picture.data'

export default {
  components: {
    PictureItem
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
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
  > .picture-list
    width 100%
</style>