<template lang="html">
	<div class="home">
		<p class="hm-header"><a class="hm-logo"></a><input type="text" class="hm-search" placeholder="商品搜索,共4682款好物"></p>
		<ul class="hm-nav">
			<li><a href="" class="hm-nav-active">推荐</a></li>
			<li><a href="">限时购</a></li>
			<li><a href="">居家</a></li>
			<li><a href="">餐厨</a></li>
			<li><a href="">配件</a></li>
			<li><a href="">服装</a></li>
			<li><a href="">洗护</a></li>
			<li><a href="">婴童</a></li>
			<li><a href="">杂货</a></li>
			<li><a href="">饮食</a></li>
			<li><a href="">志趣</a></li>
		</ul>
		<div class="hm-main">
			<div class="swiper-container" id="swiper-container1">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide">
		            	<div class="recommendHtml">
		            		<div class="swiper-container" id="swiper-container2">
		            			<div class="swiper-wrapper">
		            				<div class="swiper-slide"><img src="../assets/banner0.jpg"></div>
		            				<div class="swiper-slide"><img src="../assets/banner1.jpg"></div>
		            				<div class="swiper-slide"><img src="../assets/banner2.jpg"></div>
		            				<div class="swiper-slide"><img src="../assets/banner3.jpg"></div>
		            				<div class="swiper-slide"><img src="../assets/banner4.jpg"></div>
		            			</div>
		            			<div class="swiper-pagination"></div>
		            		</div>
		            		<div>
		            			轮播图以后的内容
		            		</div>
		            	</div>
		            </div>
		            <div class="swiper-slide">
		            	<div class="timeHtml">
		            		限时购
		            	</div>
		            </div>
		            <div class="swiper-slide">
						<div class="timeHtml">
		            		居家
		            	</div>
		            </div>
		            <div class="swiper-slide">
		            	<div class="kitchen">餐厨</div>
		            </div>
		            <div class="swiper-slide">
		            	<div class="armature">配件</div>
		            </div>
		            <div class="swiper-slide">服装</div>
		            <div class="swiper-slide">洗护</div>
		            <div class="swiper-slide">婴童</div>
		            <div class="swiper-slide">杂货</div>
            		<div class="swiper-slide">饮食</div>
            		<div class="swiper-slide">志趣</div>
        		</div>
   			</div>
		</div>
		<router-link to="/brand">品牌</router-link>
		<router-link to="/hotrecommend">热门推荐</router-link>
	</div>
</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
	export default{
		// data: {

		// },
		methods: function{

		},
		mounted: function(){
			// this.$http.get("../static/")
		}


	}
</script>
<style lang="css">
	/*logo部分*/
	.home{
		width: 100%;
	/*	background-color: #f9f9f9;*/
	font-family: PingFangSC-Light, helvetica, "Heiti SC";
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
		margin-right: 0.42rem;
		line-height: 0.875rem;
	}
	.hm-nav a{
		text-align: center;
		font-size: 0.36rem;
		padding: 5px 6px;
	}
	.hm-nav .hm-nav-active{
		color: #b4282d;
		border-bottom: 2px solid #b4282d;
	} 
</style>