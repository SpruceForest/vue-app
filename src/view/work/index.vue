<template>
    <div>
        <frames>
            <template v-if="loading">
                <skeleton></skeleton>
            </template>
            <template v-else>
                <work-main :img-data="imgData"></work-main>
                <Article :data="workData"></Article>
            </template>
        </frames>
        <footer class="miiapv_footer">回复本帖</footer>
    </div>
</template>

<script>
    import '../../common/css/miiaov.css'
    import '../../common/css/index.css'
    import Frames from "../../common/component/frames";
    import Skeleton from "../../common/component/skeleton";
    import WorkMain from "./workMain";
    import Article from "./article";
    export default {
        name: "index",
        components: {Frames,Skeleton,WorkMain,Article},
        data(){
            return {
                imgData:[],
            }
        },
        computed:{
            loading(){
                return this.$store.state.work.loading;
            },
            workData(){
                return this.$store.state.work.data;
            }
        },
        async mounted(){
            let {id} = this.$route.params;
            await this.$store.dispatch('work/setWork',{article_id:id});
            this.imgData = this.$store.state.work.data.image_path.map(item=>item.path)
        },
        beforeDestroy(){
            this.$store.commit("work/setWork",{
                type: "WORK_RESET"
            })
        }
    }
</script>

<style scoped>

</style>