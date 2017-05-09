<template lang="html">
	<div class="home">
		<div class="hmHeader" v-if="$route.path !== '/brand'">
			<p class="hm-header"><a class="hm-logo"></a><input type="text" class="hm-search" placeholder="商品搜索,共4682款好物"></p>
			<ul class="hm-nav">
				<router-link to="/home/hmRecommend" tag="li" class="hm-nav-active">
					推荐
				</router-link>
				<router-link to="/home/hmTimeLimit" tag="li" class="hm-li">
					限时购
				</router-link>
				<!-- <router-link to="/home/hmLive" tag="li" class="hm-li">
					居家
				</router-link> -->
				<router-link to="/home/hmLive" tag="li" v-for=" x in headCateList ">
					{{x.name}}
				</router-link>
			</ul>
		</div>
		<!-- <router-link to="/home/hmRecommend"></router-link>
		<router-link to="/home/hmTimeLimit"></router-link>
		<router-link to="/home/hmLive"></router-link>
		<router-link to="/brand">品牌</router-link>
		<router-link to="/hotrecommend">热门推荐</router-link> -->
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
			this.$http.get("../static/recommend.json").then(
				function(res){
					// console.log(res.body);
					this.headCateList = res.body.headCateList;//nav
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
		position: fixed;
		top: 0;
		background-color: #fff;
		z-index: 6;
	}
	.hm-header{
		width: 100%;
		height: 1rem;
		padding: 0.2rem 0.4rem;
		color: #666;
		box-sizing: border-box;
	}
	.hm-header .hm-logo{
		display: inline-block;
		vertical-align: middle;
		width: 1.7rem;
		height: 0.5rem;
		margin-right: 0.25rem;
		background: url("http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png");
		background-size: cover;
	}
	.hm-header .hm-search{
		display: inline-block;
		vertical-align: middle;
		width: 6.6rem;
		height: 0.7rem;
		text-indent: 1.75rem;
		line-height: 0.75rem;
		border: none;
		border-radius: 5px;
		font-size: 0.38rem;
		font-weight: 500;
		background: #ededed url(//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png) no-repeat 1.125rem center;
		background-size: 0.46rem auto;
	}
	/*nav部分*/
	.hm-nav{
		width: 90%;
		padding-left: 0.375rem;
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