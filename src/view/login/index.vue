<template>
    <frames>
        <div id="login_boxWrap">
            <h2 class="login_register"><span>登录&amp;注册</span></h2>
            <div class="login_register_box">
                <div class="box">
                    <login></login>
                </div>
            </div>
        </div>
    </frames>

</template>

<script>
    import "../../common/css/login.css";
    import Login from './login';
    import Frames from "../../common/component/frames";
    export default {
        components:{
            Frames,
            Login
        }
    }
</script>

<style scoped>

</style>