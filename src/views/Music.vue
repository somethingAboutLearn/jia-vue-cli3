<template>
  <div class="base-main-container">
    <div v-for="(item, index) in 10" :key="index">
      <music-item></music-item>
    </div>
  </div>
</template>

<script>
import MusicItem from '@/components/MusicItem'
import * as api from '@/api/music'

export default {
  components: {
    MusicItem
  },
  methods: {
    getList () {
      api.getList({ page: 1, limit: 5, keyword: 'd' })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style lang="stylus" scoped>
.base-main-container
  position absolute
  width 100%
  height 100%
  background #fff
</style>
