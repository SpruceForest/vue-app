<template>
    <nav id="menu">
        <router-link
                v-for="(item,index) of levelList"
                :key="index" :class="item.meta.className"
                :to="item.path">
            {{item.title}}
        </router-link>
    </nav>
</template>

<script>
    export default {
        data(){
          return {
              levelList:null
          }
        },
        methods:{
            getBreadcrumb(){
                let {routes} = this.$router.options;
                this.levelList = routes.filter(item=>item.meta);
            }
        },
        created(){
            this.getBreadcrumb()
        }
    }
</script>

<style scoped>

</style>