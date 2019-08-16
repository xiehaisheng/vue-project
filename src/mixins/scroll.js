import Vue from 'vue'
import http from "@/utils/http";
import BScroll from "better-scroll";
import { Indicator, Toast } from "mint-ui";
import _ from "lodash";

Vue.mixin({
    methods: {
        async scroll({vm='', warp, params=[]}={}){


            let scroll = new BScroll(warp,{
                scrollY: true,
                click: true,
                pullUpLoad: true
            });
            
            // let {data} = await http.get(params[page]);
            // vm.goodslist = data
            // console.log(vm.goodslist)
            let page = 0;
            scroll.on('pullingUp', async () => {

                if(page < params.length){
                    
                    console.log(page < params.length)
                    Indicator.open('Loading...');

                    let {data} = await http.get(params[page]);

                    vm.goodslist = [...vm.goodslist, ...data]

                    console.log(vm.goodslist)

                    vm.$nextTick(() => {
                        console.log(page)
                        page++;
                        Indicator.close();
                        scroll.refresh() // 重置bScroll高度
                        scroll.finishPullUp();
                    })
                }else {
                    console.log('Toast')
                    scroll.finishPullUp();
                    Toast({
                        message: '到底了~',
                        position: 'bottom',
                        duration: 2000
                    });
                }
            });
        }
    }
})