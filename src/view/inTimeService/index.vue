<template>
    <div>
        <div class="header">
            <p class="logo">闪送到家</p>
            <el-input class="search" size="mini"></el-input>
            <el-button class="searchBtn" size="mini">搜索</el-button>
            <el-button class="searchBtn" size="mini">会员码</el-button>
        </div>
        <div class="content">
            <el-tabs type="border-card" tab-position="left">
                <el-tab-pane label="用户管理">用户管理</el-tab-pane>
                <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .header{
        width:100%;
        height:0.5rem;
        background: gold;
        box-sizing: border-box;
        padding: 0.05rem 0.1rem;
        border-bottom: 1px solid #ccc;
        .logo{
            width: 1rem;
            height: 0.4rem;
            font-size: 0.16rem;
            font-weight: 900;
            color: red;
            line-height: 0.4rem;
            float: left;
        }
        .search{
            width: 1rem;
            height: 0.4rem;
            line-height: 0.4rem;
        }
    }
    .content{
        .el-tabs{
           position: fixed;
           top: 0.5rem;
           bottom: 0.5rem;
           left: 0;
           right: 0;
        }
    }
</style>