<template>
    <div id="app">
        <!-- 使用动态的 transition name -->
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>

<style lang="stylus">
*
    margin 0
    padding 0
a
    text-decoration none
ul, li
    list-style none
</style>
