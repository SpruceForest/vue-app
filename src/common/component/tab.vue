<template>
    <div class="banner">
        <div class="banner_img" ref="bannerWrap">
            <ul class="banner_list clearfix">
                <li v-for="(item,index) of data" :key="index">
                    <slot name="imgSlot" :item="item"></slot>
                    <!--<img :src="item"/>-->
                </li>
            </ul>
        </div>
        <template v-if="data.length > 1">
            <ul class="banner_nav">
                <li
                        v-for="(item,index) of data"
                        :key="index"
                        :class="index === now ? 'active' : ''"
                ></li>
            </ul>
        </template>

    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        props:{
            data:{
                default:()=>[],
                type:Array
            }
        },
        data(){
          return {
              bScroll:null,
              now:0,
              timer:null
          }
        },
        created(){
        },
        mounted(){
            let bannerWrap = this.$refs.bannerWrap;
            this.bScroll = new BScroll(bannerWrap,{
                scrollX:true, //x轴滑動
                scrollY:false,
                eventPassthrough:"vertical",
                momentum:false,//只切換一張
                snap:{
                    loop:true //无缝滑动
                }
            });
            this.bScroll.on("scrollEnd",()=>{ //滑动后
                this.now = this.bScroll.getCurrentPage().pageX;
            });
            this.timer = setInterval(()=>{ //自动轮播
                this.bScroll.next(200)
            },2000);
            bannerWrap.addEventListener("touchstart",()=>{
                clearInterval(this.timer)
            });
            bannerWrap.addEventListener("touchend",()=>{
                this.timer = setInterval(()=>{ //自动轮播
                    this.bScroll.next(200)
                },2000);
            })
        },
        beforeDestroy(){
            clearInterval(this.timer);
        }
    }
</script>

<style scoped>

</style>