<template>
    <frames
            :pullUp=true
            @getData="getWorksData"
    >
        <div>
            <tab :data="imgData">
                <template v-slot:imgSlot="{item}">
                    <img :src="item" />
                </template>
            </tab>
            <section class="index_content">
                <course></course>
                <vip></vip>
                <miaov></miaov>
                <works :datas="worksData"></works>
            </section>
        </div>
    </frames>
</template>

<script>
    import Frames from '../../common/component/frames'
    import Tab from '../../common/component/tab'
    import Course from './course'
    import Vip from './vip'
    import Miaov from './miaov'
    import Works from './works'
    import '../../common/css/index.css'

    let imgData = [
        require("../../common/images/tab/img1.png"),
        require("../../common/images/tab/img2.png"),
        require("../../common/images/tab/img3.png"),
        require("../../common/images/tab/img4.png")
    ];
    export default {
        data(){
          return {
              imgData,
              worksData:null,
          }
        },
        components:{
          Frames,
          Tab,
          Course,
          Vip,
          Miaov,
          Works
        },
        methods:{
            async getWorksData(cab){
                let res = await this.$store.dispatch('works/setLoads',{
                    row:8,
                    order:'desc',
                    sort:'sort',
                    category_id:1,
                    recommend:1
                });
                if(cab){
                    cab(res);
                }
                this.worksData = this.$store.state.works;
            }
        },
        created(){
            this.getWorksData();
        },

    }
</script>

<style scoped>

</style>