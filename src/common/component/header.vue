<template>
    <header id="header">
        <nav class="menu">
            <a
                v-if="!navBtns"
                class="header-btn-left iconfont icon-back"
                @click="back"
            ></a>
            <a
                    v-if="navBtns"
                    class="header-btn-left iconfont icon-hycaidan"
                    @click="setChangeShow"
            ></a>
        </nav>
        <h1 class="logo">miaov.com</h1>
        <template v-if="navBtns">
            <template v-if="user">
                <span class="header-btn-right ">
                    <span
                            class="header-user"
                            @click="()=>{isBtnShow=!isBtnShow}"
                    >{{user}}</span>
                    <span
                            :style="{display:isBtnShow?'block':'none'}"
                            class="header-logout-btn"
                            @click="logOutHandler"
                    >退出</span>
                </span>
            </template>
            <template v-if="!user">
                <router-link class="user" :to="{name:'login'}"></router-link>
            </template>
        </template>
        <!--<a class="user" href="javascript:;"></a>-->
    </header>
</template>

<script>
    import {logOut} from '../../apis/apis.js'
    export default {
        props:{
          changeShow:{
              default:false
          }
        },
        data(){
            return {
                navBtns:true,
                username:'',
                isBtnShow:false
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            },
            logOutHandler(){
                logOut().then(res=>{
                   if(res.code == 0){
                       // this.$router.push({
                       //     name:'/'
                       // })
                       alert(res.msg)
                   }
                })
            },
            setChangeShow(){
                this.$emit('setChangeShow',!this.changeShow)
            }
        },
        computed:{
          user(){
              return this.$store.state.getUser.username
          }
        },
        watch:{
            $route:{
                handler(){
                    if(this.$route.name === 'login'){
                        this.navBtns = false
                    }else{
                        this.navBtns = true
                    }
                },
                immediate:true
            }
        },
        mounted(){
            this.$store.dispatch('getUser/getUserName')
        }
    }
</script>

<style scoped>

</style>