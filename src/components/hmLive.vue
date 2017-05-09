<template lang="html">
	<div class="liveHtml">
		<div class="liBanner">
			<img :src="currentCategory.bannerUrl">
		</div>
		<div class="rc-rcType" v-for="items in categoryItemList">
			<div>
				<p class="rc-rcType-title">{{items.category.name}}</p>
				<p>{{items.category.frontDesc}}</p>
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
		height: 3.35rem;
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
	.rc-rcType>div{
		height: 1.5rem;
		line-height: 0.65rem;
		font-size: 0.275rem;
		color: #999;
		text-align: center;
	}
	.rc-rcType>div .rc-rcType-title{
		font-size: 0.4rem;
		color: #333;
		line-height: 0.4rem;
		padding-top: 0.375rem;
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
		height: 6.75rem;
		text-indent: 0.25rem;
		text-align: left;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.rc-rcType-ul li .rc-rcType-img{
		height: 75%;
		background-color: #f4f4f4;
		position: relative;
	}
	.rc-rcType-ul li .rc-rcType-img span{
		display: inline-block;
		position: absolute;
		font-size: 0.25rem;
		line-height: 0.275rem;
		left: 0.25rem;
		top: 0.2rem;
		padding: 0.125rem 2px;
		text-indent: 1px;
		width: 0.3rem;
		border: 1px solid #b4a078;
		border-radius: 2px;
		color: #b4a078;
		white-space: normal;
	}
	.rc-rcType-imgUrl{
		padding: 0.225rem 0.25rem;
		width: 100%;
		box-sizing: border-box;
	}
	.rc-rcType-ul li img{
		/*background-color: blue;*/
		margin-left: 0;
		width: 100%;
		height: auto;
	}
	.rc-rcType-ul li .rc-rcType-img .rc-rcType-img-desc{
		background-color: #F1ECE2;
		color: #9F8A60;
		height: 16.5%;
		padding: 0 0.125rem;
		font-size: 0.275rem;
		line-height: 0.75rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.rc-rcType-info{
		font-size: 0.35rem;
		line-height: 0.55rem;
		padding-top: 0.2rem;
/*		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;*/
	}
	.rc-rcType-info .rc-rcType-info-pric{
		color: #b4282d;
	}
</style>