<template lang="html">
	<div class="brandHtml">
		<header>
			<div>
				<span class="hideMenu" v-on:click="isShow = !isShow" v-bind:class="{hideMenuActive: isShow}"></span>
				<span class="brandTitle"></span>
				<span class="brandSearch"></span>
				<router-link to="/car" tag="span" class="brandCar"></router-link>
			</div>
			<ul class="hideMenuCont" v-show="isShow">
				<router-link to="/home/hmRecommend" tag="li" class="toHome"><span></span>首页</router-link>
				<router-link to="/topic" tag="li" class="toTopic"><span></span>专题</router-link>
				<router-link to="/classify" tag="li" class="toClassify"><span></span>分类</router-link>
				<router-link to="/mine" tag="li" class="toMine"><span></span>个人</router-link>
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
			this.$http.get("../static/json/recommend.json").then(
				function(res){
					console.log(res.body);
					this.tagLis = res.body.tagList;
			});
		}	
	}
</script>
<style lang="css">
	.brandHtml header{
		width: 100%;
		position: fixed;
		top: 0;
		background-color: #fff;
		z-index: 6;
		box-sizing: border-box;
	}
	.brandHtml header div{
		margin: 7px 15px;
	}
	.brandHtml header div::after{
		content: "";
		display: block;
		clear: both;
	}
	.brandHtml header div span{
		width: 30px;
		height: 30px;
	}
	.brandHtml header .hideMenu{
		float: left;
		width: 30px;
		height: 30px;
		background: url(../assets/brandIcon.png) no-repeat 0 -130px;
		background-size: 300%;
	}
	.brandHtml header .hideMenuActive{
		background: url(../assets/brandIcon.png) no-repeat 0 -160px;
		background-size: 300%;
	}
	.brandHtml header .brandTitle{
		float: left;
		width: 100px;
		margin: 0 50px 0 95px;
		background: url(../assets/brandIcon.png) no-repeat;
		background-position: 0 -110px;
		background-size: 100% auto;
	}
	.brandHtml header .brandSearch{
		float: left;
		background: url(../assets/brandIcon.png) no-repeat 0 -300px;
		background-size: 300%;
	}
	.brandHtml header .brandCar{
		float: right;
		background: url(../assets/brandIcon.png) no-repeat;
		background-size: 300%;
	}
	.brandHtml header .hideMenuCont{
		padding-bottom: 6px;
		width: 100%;
		border-top: 1px solid #f4f4f4;
		display: flex;
		justify-content: space-between;
	}
	.brandHtml header .hideMenuCont li{
		font-size: 12px;
		color: #888;
		width: 15%;
		text-align: center;
		padding: 0 5%;
	}
	.brandHtml header .hideMenuCont span{
		display: block;
		width:28px;
		height: 28px;
		margin: 4px 0 0 16px;
	}
	.brandHtml header .hideMenuCont .toHome span{
		background: url(../assets/brandIcon.png) no-repeat 0 -65px;
		background-size: 320%;  
	}
	.brandHtml header .hideMenuCont .toTopic span{
		background: url(../assets/brandIcon.png) no-repeat 0 -335px;
		background-size: 320%;  
	}
	.brandHtml header .hideMenuCont .toClassify span{
		background: url(../assets/brandIcon.png) no-repeat 0 -35px;
		background-size: 320%;  
	}
	.brandHtml header .hideMenuCont .toMine span{
		background: url(../assets/brandIcon.png) no-repeat 0 -265px;
		background-size: 320%;  
	}
	.prandName{
		margin-top: 44px;
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