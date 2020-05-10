<template>
    <div class="content">
        <div class="set">
            <span class="el-icon-arrow-left jiantou" @click="back"></span><p>设置</p>
        </div>
        <div class="resetPwd">
            <p class="clearfix:after">重置密码<span class="el-icon-arrow-right"></span></p>
        </div>
        <el-button type="success" @click="logout">退出登录</el-button>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        logout(){
            window.sessionStorage.setItem("isLogin",'0')
            this.$router.push("/")
        },
        back(){
            this.$router.push("/member")
        }
    }
}
</script>
<style lang="scss" scoped>
    .content{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #cccccc;
        .set{
            background: #fff;
            height: 0.2rem;
            span{
                font-size: 0.2rem;
                margin-right: 0.2rem;
                float: left;
            }
            p{  
                width: 0.4rem;
                height: 0.2rem;
                line-height: 0.2rem;
                float: left;
            }
        }
        .resetPwd{
            width: 100%;
            height: 0.4rem;
            line-height: 0.4rem;
            box-sizing: border-box;
            padding: 0 0.2rem;
            background: #fff;
            margin-top: 0.1rem;
            span{
                display: block;
                float: right;
                height: 0.4rem;
                line-height: 0.4rem;
            }
        }
        button{
            width: 100%;
            height: 0.4rem;
            margin-top: 0.1rem;
        }
    }
</style>