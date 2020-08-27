<template>
    <div class="teacher_index">
        <h2>加入我们</h2>
        <ul class="teacher_list clearfix" ref="list">
            <li>
                <div class="message_li">
                    <h3>web讲师</h3>
                    <p>人数：人数不限，多多益善</p>
                    <p>薪资：面议</p>
                </div>
            </li>
            <li>
                <div class="message_li">
                    <h3>课程顾问</h3>
                    <p>人数：3人</p>
                    <p>薪资：底薪+提成</p>
                </div>
            </li>
            <li>
                <div class="message_li">
                    <h3>客服</h3>
                    <p>人数：3人</p>
                    <p>薪资：面议</p>
                </div>
            </li>
            <li>
                <div class="message_li">
                    <h3>行政前台助理</h3>
                    <p>人数：3人</p>
                    <p>
                        薪资：底薪+提成</p>
                </div>
            </li>
        </ul>
        <div class="welcome clearfix">
            <div class="welcome_photo">
                <img :src="require('../../common/images/xiaole.png')" alt="">
            </div>
            <p>欢迎大家来到妙味课堂，在这里，公司文化轻松包容，且呈多元化发展倾向，职位晋级标准清晰量化，虽有上下级职称、却无论资排辈陋习……
                <span>本招聘信息长期有效</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            let lis = this.$refs['list'].querySelectorAll("li");
            lis.forEach(item=>{
                item.addEventListener("touchstart",()=>{
                    item.classList.add("active");
                });
                item.addEventListener("touchend",()=>{
                    item.classList.remove("active");
                })
            })
        }
    }
</script>

<style scoped>

</style>