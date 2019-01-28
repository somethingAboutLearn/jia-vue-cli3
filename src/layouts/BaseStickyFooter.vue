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
        width 100%
    .base-main
        position relative
        width 100%
        flex 1
        overflow hidden
    .base-footer
        width 100%
        height 88px
</style>
