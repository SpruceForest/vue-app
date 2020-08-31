<template>
    <article class="miiaov_article" ref="wrap">
        <h3>{{data.title}}</h3>
        <div class="miiaov_txt" v-html="data.content"></div>
    </article>
</template>

<script>
    export default {
        props:{
            data:{
                default:null,
                type:Object
            }
        },
        mounted(){
            let imgs = this.$refs['wrap'].querySelectorAll("img");
            imgs.forEach(img=>{
                img.onload = function () {
                    window.pageScroll.refresh();
                }
            })
        }
    }
</script>

<style scoped>

</style>