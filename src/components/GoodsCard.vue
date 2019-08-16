<template>
  <div class="card-group-list">
    <div class="zm-card-media">
      <img
        :src="cardlist.article_pic"
        :alt="cardlist.article_title"
      />
      <div class="card-label card-label-guonei">国内精选</div>
      <div class="card-time">{{cardlist.article_format_date}}</div>
    </div>
    <div class="zm-card-content">
      <div class="zm-card-title">{{cardlist.article_title}}</div>
      <div class="zm-card-price">{{cardlist.article_price}}</div>
      <div class="zm-card-info">
        <span class="info-mall">{{cardlist.article_mall}}</span>
        <span class="info-comments">
          <i class="iconfont">&#xe87e;</i>{{cardlist.article_comment}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['cardlist']
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/border.styl';

.card-group-list:nth-child(2n) 
  border-right: 0px solid #eee;
.card-group-list 
  width: 50%;
  background: #fff;
  padding: 0.08rem 0.1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border_1px(0 1px 1px 0);
  border-color: #eee;

  .zm-card-media 
    position: relative;
    font-size: 0.14rem;
    color: #FFF;
    width 1.57rem
    height 1.57rem
    background #cac
    img 
      width: 100%;
    .card-label 
      background: rgba(240, 72, 72, 0.8);
      padding: 0 0.06rem;
      border-radius: 0.02rem;
      position: absolute;
      top: 0;
      left: 0;

    .card-time 
      background: #fff;
      color: #666;
      font-size: 0.12rem;
      padding: 0 0.04rem;
      border-radius: 0.02rem;
      position: absolute;
      bottom: 0;
      right: 0;

  .zm-card-content 
    display: flex;
    flex-flow: column wrap;
    text-align: left;
    margin-top: 0.2rem;

    .zm-card-title 
      font-size: 0.15rem;
      font-weight: 700;
      margin-bottom: 1px;
      line-height: 24px;
      height: 48px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    .zm-card-price 
      width: 100%;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      color: #e62828;
      margin-bottom: 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    

    .zm-card-info 
      display: flex;
      justify-content: space-between;

      .info-comments 
        padding: 0 0.05rem;

        .iconfont
          padding: 0 0.05rem;

</style>
