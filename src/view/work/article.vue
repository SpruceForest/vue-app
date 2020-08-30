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
        }
    }
</script>

<style scoped>

</style>