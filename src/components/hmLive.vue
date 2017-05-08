<template lang="html">
	<div class="liveHtml">
		<div class="liBanner">
			<img :src="currentCategory.bannerUrl">
		</div>
		<div class="rc-rcType" v-for="items in categoryItemList">
			<div>
				{{items.category.name}}
				{{items.category.frontDesc}}
			</div>
			<ul class="rc-rcType-ul">
				<li v-for="x in items.itemList">
					<div class="rc-rcType-img">
						<span class="rc-rcType-img-color" v-if="x.colorNum">{{x.colorNum}}色可选</span>
						<div class="rc-rcType-imgUrl"><img :src="x.listPicUrl" /></div>
						<p class="rc-rcType-img-desc">{{x.simpleDesc}}</p>
					</div>
					<div class="rc-rcType-info">
						<p>{{x.name}}</p>
						<p class="rc-rcType-info-pric">￥{{x.retailPrice}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"	
	import Swiper from "../../static/js/swiper-3.3.1.min.js"
	Vue.use(VueResource)
	export default{
		data() {
			return {
				categoryItemList: [],
				currentCategory: {}
			}
		},
		mounted() {
			// 推荐的项目
			this.$http.get("../static/living.json").then(
				function(res){
					console.log(res.body);
					this.categoryItemList = res.body.categoryItemList;
					this.currentCategory = res.body.currentCategory;
			});
		}
	}
</script>
<style lang="css">
	.liveHtml{
		margin-top: 2rem;
	}
	.liBanner{
		width: 100%;
		height: 144px;
		border-bottom: 0.25rem solid #f4f4f4; 
	}
	.liBanner img{
		width: 100%;
		height: 100%;
	}
	/*具体推荐*/
	.rc-rcType{
		width: 100%;
		border-bottom: 0.25rem solid #f4f4f4;
	}
	.rc-rcType>p{
		height: 60px;
		line-height: 60px;
		font-size: 0.4rem;
		color: #333;
		text-align: center;
	}
	.rc-rcType-ul{
		width: 97%;
		padding: 0 1.5%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.rc-rcType-ul li{
		width: 47%;
		height: 270px;
		text-indent: 10px;
		text-align: left;
	}
	.rc-rcType-ul li .rc-rcType-img{
		height: 75%;
		background-color: #f4f4f4;
		position: relative;
	}
	.rc-rcType-ul li .rc-rcType-img span{
		display: inline-block;
		position: absolute;
		font-size: 10px;
		line-height: 11px;
		left: 10px;
		top: 8px;
		padding: 2px 1px;
		width: 12px;
		border: 1px solid #b4a078;
		border-radius: 2px;
		color: #b4a078;
		text-indent: 2px;
		text-align: center;
	}
	.rc-rcType-imgUrl{
		padding: 9px 10px;
		width: 150px;
		margin: 0 auto;
	}
	.rc-rcType-ul li img{
		width: 100%;
		height: auto;
		
	}
	.rc-rcType-ul li .rc-rcType-img .rc-rcType-img-desc{
		background-color: #F1ECE2;
		color: #9F8A60;
		height: 17%;
		font-size: 11px;
		line-height: 30px;
	}
	.rc-rcType-info{
		font-size: 14px;
		line-height: 22px;
		padding-top: 8px;
	}
	.rc-rcType-info .rc-rcType-info-pric{
		color: #b4282d;
	}
	.rc-rcType-last div{
		height: 75%;
		background-color: #f4f4f4;
		font-size: 18px;
		text-align: center;
		line-height: 140px;
		position: relative;
	}
	.rc-rcType-last div span{
		position: absolute;
		left: 40%;
		top: 55%;
		width: 35px;
		height: 35px;
		background: url(../assets/rc-rcType-more.png) no-repeat;
		background-size: cover;
	}
</style>