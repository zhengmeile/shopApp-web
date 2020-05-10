<template>
    <div class="content">
        <el-tabs type="border-card" tab-position="top">
            <el-tab-pane label="及时达">及时达</el-tab-pane>
            <el-tab-pane label="拼团">拼团</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .content{
        .el-tabs{
            position: fixed;
            top:0;
            bottom: 0.5rem;
            left: 0;
            right: 0;
            width: 100%;
            /deep/.el-tabs--border-card>.el-tabs__header .el-tabs__item{
                width: 1.875rem!important;
                text-align: center;
                height: 0.4rem;
            }
            /deep/.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
                width: 1.875rem!important;
                box-sizing: border-box;
                text-align: center;
                border-bottom:2px solid red!important;
                border-right-color: #fff;
                border-left-color: #fff;
            }
        }
    }     
</style>