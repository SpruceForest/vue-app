<template>
    <div>
        <frames
            :pullUp=true
            @getData="getMessageData"
        >
            <template v-if="loading">
                <skeleton></skeleton>
            </template>
            <template v-else>
                <work-main
                        :workData="workData"
                        :img-data="imgData"
                        :datas="messageListData"
                ></work-main>
            </template>
        </frames>
        <footer
                class="miiapv_footer"
                @click="setShow"
        >回复本帖</footer>
        <message
            :show="showMessage"
            @increment="setShow2"
            :id="workData.id"
        ></message>
    </div>
</template>

<script>
    import '../../common/css/miiaov.css'
    import '../../common/css/index.css'
    import Frames from "../../common/component/frames";
    import Skeleton from "../../common/component/skeleton";
    import WorkMain from "./workMain";
    import Message from "./message";

    export default {
        name: "index",
        components: {Frames,Skeleton,WorkMain,Message},
        data(){
            return {
                imgData:[],
                // messageListData:[],
                showMessage:false
            }
        },
        methods:{
            async getMessageData(cab){ //评论列表
                let res = await this.$store.dispatch('messageList/setMessageList',{
                    article_id: this.workData.id
                });
                if(cab){
                    cab(res);
                }
                // this.messageListData = this.$store.state.messageList.messageList;
            },
            async getImgData(){ //获取图片数据
                let {id} = this.$route.params;
                await this.$store.dispatch('work/setWork',{article_id:id});
                this.imgData = this.$store.state.work.data.image_path.map(item=>item.path)
            },
            setShow(){
                let {username} = this.$store.state.getUser;
                if(username){
                    this.showMessage = true;
                }else{
                    this.$router.push({
                        path:'/login'
                    })
                }
            },
            setShow2(val){
                console.log(val)
                this.showMessage = val;
            }
        },
        computed:{
            loading(){
                return this.$store.state.work.loading;
            },
            workData(){
                return this.$store.state.work.data;
            },
            messageListData(){
                return this.$store.state.messageList.messageList;
            }
        },
        async mounted(){
            await this.getImgData();
            await this.getMessageData();
        },
        beforeDestroy(){
            //重置数据
            this.$store.commit("work/setWork",{
                type: "WORK_RESET"
            });
            this.$store.commit('messageList/setMessageList',{
                type:"MESSAGE_RESET"
            })
        }
    }
</script>

<style scoped>

</style>