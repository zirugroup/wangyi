<template lang="html">
	<div id="new_pro_show">
		<main>
			<p v-for="ite in newOne">
				<img :src="ite.picUrl" class="pic1">
			</p>
			<p class="news"><span>每一次上新，都是万里挑一</span></p>
			<ul class="classify">
				<li>综合</li>
				<li @click = "retailPrice()">价格</li>
				<li>分类</li>
			</ul>
			<div class="car_like">	
				<div class="likeItems">
					<div v-for="item in newPro">
					<router-link :key="item.id" :to="{path:'/item',query:{object:item}}" class="new_p" >
						<dl>
							<dt><img :src="item.primaryPicUrl"></dt>
							<dd class="likeItems_news">{{item.simpleDesc}}</dd>
							<dd class="likeItems_name">{{item.name}}</dd>
							<dd class="likeItems_price">￥{{item.retailPrice | filterOne("arg",retailPrice)}}</dd>
						</dl>
						<div class="car_clear"></div>
					</router-link>
					</div>
					<div class="car_clear"></div>
				</div>
			</div>	
		</main>
	
	</div>
</template>
<script>
import Vue from "vue"
import VueResource from "vue-resource"
Vue.use(VueResource)
export default{
	data (){
		return {
			price : "",
			newOne : [],
			newPro : [],
			retailPrice : function(){
				console.log(111)
			}
		}
	},
	mounted (){
		this.$http.get("../../static/json/new_product.json").then(function(res){
			console.log(res)
			this.newOne = res.body.newItemAds;
			this.newPro = res.body.newItems.itemList;
		})
	},
	filters : {
		"filterOne" : function(val){
			return val;
		}
	}
}
</script>
<style lang="css">
#new_pro_show .pic1{
	width:100%;
	height:2.6rem;
	border-bottom:0.2rem solid #f5f5f5;
}
#new_pro_show .news{
	width:100%;
	text-align: center;
	line-height: 1.6rem;
	height:1.6rem;
	font-size: 0.4rem;
}
#new_pro_show .classify{
	display: flex;
	justify-content:space-around;
	font-size:0.35rem;
	padding-bottom:0.3rem;
	border-bottom:1px solid #ddd;
}
.new_p:nth-of-type(1), .new_p:nth-of-type(2){
	margin-top:0.2rem;
}
.new_p:nth-of-type(odd){
	margin-right:0.12rem;
	width:48.5%;
}
.new_p:nth-of-type(even){
	margin-left:0.12rem;
	width:48.5%;
}
</style>
