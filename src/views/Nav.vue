<template>
  <div class="header-tab">
    <div class="channel-list">
        <ul>
            <router-link class="hot-item" tag="li" to="/index/home" active-class="active">首页</router-link>
            <router-link class="hot-item" tag="li" to="/index/domestic" active-class="active">国内好价</router-link>
            <router-link class="hot-item" tag="li" to="/index/taotao" active-class="active">海淘好价</router-link>
            <router-link class="hot-item" tag="li" to="/index/goodprice" active-class="active">全部好价</router-link>
            <router-link class="hot-item" tag="li" to="/index/domestic" active-class="active">社区</router-link>
            <router-link class="hot-item" tag="li" to="/index/domestic" active-class="active">优惠券</router-link>
            <router-link class="hot-item" tag="li" to="/index/domestic" active-class="active">白菜党</router-link>
            <router-link class="hot-item" tag="li" to="/index/domestic" active-class="active">投资者关系</router-link>
            <router-link class="hot-item" tag="li" to="/index/domestic" active-class="active">关于我们</router-link>
        </ul>
    </div>
    <div class="all-tabs">
        <router-link class="hot-item" tag="a" to="/index/more" active-class="active">
            <i class="icon-tab-list"></i>
            <span>分类</span>
        </router-link>
        <!-- <a href="https://m.smzdm.com/fenlei/">
            <i class="icon-tab-list"></i>
            <span>分类</span>
        </a> -->
    </div>
  </div>

</template>

<style lang="stylus" scoped>
@import '~@/assets/border.styl';

.header-tab
    width 100%
    height .4rem
    background #fff
    border_1px(0 0 1px 0)
    display flex
    align-items center
    .channel-list
        flex 1
        overflow auto 
        ul
            display flex
            width max-content
            height 100%
            li
                margin 0 .12rem
                color #333
                font-size .15rem
                font-weight bold
    .all-tabs
        width .6rem
        border_1px(0 0 0 1px)
        a>span 
            font-size .15rem
            color #666
</style>
