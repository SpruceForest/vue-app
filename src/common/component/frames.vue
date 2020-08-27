<template>
    <div>
        <Header
                :changeShow="changeShow"
                @setChangeShow="setChangeShow"
        ></Header>
        <Menu></Menu>
        <div id="main"
            :style="{
                    transform:`translateX(${changeShow?4.5:0}rem)`,
                    height:`${innerH}px`
                }"
             @touchstart="()=>{changeShow=false}"
        >
            <div class="pageWrap" ref="wrap">
                <div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Header from './header'
    import Menu from './menu'
    import {useInnerHeight} from '../../utils/index.js'
    import "../css/reset.css"
    import "../css/common.css"
    import BScroll from 'better-scroll'
    export default {
        props:{
            pullUp:{
                type:Boolean,
                default:false
            }
        },
        data(){
          return {
              changeShow:false,
              innerH:0,
              pageScroll:null
          }
        },
        components:{
            Header,
            Menu
        },
        methods:{
            setChangeShow(){
                this.changeShow = !this.changeShow
            }
        },
        created(){
            this.innerH = useInnerHeight();
        },
        mounted(){

            this.pageScroll = new BScroll(this.$refs.wrap,{
                preventDefaultException:{
                    tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
                    className: /(^|\s)work_a(\s|$)/
                },
                pullUpLoad:this.pullUp?{threshold:200}:false //上拉加载 threshold距离
            });
            this.pageScroll.on("pullingUp",async ()=>{ //上拉事件
                await this.$emit('getData',(res)=>{
                    if(res){
                        this.pageScroll.finishPullUp();
                        this.pageScroll.refresh(); //立即刷新
                    }else{
                        this.pageScroll.closePullUp();
                    }
                });
            })

        },
        beforeDestroy(){
            window.pageScroll = null;
        }
    }
</script>

<style scoped>

</style>