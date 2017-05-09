<template lang="html">
	<div class="home">
		<div class="hmHeader" v-if="$route.path !== '/brand'">
			<div class="hm-header">
				<a class="hm-logo"></a>
				<input type="text" class="hm-search" placeholder="商品搜索,共4682款好物">
			</div>
			<ul class="hm-nav">
				<router-link to="/home/hmRecommend" tag="li" class="hm-nav-active">
					推荐
				</router-link>
				<router-link to="/home/hmTimeLimit" tag="li" class="hm-li" >
					限时购
				</router-link>
					<router-link v-for="x in headCateList" tag="li" :key="x.id" :to="{path: '/home/hmLive', query:{categoryId: x.id}}" exact>
						{{x.name}}
				</router-link>
			</ul>

		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"	
	Vue.use(VueResource)
	export default{
		data() {
			return {
				headCateList: []//nav
			}
		},
		mounted() {
			// 推荐的项目
			this.$http.get("../static/json/recommend.json").then(
				function(res){
					console.log(res.body);
					this.headCateList = res.body.headCateList;//nav
					console.log(this.headCateList)
			});
		}
	}
</script>
<style lang="css">
	*{
		padding: 0;
		margin: 0;
	}
	img{
		vertical-align: top;
	}
	/*logo部分*/
	.home{
		width: 100%;
		font-family: PingFangSC-Light, helvetica, "Heiti SC";
	}
	.hmHeader{
		width: 100%;
		position: fixed;
		top: 0;
		background-color: #fff;
		z-index: 6;
	}
	.hm-header{
		width: 100%;
		height: 0.82rem;
		color: #666;
		box-sizing: border-box;
	}
	.hm-header .hm-logo{
		float: left;
		width: 19%;
		height: 0.5rem;
		margin: 2% 0 0 5%;
		background: url("../assets/hmlogo.png") no-repeat;
		background-size: 100%;
		/*此处若使用 background-size: cover; 则在缩小屏幕时背景图不能全部显示*/
	}
	.hm-header .hm-search{
		float: right;
		width: 68%;
		margin: 1% 4% 0 0;
		height: 0.66rem;
		text-indent: 24%;
		line-height: 0.75rem;
		border: none;
		border-radius: 5px;
		font-size: 0.35rem;
		background: #ededed url("../assets/hmSearch.png") no-repeat 18% center;
		background-size: 0.36rem auto;
	}
	/*nav部分*/
	.hm-nav{
		width: 94%;
		padding: 0 3%;
		height: 0.875rem;
		font-size: 0;
		margin-top: 0.125rem;	
		display: -webkit-box;
		overflow-x: auto;
        -webkit-perspective: 1000;
        -webkit-overflow-scrolling: touch;
	}
	.hm-nav::-webkit-scrollbar{
		display: none;
	}
	.hm-nav>li{
		margin-right: 0.6rem;
		line-height: 0.875rem;
		font-size: 0.36rem;
		padding: 0 6px 2px;
	}
	.hm-nav a{
		text-decoration: none;
		text-align: center;
		font-size: 0.36rem;
		padding: 5px 6px;
	}
	.router-link-active{
		color: #b4282d;
		border-bottom: 2px solid #b4282d;
	} 
</style>