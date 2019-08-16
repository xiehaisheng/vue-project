<template>
  <div class="goods-item">
    <div class="zm-card-media">
      <img
        :src="goods.article_pic"
        :alt="goods.article_title"
      />
      <div class="card-label card-label-guonei">{{goods.article_channel}}</div>
    </div>
    <div class="zm-card-content">
      <div class="zm-card-title">{{goods.article_title}}</div>
      <div class="card-price">{{goods.article_price}}</div>
      <div class="zm-card-actions">
        <div class="zm-card-actions-left">
          <span class="card-mall">{{goods.article_mall}}</span>
          <span>{{goods.article_date}}</span>
        </div>
        <div class="zm-card-actions-right">
          <span class="icon-group">
            <i class="iconfont">&#xe87e;</i>{{goods.article_comment}}
          </span>
          <span class="icon-group">
            <i class="iconfont">&#xe87f;</i>{{goods.article_worthy}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: "HelloWorld",
  props: ['goods']
};
</script>

<style scoped lang="stylus">
.goods-item
  width 100%
  height 1.35rem
  background #fff
  margin-top .1rem
  padding: .15rem .1rem;
  display flex
  .zm-card-media
    width 1.05rem
    height 1.05rem
    position relative
    margin-right: .1rem;
    background #cce
    img
      width 1.05rem
      height 1.05rem
    .card-label
      position absolute
      top 0
      left 0
      padding: 0 .08rem;
      line-height: .15rem;
      border-radius: .02rem;
      height: .15rem;
      max-width: .84rem;
      font-size: .12rem;
      color: #fff;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
      background-color: rgba(240,72,72,.8);
  .zm-card-content
    flex 1
    text-align left
    display: flex;
    align-content: space-between;
    flex-flow: row wrap;
    overflow: hidden;
    min-height: 68px;
    .zm-card-title
      font-size: .15rem;
      line-height: 24px;
      height: 48px;
      overflow: hidden;
      margin-bottom: 1px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-weight: 700;
    .card-price
      color: #e62828;
      font-size: .15rem;
      width 100%
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    .zm-card-actions
      display flex
      justify-content space-between
      width 100%
      .zm-card-actions-left
        color: #888;
        font-size: 12px;
        .card-mall
          display inline-block
          border_1px(0 1px 0 0)
          padding 0 .08rem 0 0
        span
          padding 0 .08rem
      .zm-card-actions-right
        span
          padding 0 .05rem
</style>
