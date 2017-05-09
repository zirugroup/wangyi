<template lang="html">
	<div class="brandHtml">
		<header>
			<p>
				<span class="hideMenu" v-on:click="isShow = !isShow"></span>
				<span class="brandTitle"></span>
				<span class="brandSearch"></span>
				<span class="brandCar"></span>
			</p>
			<ul class="hideMenuCont" v-show="isShow">
				<router-link to="/home" tag="li"><span></span>首页</router-link>
				<router-link to="/home" tag="li"><span></span>专题</router-link>
				<router-link to="/home" tag="li"><span></span>分类</router-link>
				<router-link to="/home" tag="li"><span></span>个人</router-link>
			</ul>
		</header>
		<div class="prandName" v-for="x in tagLis">
			<img :src="x.appListPicUrl">
			<p>
				<b>{{x.name}}</b><span></span><b>{{x.floorPrice}}元起</b>
			</p>
		</div>
	</div>
</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
	export default{
		data() {
			return {
				isShow: false,
				tagLis: []
			}
		},
		mounted() {
			// 推荐的项目
			this.$http.get("../static/recommend.json").then(
				function(res){
					console.log(res.body);
					this.tagLis = res.body.tagList;
			});
		}	
	}
</script>
<style lang="css">
	.brandHtml header{
		padding: 0 10px 0 15px;
		height: 44px;
	}
	/*.brandHtml header p span{
		display: inline-block;
		width: 34px;
		height: 34px;
		background-color: pink;
	}*/
	.brandHtml header .hideMenu{
		vertical-align: top;
		margin-top: 10px;
		float: left;
		width: 28px;
		height: 28px;
		background: pink url(../assets/brandIcon.png) no-repeat -50px 0;
		/*background-size: 100%;*/
	}
	.prandName{
		width: 100%;
		height: 200px;
		position: relative;
		margin-bottom: 2px;
	}
	.prandName img{
		width: 100%;
		height: 100%;
	}
	.prandName p{
		width: 100%;
		height: 18px;
		font-size: 18px;
		color: #fff;
		display: flex;
		justify-content: center;
		position: absolute;
		top: 50%;
	}
	.prandName p b{
		width: 50%;
		text-align: right;
	}
	.prandName p b:last-of-type{
		text-align: left;
	}
	.prandName p span{
		width: 2px;
		height: 20px;
		background-color: #fff;
		margin: -1px 8px;
	}
</style>