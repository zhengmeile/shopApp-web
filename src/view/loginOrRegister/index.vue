<template>
    <div class="content">
        <header class="el-icon-arrow-left" @click="back"></header>
        <div class="btnList" v-if="flag">
            <el-button class="btn" type="primary" @click="showLogin">登录</el-button>
            <el-button class="btn" type="success" @click="showRegister">注册</el-button>

        </div>
        <div class="login" v-show="isLoginOrRegister=='login'">
            <el-input class="inp" placeholder="请输入账号" v-model="userInfo.account"></el-input>
            <el-input class="inp" placeholder="请输入密码" v-model="userInfo.password"></el-input>
            <div class="footer">
                <el-button class="btn" type="primary" @click="login">登录</el-button>
            </div>
        </div>
        <div class="register" v-show="isLoginOrRegister=='register'">
            <el-input class="inp" placeholder="请输入昵称" v-model="userInfo.userName"></el-input>
            <el-input class="inp" placeholder="请输入账号" v-model="userInfo.account"></el-input>
            <el-input class="inp" placeholder="请输入密码" v-model="userInfo.password"></el-input>
            <el-input class="inp" placeholder="请输入确认密码" v-model="userInfo.confirmPassword"></el-input>
            <div class="footer">
                <el-button class="btn" type="success">注册</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userInfo:{
                userName:"",
                account:"",
                password:"",
                confirmPassword:"",
            },
            flag:true,
            isLoginOrRegister:"",
        }
    },
    methods:{
        showLogin(){
            this.flag = false
            this.isLoginOrRegister = "login"
        },
        showRegister(){
            this.flag = false
            this.isLoginOrRegister = "register"
        },
        back(){
            this.flag = true
            if(this.isLoginOrRegister == ""){
                this.$router.push("/member")
            }
            this.isLoginOrRegister = ""
        },
        login(){
            window.sessionStorage.setItem("isLogin",'1')
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
        background-image: url("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3100501782,2850847851&fm=26&gp=0.jpg");
        header{
            width: 20px;
            height: 20px;
            font-size: 20px;
            margin:0.1rem;
        }
        .btnList{
            margin-top:3.3rem;
            opacity: 0.6;
            text-align: center;
        }
        .login,.register{
            width: 100%;
            height: 3rem;
            margin-top: 2rem;
            box-sizing: border-box;
            padding: 0.2rem 0.4rem;
            .inp{
                margin-bottom:0.2rem;
                opacity: 0.6;
            }
            .footer{
                text-align: center;
                opacity: 0.6;
            }
        }
    }
</style>