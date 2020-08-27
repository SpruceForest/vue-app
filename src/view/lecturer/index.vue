<template>
    <div>
        <frames>
            <div class="teacher_banner">
                <h2><span>妙味团队</span></h2>
                <lecturer-tab
                        :lecturerData="lecturerData"
                        @increment="showAlert"
                ></lecturer-tab>
            </div>
            <join></join>
            <lecturer-footer></lecturer-footer>
        </frames>
        <template v-if="show">
            <lecturer-alert
                    :alertData="alertData"
                    @increment="hideAlert"
            ></lecturer-alert>
        </template>
    </div>

</template>

<script>
    import Frames from "../../common/component/frames";
    import '../../common/css/index.css'
    import '../../common/css/teacher.css'
    import LecturerTab from "./lecturerTab"
    import Join from "./join"
    import LecturerFooter from "./lecturerFooter"
    import LecturerAlert from "./lecturerAlert"
    import {getWorks} from "../../apis/apis.js"
    export default {
        components: {Frames,LecturerTab,Join,LecturerFooter,LecturerAlert},
        data(){
          return {
              lecturerData:[],
              show:false,
              alertData:null
          }
        },
        methods:{
            async getData(){
              let res = await getWorks({
                  page:1,
                  row:100,
                  order:'desc',
                  sort:'sort',
                  category_id:2
              });
              for(let i = 0; i < res.length; i+=3){
                  let newArr = [];
                  let end = i+3;
                  end = end > res.length?res.length:end;
                  for(let j = i; j < end; j++){
                      newArr.push(res[j]);
                  }
                  this.lecturerData.push(newArr);
              }
          },
            showAlert(val){
                this.show = true;
                this.alertData = val
            },
            hideAlert(){
                this.show = false;
            }
        },
        async created(){
            this.getData();
        }
    }
</script>

<style scoped>

</style>