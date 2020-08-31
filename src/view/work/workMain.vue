<template>
    <div class="workDetails">
        <tab :data="imgData">
            <template v-slot:imgSlot="{item}">
                <img :src="item"/>
            </template>
        </tab>
        <div class="miiaov_box">
            <Article :data="workData"></Article>
            <article class="miiaov_comment">
                <good :goodNub="workData.good" :id="workData.id" ></good>
                <message-list :datas="datas"></message-list>
            </article>
        </div>
    </div>
</template>

<script>
    import Tab from "../../common/component/tab";
    import Article from "./article";
    import Good from "./good";
    import MessageList from "./messageList";
    export default {
        components: {Tab,Article,Good,MessageList},
        props:{
            imgData:{
                default:()=>[],
                type:Array
            },
            workData:{
                default:null,
                type:Object
            },
            datas:{
                default:()=>[],
                type:Array
            }
        }
    }
</script>

<style scoped>

</style>