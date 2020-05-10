<template>
    <div class="box">
       <router-view class="content"/>
       <div class="footer">
           <div>
               <router-link :to="{name:'inTimeService'}">及时达</router-link>
               <router-link :to="{name:'assemble'}">拼团</router-link>
               <router-link :to="{name:'order'}">订单</router-link>
               <router-link :to="{name:'member'}">会员</router-link>
           </div>
       </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .content{
        background: rgb(236, 230, 230);
        position: fixed;
        top: 0;
        bottom: 0.5rem;
        left: 0;
        right:0;
    }
    .footer{
        width: 100%;
        height: 0.5rem;
        font-size:0.16rem;
        background: rgb(204, 204, 204);
        position: fixed;
        bottom: 0;
        left: 0; 
        float: left;
        div{
            width: 100%;
            height: 0.5rem;
            display: flex;
            justify-content: space-between;
            a{
                display: block;
                width: 100%;
                height: 0.5rem;
                line-height: 0.5rem;
                background: green;
                text-align: center;
            }
        }
    }
</style>