<template v-if="lecturerData.length">
        <tab
                :data="lecturerData"
        >
            <template v-slot:imgSlot="{item}">
                <ul class="lecturer_list">
                    <li
                            v-for="option of item"
                            :key="option.id"
                            @touchstart="startHandler"
                            @touchend="endHandler(option,$event)"
                    >
                        <img :src="option.icon" />
                        <p>{{option.title}}</p>
                    </li>
                </ul>

            </template>
        </tab>
</template>

<script>
    import Tab from "../../common/component/tab";
    export default {
        props:{
            lecturerData:{
                type:Array,
                default:()=>[]
            }
        },
        components:{
            Tab
        },
        data(){
            return {
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
            endHandler(item,e){
                let touch = e.changedTouches[0];
                let nowPoint = {
                    x: touch.pageX,
                    y: touch.pageY
                }
                if(Math.abs(nowPoint.x - this.point.x) < 5 ||
                  Math.abs(nowPoint.y - this.point.y) < 5){
                    this.$emit('increment',item)
                }
            }
        },
        created(){
        }
    }
</script>

<style scoped>

</style>