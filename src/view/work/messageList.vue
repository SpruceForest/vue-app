<template>
    <div class="comment_list_wrap">
        <template v-if="messageListData.length <= 0">
            <p class="comment_list_info">快来发布一条评论吧</p>
        </template>
        <template v-else>
            <div>
                <ul class="comment_list">
                    <li v-for="(item,index) of messageListData" :key="index">
                        <div class="user_comment clearfix">
                            <span>{{item.username}}</span>
                        </div>
                        <div class="comment_txt">
                            {{item.content}}
                        </div>
                        <div class="comment_footer">
                            <time>
                                {{toDate(item.create_time)}}
                            </time>
                        </div>
                    </li>
                </ul>
                <a class="comment_list_more">
                    {{loadEnd?"没有新的数据了":(loading?"正在加载中":"上滑加载更多")}}
                </a>
            </div>
        </template>
    </div>
</template>

<script>
    import ToDate from '../../utils/toDate.js'
    export default {
        props:{
            datas:{
                default:()=>[],
                type:Array
            }
        },
        data(){
          return {
              messageListData:[]
          }
        },
        computed:{
            toDate(){
                return function(val){
                    return ToDate(val)
                }
            },
            loadEnd(){
                return this.$store.state.messageList.loadEnd;
            },
            loading(){
                return this.$store.state.messageList.loading;
            }
        },
        watch:{
            datas(val){
                this.messageListData = val
            }
        }
    }
</script>

<style scoped>

</style>