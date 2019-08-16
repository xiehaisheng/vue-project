<template>
  <div class="home-wrap" id="good-scroll">
    <div class="home-contet card-wrap">
      <goods-card v-for="cardlist in goodslist" :key="cardlist.article_id" :cardlist="cardlist"></goods-card>
    </div>
  </div>
</template>

<script>
import GoodsCard from "@/components/GoodsCard.vue";
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
    GoodsCard
  },

  async mounted() {

    Indicator.open({
      text: "Loading...",
      spinnerType: "triple-bounce"
    });

    let data = (await http.get({
      url: "/ajax_faxian_list_show",
      params: {
        timesort: 1562846210
      }
    })).data;

    this.goodslist = data;

    Indicator.close();  

    this.scroll({
      vm: this,
      warp: '#good-scroll',
      params: [
        {
          url: "/ajax_faxian_list_show",
          params: {
            timesort: 1562846143
          }
        },
        {
          url: "/ajax_faxian_list_show",
          params: {
            timesort: 1562846806
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
.card-wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>

