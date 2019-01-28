<template>
    <div class="base-main-container">
        <div v-for="(item, index) in 10" :key="index">My - {{item}}</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.base-main-container
    position absolute
    width 100%
    height 100%
    background #fff
</style>