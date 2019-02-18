<template>
    <base-sticky-footer>
        <template slot="base-header">
            {{historyList}}
        </template>
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
        <template slot="base-footer">
            <the-sidebar></the-sidebar>
        </template>
    </base-sticky-footer>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    TheSidebar
  },
  data() {
    return {
      transitionName: '',
      history: []
    }
  },
  computed: {
    ...mapState('history', ['historyList'])
  },
  watch: {
    $route(to, from) {
      let inHistoryList = this.historyList.find(v => {
          return v.key === history.state.key
        }),
        transitionName = ''
      if (inHistoryList) {
        transitionName = 'slide-left'
        this.history.pop()
      }
      if (!inHistoryList) {
        transitionName = 'slide-right'
        this.history.push({
          key: history.state.key,
          path: to.fullPath
        })
      }
      this.transitionName = transitionName
      this.setValue({ key: 'historyList', value: this.history })
    }
  },
  created() {
    if (!history.state) return
    this.history.push({
      key: history.state.key,
      path: this.$route.fullPath
    })
    this.setValue({ key: 'historyList', value: this.history })
  },
  methods: {
    ...mapMutations('history', ['setValue'])
  }
}
</script>

<style lang="stylus">
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-right-enter-active
    transition all 0.8s
.slide-right-leave-active
    transition all 0.8s
.slide-right-enter
    transform translateX(100%)
.slide-right-leave-to
    transform translateX(-100%)
.slide-left-enter-active
    transition all 0.8s
.slide-left-leave-active
    transition all 0.8s
.slide-left-enter
    transform translateX(-100%)
.slide-left-leave-to
    transform translateX(100%)
</style>
