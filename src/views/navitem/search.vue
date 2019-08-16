<template>
  <div class="search-hot">
    <div class="hot-title">热门搜索</div>
    <ul class="hot-list">
      <li>
        <a
          href="https://search.m.smzdm.com/?s=骑行运动&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'骑行运动','搜索方式':'热门搜索'})"
        >骑行运动</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=支付&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'支付','搜索方式':'热门搜索'})"
        >支付</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=手机&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'手机','搜索方式':'热门搜索'})"
        >手机</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=新能源车&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'新能源车','搜索方式':'热门搜索'})"
        >新能源车</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=优衣库&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'优衣库','搜索方式':'热门搜索'})"
        >优衣库</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=话剧舞台剧&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'话剧舞台剧','搜索方式':'热门搜索'})"
        >话剧舞台剧</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=男士t恤&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'男士t恤','搜索方式':'热门搜索'})"
        >男士t恤</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=红米&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'红米','搜索方式':'热门搜索'})"
        >红米</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=保护壳&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'保护壳','搜索方式':'热门搜索'})"
        >保护壳</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=洁面乳&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'洁面乳','搜索方式':'热门搜索'})"
        >洁面乳</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=牛羊肉&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'牛羊肉','搜索方式':'热门搜索'})"
        >牛羊肉</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=户外照明&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'户外照明','搜索方式':'热门搜索'})"
        >户外照明</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=运动t恤&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'运动t恤','搜索方式':'热门搜索'})"
        >运动t恤</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=魅族&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'魅族','搜索方式':'热门搜索'})"
        >魅族</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=游戏机&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'游戏机','搜索方式':'热门搜索'})"
        >游戏机</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=亚瑟士&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'亚瑟士','搜索方式':'热门搜索'})"
        >亚瑟士</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=华为&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'华为','搜索方式':'热门搜索'})"
        >华为</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=笔记本电脑&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'笔记本电脑','搜索方式':'热门搜索'})"
        >笔记本电脑</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=小米&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'小米','搜索方式':'热门搜索'})"
        >小米</a>
      </li>
      <li>
        <a
          href="https://search.m.smzdm.com/?s=液晶电视&amp;source=hot_keyword"
          onclick="dataLayer.push({'event':'2320001','关键词':'液晶电视','搜索方式':'热门搜索'})"
        >液晶电视</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    
}
</script>


<style lang="stylus" scoped>
.search-hot 
    padding: .15rem;
    background-color: #f9f9f9;
    font-size: .14rem;
    text-align: center;
    .hot-title
        line-height .36rem
        margin-bottom .1rem
        color: #999;
    .hot-list
        display flex
        // background #faa
        flex-flow row wrap
        li
            margin .05rem .15rem .05rem 0
            padding .04rem .08rem
            background #fff
            border-radius .04rem
            a
             color #666
</style>
