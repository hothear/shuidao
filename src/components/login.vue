<!-- 系统载入页-->
<template>
    <div class="login">
        <div class="title">
            徐小明博士研发的高级稻米评价系统
        </div>
        <div class="login-content">
            <el-row>
                <el-col :span="12"><router-link :to="'shuidao'"><span>稻米的简介</span></router-link></el-col>
                <el-col :span="12"><router-link :to="'pingjia'"><span>优质稻米的评价</span></router-link></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><router-link :to="'qihou'"><span>影响因素</span></router-link></el-col>
                <el-col :span="12"><router-link :to="'guicheng'"><span>优质稻米技术规程</span></router-link></el-col>
            </el-row>
        </div>
        <footer>
            @扬州大学农学院
        </footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.login {
    height: 100%;
    width: 100%;
    background-color: rgba(23,73,140,.86);
}
.title {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 16px;
    color: #ffffff;
    padding-top: 6%;
    padding-bottom: 20px;
    border-bottom: 2px solid #ffffff;
    width: 80%;
    margin: auto;
}

.login-content {
    width: 66%;
    margin: auto;
    margin-top: 10%;
    color: #fff;
    font-size: 44px;
}

.login-content .el-row {
    margin-bottom: 115px;
}

.login-content .el-row a {
    cursor: pointer;
    color: #ffffff;
    text-decoration: none;
}

.login-content .el-row span:hover {
    color: #2d8cf0;
}

footer {
    position: fixed;
    bottom: 24px;
    text-align: center;
    width: 100%;
    padding-top: 25px;
    border-top: 2px solid #ffffff;
    color: #ffffff;
}
</style>