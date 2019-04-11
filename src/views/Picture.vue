<template>
  <div class="base-main-container">
    <div class="picture-list">
      <picture-item v-for="(item, index) in 10" :key="index"></picture-item>
    </div>
  </div>
</template>

<script>
import PictureItem from '@/components/PictureItem'

export default {
  components: {
    PictureItem
  }
}
</script>

<style lang="stylus" scoped>
.base-main-container
  width 100%
  > .picture-list
    width 100%
</style>