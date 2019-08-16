<template>
  <div class="home-wrap" id="home-scroll">
    <div class="home-contet">
      <swiper :options="swiperOption" class="swiper-wrap" ref="mySwiper">
        <swiper-slide class="swiper-slide">
          <img src="https://tp-qneimg.smzdm.com/201907/02/5d1ab3b17a9a69759.jpg" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="https://tp-qneimg.smzdm.com/201907/04/5d1d653f95e0a4940.jpg" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="https://tp-qneimg.smzdm.com/201907/02/5d1ab4155bbb68900.jpg" />
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <img src="https://tp-qneimg.smzdm.com/201907/01/5d1963377e09c3174.png" />
        </swiper-slide>
        <span></span>
      </swiper>
      <goods-item v-for="goods in goodslist" :key="goods.article_id" :goods="goods"></goods-item>
    </div>
  </div>
</template>

<script>
import GoodsItem from "@/components/GoodsItem.vue";
import http from "@/utils/http";
import { Indicator, Toast } from "mint-ui";
import "mint-ui/lib/style.css";

export default {
  data() {
    return {
      goodslist: [],
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        }
      }
    };
  },

  components: {
    GoodsItem
  },

  async mounted() {
    Indicator.open({
      text: "Loading...",
      spinnerType: "triple-bounce"
    });

    console.log(Indicator);

    let result = (await http.get({
      url: "/ajax_home_list_show",
      params: {
        timesort: 156284630512,
        past_num: 20
      }
    })).data;
    this.goodslist = result;

    Indicator.close();

    this.scroll({
      vm: this,
      warp: "#home-scroll",
      params: [
        {
          url: "/ajax_home_list_show",
          params: {
            timesort: 156274046058,
            past_num: 40
          }
        },
        {
          url: "/ajax_home_list_show",
          params: {
            timesort: 156231599438,
            past_num: 20
          }
        }
      ]
    });
  },
  beforeRouteLeave(to, from, next) {
    this.goodslist = [];
    next();
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/border.styl';

.swiper-wrap {
  width: 100%;
  // height: 1.53rem;
  background: #fff;
  overflow: hidden;

  .swiper-slide {
    img {
      width: 100%;
    }
  }

  span {
    margin-bottom: 1.53rem;
  }
}
</style>
