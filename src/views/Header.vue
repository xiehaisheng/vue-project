<template>
  <div class="header-white">
    <div class="logo-img">
      <a href="">
        <img src="//res.smzdm.com/resources/public/img/m_global/logo.png?v=201906261620" />
      </a>
    </div>
    <!-- <div class="logo-search">
      <input type="text" name="search" placeholder="搜索分类/品牌/商品" id="J_enter_search" />
      <img
        src="//res.smzdm.com/mobile/wap_v2/dist/img/embed/delete.png"
        class="icon-cancel"
        id="J_icon_cancel"
      />
    </div> -->
    <router-link class="logo-search" tag="div" to='/search'>
      <input type="text" name="search" placeholder="搜索分类/品牌/商品" id="J_enter_search" />
    </router-link>

    <div class="logo-download">
      <a
        target="_blank"
        class="J_ota"
        href="//m.smzdm.com/app/?is_detail="
        onclick="dataLayer.push({'event':'WAP站banner下载浮层','tag':'home_list','name':'列表页','type':'顶部导航栏'})"
      >下载</a>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '~@/assets/border.styl';

.header-white 
  height: 0.44rem;
  width: 100%;
  background: #fff;
  padding: .09rem .1rem;
  display flex
  justify-content space-between
  align-items center
  border_1px(0 0 1px 0)
  .logo-img
    width .95rem
    height .24rem;
    a
      display block
      img
        width 100%
        height 100%
  .logo-search
    height: .28rem;
    width: 56%;
    input
      width: 100%;
      height: 100%;
      border-radius .5rem
      border 0
      background: #eee;
      padding-left .15rem
  .logo-download
    height: .2rem;
    width .40rem
    line-height: .2rem;
    border: 1px solid #e62828;
    border-radius: .2rem;
    font-size: .12rem;
    text-align: center;
    a
      color #e62828;

</style>
