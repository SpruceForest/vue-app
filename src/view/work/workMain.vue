<template>
    <div class="workDetails">
        <tab :data="imgData">
            <template v-slot:imgSlot="{item}">
                <img :src="item"/>
            </template>
        </tab>
    </div>
</template>

<script>
    import Tab from "../../common/component/tab";
    export default {
        components: {Tab},
        props:{
            imgData:{
                default:()=>[],
                type:Array
            }
        }
    }
</script>

<style scoped>

</style>