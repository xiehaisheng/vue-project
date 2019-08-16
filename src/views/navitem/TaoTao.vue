<template>
  <div class="home-wrap" id="taotao-scroll">
    <div class="home-contet">
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
      goodslist: []
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

    let result = (await http.get({
      url: "/ajax_haitao_list_show",
      params: {
        timesort: 1562836659
      }
    })).data;
    this.goodslist = result;

    Indicator.close();

    this.scroll({
      vm: this,
      warp: '#taotao-scroll',
      params: [
        {
          url: "/ajax_haitao_list_show",
          params: {
            timesort: 1562830558
          }
        },
        {
          url: "/ajax_post_list_show",
          params: {
            timesort: 1562417777
          }
        }
      ]
    });
  },
  beforeRouteLeave(to, from, next) {
    (this.goodslist = []), next();
  }
};
</script>

<style lang="stylus" scoped></style>
