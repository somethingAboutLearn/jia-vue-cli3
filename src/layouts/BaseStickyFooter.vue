<template>
  <div class="base-container">
    <header class="base-header">
      <slot name="base-header"></slot>
    </header>
    <main class="base-main">
      <slot></slot>
    </main>
    <footer class="base-footer">
      <slot name="base-footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BaseStickyFooter'
}
</script>

<style lang="stylus">
html, body
  width 100%
  height 100%
#app
  width 100%
  height 100%
.base-container
  display flex
  flex-direction column
  width 100%
  height 100%
  .base-header
    display flex
    justify-content center
    align-items center
    width 100%
    height 88px
    border-bottom 1px solid #dfdfdf
    background-color #3eaf7c
    color #fff
    font-size 40px
  .base-main
    position relative
    width 100%
    flex 1
    padding 60px 0
    background-color #f2f2f2
    overflow hidden
    overflow-y scroll
  .base-footer
    width 100%
    height 88px
</style>
