<!-- 导航页面-->
<template>
	<div style="height:100%;width:100%;">
		<el-menu
			:default-active="defaultActive"
			class="el-menu-vertical-demo"
			@select="select"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b">
			<el-menu-item index="shuidao">
				<i class="iconfont icon-shuidao"></i>
				<span slot="title">水稻简介</span>
			</el-menu-item>
			<el-submenu index="1">
				<template slot="title">
				<i class="iconfont icon-shuidao"></i>
				<span>水稻分类</span>
				</template>
				<el-menu-item-group>
				<el-menu-item index="gengdao">粳稻</el-menu-item>
				<el-menu-item index="candao">籼稻</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-menu-item index="pingjia">
				<i class="iconfont icon-pingjia"></i>
				<span slot="title">稻米评价</span>
			</el-menu-item>
			<el-submenu index="yingsu">
				<template slot="title">
				<i class="iconfont icon-pinpaiyingxiangli"></i>
				<span>影响因素</span>
				</template>
				<el-menu-item-group>
				<el-menu-item index="qihou">气候</el-menu-item>
				<el-menu-item index="huanjing">环境</el-menu-item>
				<el-menu-item index="turang">土壤</el-menu-item>
				<el-menu-item index="zaipei">栽培措施</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-menu-item index="guicheng">
				<i class="iconfont icon-msnui-rule-circle"></i>
				<span slot="title">技术规程</span>
			</el-menu-item>
		</el-menu>
		<div class="content">
			<router-view/>
		</div>
	</div>
</template>

<script>
export default {
  	name: "home",
 	data() {
    	return {
			defaultActive: null,
    	};
	  },
	mounted() {
		this.defaultActive = this.$route.name;
	},
  	methods: {
      	select(index) {
			this.$router.push('/'+ index);
		}
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo {
	width: 200px;
	height: 100%;
	float: left;
	border: none;
}
.content {
	width: calc(100% - 200px);
    height: 100%;
    float: left;
	position: relative;
	text-align: left;
	overflow: auto;
}
.content::before {
	opacity: 0.3;
	position: absolute;
	top: 0;
	left:0;
	content: '';
	width: 100%;
	height: 100%;
}
</style>
