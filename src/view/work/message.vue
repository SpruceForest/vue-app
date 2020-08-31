<template>
    <div
            class="message_wrap"
            :style="{transform:`translateY(${show?0:'100%'})`}"
    >
        <textarea
                v-model="info"
                @change="setInfo"
        ></textarea>
        <template v-if="put">
            <footer className="miiapv_footer put">评论提交中……</footer>
        </template>
        <template v-else>
            <footer
                    class="miiapv_footer"
                    @click="addHandler"
            >发表评论</footer>
        </template>

    </div>
</template>

<script>
    import {addComment} from "../../apis/apis";
    export default {
        props:{
            show:{
                default:false,
                type:Boolean
            },
            id:{type:String}
        },
        data(){
          return {
              article_id:'',
              info:'',
              put:false
          }
        },
        watch:{
          id(val){
              this.article_id = val
          }
        },
        methods:{
            setInfo(e){
                this.info = e.target.value;
            },
            addHandler(){
                if(!this.info.trim()){
                    alert("请输入内容");
                    return ;
                }
                addComment({
                    article_id:this.article_id,
                    content:this.info
                }).then(()=>{
                    this.put = false;
                    this.$emit('increment',false);
                    this.$store.commit('messageList/setMessageList',{
                        type: "MESSAGE_ADD",
                        messageList:{
                            content: this.info,
                            create_time: Date.now(),
                            username: this.$store.state.getUser.username
                        }
                    })
                    this.info = '';
                });
                this.put = true;
            }
        }
    }
</script>

<style scoped>

</style>