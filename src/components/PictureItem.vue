<template>
  <div class="picture-item">
    <div class="picture-info">
      <div class="img">
        <img :src="item.pic" :alt="item.describe">
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
  name: 'PictureItem',
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          id: 1,    //  图片 id
          pic: 'imgs/pic_750*400.jpg',    //  图片源
          describe: '照片，是在光和影的陪衬下，被禁锢在时间的框架里，成为陈旧的光景。每个镜头皆有内涵与诉说的故事，像素平铺成记忆，翻开的已是历史。（60字以内）',   //  描述
          hots: '30000',                            //  浏览量
          upload_time: '上传时间',                   //  上传时间
          userInfo: {
            avatar: '/imgs/avatar_120*120.jpg',   //  上传用户头像
            author: '无名氏之而忘记',       //    上传用户名字
            abstract: '这个人很懒，除了分享内容，什么都没有留下。（25字以内）'    //  上传用户签名
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.picture-item
  width 100%
  margin-bottom 40px
  background-color #fff
  border-radius 30px
  box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.05)
  overflow hidden
  .picture-info
    .img
      width 100%
      height 400px
      overflow hidden
      background-color #000
      img
        display block
        max-width 100%
        margin auto
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
