<template>
    <div class="content">
        <div class="header">
            <div class="photo">
                <div class="img">
                    <img src="http://img1.imgtn.bdimg.com/it/u=3169898831,1766885958&fm=26&gp=0.jpg"></img>
                </div>
                <div class="info">
                    <p>18435995780</p>
                    <p>一小时达会员</p>
                </div>
                <div class="member">
                    <i></i>
                    <span>会员码</span>
                </div>
            </div>
            <div class="coupon">
                <ul>
                    <li>
                        <p>0</p>
                        <p>积分商城</p>
                    </li>
                    <li style="border-right:1px solid #ccc;border-left:1px solid #ccc;">
                        <p>0</p>
                        <p>优惠券</p>
                    </li>
                    <li>
                        <p>0</p>
                        <p>钱包·充值</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="set">
            <ul>
                <li>
                    地址管理<i class="el-icon-arrow-right jiantou"></i>
                </li>
                <li>
                    联系客服<i class="el-icon-arrow-right jiantou"></i>
                </li>
                <li @click="toLogin">
                    设置<i class="el-icon-arrow-right jiantou"></i>
                </li>
            </ul>
        </div>
        <div class="banner">
            <img class="img" src="http://img0.imgtn.bdimg.com/it/u=3279353590,4067282436&fm=26&gp=0.jpg"></img>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        toLogin(){
            // window.sessionStorage.setItem("isLogin",'1')
            // console.log(window.sessionStorage.isLogin)
            var isLogin = window.sessionStorage.isLogin
            if(isLogin=='0'){
                this.$router.push("/loginOrRegister")
            }else if(isLogin=='1'){
                this.$router.push("/set")
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 1.8rem;
        background:burlywood;
        .photo{
            width: 100%;
            height: 0.9rem;
            overflow: hidden;
            float: left;
            .img{
                width: 0.7rem;
                height: 0.7rem;
                border-radius: 50%;
                background: coral;
                float: left;
                margin-left: 0.2rem;
                margin-top: 0.1rem;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .info{
                float: left;
                p{
                     margin-top: 0.2rem;
                }
            }
            .member{
                box-sizing: border-box;
                width: 20%;
                height: 0.9rem;
                float:right;
                padding: 0.2rem;
                padding: 0.1rem;
            }
        }
        .coupon{
            box-sizing: border-box;
            width: 100%;
            height: 0.9rem;
            padding:0.1rem 0.2rem;
            float: left;
            ul{
                width: 100%;
                display: flex;
                justify-content: space-between;
                li{
                    width: 33.3%;
                    text-align: center;
                    margin-top: 0.19rem;
                }
            }
        }
    }
    .set{
        width: 100%;
        height: 1.5rem;
        margin-top: 0.1rem;
        background: #fff;
        ul{
            li{
                float: left;
                width: 100%;
                height: 0.5rem;
                box-sizing: border-box;
                padding: 0 0.1rem;
                line-height: 0.5rem;
                border-bottom: 1px solid #ccc;
                .jiantou{
                    display: block;
                    width: 0.16rem;
                    height: 0.5rem;
                    line-height: 0.5rem;
                    float:right;
                }
            }
        }
    }
    .banner{
        width: 100%;
        height: 1.2rem;
        box-sizing: border-box;
        padding: 0.1rem 0.2rem;
        .img{
            display: block;
            width: 100%;
            height: 100%;
        }
    }
</style>