<template>
  <div class="video-item">
    <div class="video-info">
      <div class="img">
        <img :src="item.pic" :alt="item.describe">
        <img class="paused" :src="icon.paused" @click="handlePlay(item)"></img>
      </div>
      <div class="describe">{{item.describe}}</div>
    </div>
    <div class="user-info">
      <div class="avatar">
        <img :src="item.userInfo.avatar" :alt="item.userInfo.author">
      </div>
      <div class="abstract">{{item.userInfo.abstract}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          id: 1,                                    //    id
          pic: '/imgs/pic_750*400.jpg',                                  //   封面图
          src: '/imgs/001.mp4',                                  //   源 
          describe: '分享每个快乐的瞬间(XX字以内)',     //   描述
          duration: 200,                            //  时长
          hots: '30000',                            //  播放量
          upload_time: '上传时间',                   //  上传时间
          userInfo: {
            avatar: '/imgs/avatar_120*120.jpg',   //  上传用户头像
            author: '无名氏之而忘记',       //    上传用户名字
            abstract: '这个人很懒，除了分享内容，什么都没有留下。（25字以内）'    //  上传用户签名
          }
        }
      }
    }
  },
  data () {
    return {
      icon: {
        paused: '/imgs/paused.svg'
      }
    }
  },
  methods: {
    handlePlay (item) {
      let data = {
        play: true,
        item
      }
      this.$emit('on-play', data)
    }
  }
}
</script>

<style lang="stylus" scoped>
.video-item
  width 100%
  margin-bottom 40px
  background-color #fff
  border-radius 30px
  box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.05)
  overflow hidden
  .video-info
    .img
      position relative
      width 100%
      height 400px
      overflow hidden
      background-color #000
      img
        display block
        max-width 100%
        margin auto
      .paused
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        width 140px
        height 140px
    .describe
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 3
      overflow hidden
      margin 20px 30px
      text-align justify
      font-size 28px
      color #333
  .user-info
    display flex
    justify-content space-between
    align-items center
    margin 0 30px
    padding-bottom 20px
    .avatar
      width 120px
      height 120px
      img
        display block
        max-width 100%
        margin auto
        border-radius 50%
    .abstract
      flex 1
      margin-left 40px
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 3
      overflow hidden
</style>
