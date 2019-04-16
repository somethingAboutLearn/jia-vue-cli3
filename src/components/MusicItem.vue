<template>
  <div class="music-item">
    <div class="music-info">
      <div class="song">
        <div class="img">
          <img :src="item.pic" :alt="item.describe">
          <img class="paused" v-if="play" :src="icon.play"></img>
          <img class="paused" v-else :src="icon.paused" @click="handlePlay(item)"></img>
        </div>
        <div class="info">
          <div class="song">{{item.song}}</div>
          <div class="singer">{{item.singer}}</div>
        </div>
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
  name: 'MusicItem',
  props: {
    play: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: () => {
        return {
          id: 1,                                    //    id
          pic: '/imgs/pic_200*200.jpg',                                  //   封面图
          src: '',                                  //   源 
          song: '歌名',
          singer: '演唱者',
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
        paused: '/imgs/paused.svg',
        play: '/imgs/play.svg'
      }
    }
  },
  methods: {
    handlePlay (item) {
      let play = true,
        data = {
          item,
          play
        }
      console.log('==before==', this.play)
      this.$emit('on-play', data)
      console.log('==after==', this.play)
    }
  }
}
</script>

<style lang="stylus" scoped>
.music-item
  width 100%
  padding 30px
  margin-bottom 40px
  background-color #fff
  border-radius 30px
  box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.05)
  overflow hidden
  .music-info
    .song
      display flex
      justify-content space-between
      background-color #333
      .img
        position relative
        width 200px
        height 200px
        img
          display block
          width 100%
          margin auto
      .paused
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        width 100px
        height 100px
      .info
        flex 1
        padding 20px 40px
        .song
          color #fff
          font-size 40px
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          overflow hidden
        .singer
          color #999
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 1
          overflow hidden
    .describe
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 3
      overflow hidden
      margin 20px 0
      text-align justify
      font-size 28px
      color #333
  .user-info
    display flex
    justify-content space-between
    align-items center
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
