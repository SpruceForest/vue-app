import Router from 'vue-router';
import Vue from 'vue';
Vue.use(Router);

const Index = ()=>import('@/view/index/index');
const Course = ()=>import('@/view/course/index');
const Lecturer = ()=>import('@/view/lecturer/index');
const Login = ()=>import('@/view/login/index');
const Work = ()=>import('@/view/work/index');

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'index',
            title:'首页',
            component:Index,
            meta:{
                className:'iconfont icon-home'
            }
        },
        {
            path:'/course',
            name:'course',
            title:'课程安排',
            component:Course,
            meta:{
                className:'iconfont icon-kecheng'
            }
        },
        {
            path:'/lecturer',
            name:'lecturer',
            title:'讲师团队',
            component:Lecturer,
            meta:{
                className:'iconfont icon-peixunjiangshi'
            }
        },
        {
            path:'/login',
            name:'login',
            title:'登录注册',
            component:Login
        },
        {
            path:'/work/:id',
            name:'work',
            title:'作品详情',
            component:Work
        }
    ]
});

export default router;