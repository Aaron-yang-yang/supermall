<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="title">
      <span class="span1">用户评价</span>
      <span class='span2' @click="getMoreComments">更多</span>
    </div>

    <div class="user-info">
      <img :src="commentInfo.user.avatar" alt="用户头像">
      <span>{{commentInfo.user.uname}}</span>
    </div>

    <div class="comment">
      <p class="p1">{{commentInfo.content}}</p>
      <div class="spanclass">
        <span>{{commentInfo.created | showDate}}</span><pre>  </pre>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="p2class">
        <p v-if="commentInfo.extraInfo" class="p2">
          <span v-for="item in commentInfo.extraInfo">{{item}} </span>
        </p>
      </div>
    </div>

    <div class="footer-img" v-if="commentInfo.images">
      <div v-for="item in commentInfo.images" class="imgclass">
        <img :src="item" alt="买家休图片">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '../../../common/utils.js'

  export default {
    name: 'DetailComment',
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      getMoreComments() {
        console,log('no more comments!')
      }
    },
    filters: {
      showDate(value) {
        //1.将时间戳转化成data对象
        const date = new Date(value * 1000)

        //2.将data进行格式化
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  /* <pre><pre/>标签中可以输入多个空格显示出来 */
  pre {
    display: inline;
  }
  .comment-info{
    padding: 0.625rem;
    border-bottom: 0.125rem solid #BBBBBB;
  }
  .comment-info .title{
    border-bottom: 0.125rem solid #a8aaaa;
    position: relative;
  }
  .comment-info .title .span1{
    line-height: 5rem;
    font-size: 1.75rem;
  }
  .comment-info .title .span2{
    position: absolute;
    margin-top: 2.4rem;
    margin-left: 11.25rem;
  }
  .comment-info .user-info{
    margin-top: 1.25rem;
    position: relative;
    margin-bottom: 0.625rem;
  }
  .comment-info .user-info img{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .comment-info .user-info span{
    line-height: 3rem;
    margin-left: 2rem;
    font-size: 1.125rem;
    position: absolute;
  }
  .comment-info .comment p1{
    margin-bottom: 0.625rem;
    font-size: 1.25rem;
  }
  .comment-info .comment p span{
    color: red;
    font-size: 1rem;
  }
  .comment-info .comment .p2class{
    margin: 1rem 0;
  }
  .comment-info .comment .spanclass{
    margin: 0.5rem 0;
  }
  .comment-info .footer-img{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .comment-info .footer-img .imgclass{
    margin-right: 0.3125rem;
  }
  .comment-info .footer-img img{
    width: 6.25rem;
    height: 6.25rem;
  }
</style>
