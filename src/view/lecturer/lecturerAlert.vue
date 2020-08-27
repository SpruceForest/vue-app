<template>
    <aside class="elastic">
        <div class="elastic_box">
            <span class="close" @touchstart="startHandler" @touchend="endHandler">关闭</span>
            <div class="elastic_img">
                <img :src="alertData.icon" alt="">
            </div>
            <div class="elastic_txt">
                <h3>莫涛-妙味课堂 全职讲师</h3>
                <div
                        class="elastic_content"
                        ref="wrap"
                >
                    <div v-html="alertData.content"></div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        props:{
            alertData:{
                type:Object,
                default:null
            }
        },
        data(){
          return {
              bScroll:null,
              point:{
                  x:0,
                  y:0
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
               let endPoint = {
                   x:touch.pageX,
                   y:touch.pageY
               }
               if(Math.abs(this.point.x - endPoint.x) < 5
                   && Math.abs(this.point.y - endPoint.y) < 5){
                   this.$emit('increment')
               }
           }
        },
        created(){
            console.log(this.alertData)
        },
        mounted(){
            this.bScroll = new BScroll(this.$refs['wrap'],{
                scrollbar:true
            });
        }
    }
</script>

<style scoped>

</style>