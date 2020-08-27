<template>
    <article class="miiaov_article">
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
        created(){
            console.log(this.data)
        }
    }
</script>

<style scoped>

</style>