<template>
    <div class="works">
        <h3>学员作品</h3>
        <ul class="works_list clearfix">
            <li v-for="item of worksData.data" :key="item.id">
                <router-link :to="{name:'work',params:{id:item.id}}">
                    <img :src="item.icon" class="work_a" />
                    <span class="wrork_txt clearfix work_a">
                        <strong class="work_a">{{item.title}}</strong>
                        <span class="work_a">
                            <em class="work_a">{{item.message}}</em>
                            <em class="work_a">{{item.good}}</em>
                        </span>
                    </span>
                </router-link>
            </li>
        </ul>
        <a class="more" href="#">{{worksData.loadEnd?"没有新的数据了":(worksData.loading?"正在加载中":"上滑加载更多")}}</a>
    </div>
</template>

<script>
    export default {
        props:{
            datas:{
                type:Object,
                default:null
            }
        },
        data(){
          return {
              worksData:{
                  data:[]
              }
          }
        },
        watch:{
            datas(val){
                this.worksData = val
            }
        },
        mounted(){
        }
    }
</script>

<style scoped>

</style>