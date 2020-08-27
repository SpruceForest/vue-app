<template>
    <div class="login_box">
        <figure class="user_img">
            <img src="../../common/images/user_img.png" alt="" />
            <figcaption>如有账号，请直接登录</figcaption>
        </figure>
        <div class="login_form" ref="ruleForm">
            <p>
                <input type="text" v-model="ruleForm.username" placeholder="用户名" />
            </p>
            <p>
                <input type="password" v-model="ruleForm.password" placeholder="请输入密码" />
            </p>
            <p>
                <input
                        type="text"
                        placeholder="验证码"
                        value=""
                        v-model="ruleForm.verify"
                        @focus="setVcodeShow"
                        class="verifyCode"
                />
                <img
                        class="verify"
                        v-if="vcodeShow"
                        :src="vcodeSrc"
                        @touchstart="startHandler"
                        @touchend="endHandler"
                />
            </p>
            <button class="form_btn" @click="submitForm()">登录</button>
            <p class="form_tip">没有帐号？<a href="#">立即注册</a></p>
        </div>
    </div>
</template>

<script>
    import {login} from '../../apis/apis.js'
    export default {
        data(){
            return {
                ruleForm:{
                    username:"",
                    password:"",
                    verify:""
                },
                vcodeShow:false,
                vcodeSrc:'',
                point:{
                    x:0,
                    y:0
                }
            }
        },
        methods:{
            setVcodeShow(){
                this.vcodeShow = true;
            },
            async submitForm(){
                this.$store.commit('getUserName',this.ruleForm.username)
                let res = await login(this.ruleForm);
                alert(res.msg)
                setTimeout( ()=>{
                    if(res.code != 0){
                        this.vcodeSrc = 'api/user/verify?'+ Date.now()
                        this.ruleForm.verify = "";
                    }else{
                        this.$router.push({
                            path:"/"
                        })
                    }
                },100)
            },
            startHandler(e){
                let touch = e.changedTouches[0];
                this.point.x = touch.pageX;
                this.point.y = touch.pageY;
            },
            endHandler(e){
                let touch = e.changedTouches[0];
                let newPoint = {
                    x: touch.pageX,
                    y:touch.pageY
                }
                if(Math.abs(newPoint.x - this.point.x) < 5
                    && Math.abs(newPoint.y - this.point.y) < 5){
                    this.vcodeSrc = 'api/user/verify?'+ Date.now()
                }
            }
        },
        created(){
            this.vcodeSrc = 'api/user/verify?'+ Date.now()
        }
    }
</script>

<style scoped>

</style>