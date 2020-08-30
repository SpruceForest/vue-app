<template>
    <p class="miiaov_zan">
        <span>有{{goodCound}}人学的很赞</span>
        <span
                class="iconfont icon-tuijian1"
                :class="{'good':good}"
                @touchstart="startHandler"
                @touchend="endHandler"
        ></span>
    </p>
</template>

<script>
    import {setGood,cancelGood} from '../../apis/apis.js'
    export default {
        props:{
            goodNub:{
                type:String
            },
            id:{
                type:String
            }
        },
        data(){
          return {
              point:{
                  x:0,
                  y:0
              },
              goodCound:parseInt(this.goodNub)
          }
        },
        computed:{
            good(){
                return this.$store.state.good.good
            },
            setGoodCound:{
                get(){
                    return this.goodCound;
                },
                set(val){
                    this.goodCound = val;
                }
            }
        },
        methods:{
            startHandler(e){
                let touch = e.changedTouches[0];
                this.point.x = touch.pageX;
                this.point.y = touch.pageY;
            },
            endHandler(e){
                let touch = e.changedTouches[0];
                let newPoint = {
                    x: touch.pageX,
                    y: touch.pageY
                }
                if(Math.abs(newPoint.x - this.point.x) < 5
                    && Math.abs(newPoint.y - this.point.y) < 5){
                    if(this.$store.state.getUser.username){
                        if(this.good){
                            cancelGood({
                                article_id:this.id,
                                goodid:this.$store.state.good.goodid
                            }).then(res=>{
                                if(res.code == 0){
                                    this.$store.commit('good/getGood',{
                                        type:'CANCEL_GOOD'
                                    })
                                    this.setGoodCound--;
                                }
                            })
                        }else{
                            setGood({article_id:this.id}).then(res=>{
                                if(res.code == 0){
                                    this.$store.dispatch('good/getGood',{
                                        article_id:this.id
                                    })
                                    this.setGoodCound++;
                                }
                            })
                        }
                    }else{
                        this.$router.push({
                            path:'/login'
                        })
                    }
                }
            }
        },
        created(){
            this.$store.dispatch('good/getGood',{
                article_id:this.id
            })
        }
    }
</script>

<style scoped>

</style>