<template>
    <nav class="the-sidebar">
        <ul>
            <li class="the-sidebar-cell" v-for="(item, index) in nav" :key="index">
                <router-link :to="{path: item.path}">{{item.name}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'TheSiderbar',
  data() {
    return {
      nav: [
        {
          name: '图片',
          path: '/picture'
        },
        {
          name: '音乐',
          path: '/music'
        },
        {
          name: '视频',
          path: '/video'
        },
        {
          name: '我的',
          path: '/my'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.the-sidebar
    width 100%
    height 100%
    border-top 1px solid #dfdfdf
    > ul
        display flex
        justify-content space-between
        align-items center
        width 100%
        height 100%
        > .the-sidebar-cell
            flex 1
            height 100%
            > a
                display flex
                justify-content center
                align-items center
                width 100%
                height 100%
                font-size 14px
                color #3eaf7c
                background #fff
                &.active
                    background #3eaf7c
                    color #fff
</style>
