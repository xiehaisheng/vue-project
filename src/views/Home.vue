<template>
  <div class="home-nav">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
// import "swiper/dist/css/swiper.css";
// import { swiper, swiperSlide } from "vue-awesome-swiper";
import Nav from './Nav'
import http from '@/utils/http'
import BScroll from "better-scroll";
import { Indicator, Toast } from "mint-ui";

export default {
  // name: 'home',
  // data() {
  //   return {
  //     goodslist: [],
  //   };
  // },

  components: {
    // GoodsItem
    Nav
  },
  // computed: {
    
  // },
  // methods: {},

  // async mounted() {
//     this.scroll({
//       vm: this,
//       params: [
//         // {
//         //   url: '/ajax_home_list_show',
//         //   params: {
//         //     timesort: 156232486194,
//         //     past_num: 20
//         //   }
//         // },
//         {
//           url: '/ajax_home_list_show',
//           params: {
//             timesort: 156233520089,
//             past_num: 20
//           }
//         },
//         {
//           url: '/ajax_home_list_show',
//           params: {
//             timesort: 156233679809,
//             past_num: 20
//           }
//         }
//       ]
//     });
//     Indicator.open({
//       text: "Loading...",
//       spinnerType: "triple-bounce"
//     });
//     let result = (await http.get({
//       url: '/ajax_home_list_show',
//       params: {
//         timesort: 156232486194,
//         past_num: 20
//       }
//     })).data
//     this.goodslist = result
//     Indicator.close();

  // }
};
</script>



<style lang="stylus" scoped>
@import '~@/assets/border.styl';
.home-nav
  flex 1
  display flex
  flex-direction column
  .home-wrap
    flex 1
    overflow auto
</style>

