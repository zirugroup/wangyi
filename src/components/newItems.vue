<template lang="html">
	<div id="new_pro_show">
		<main>
			<p v-for="ite in newOne">
				<img :src="ite.picUrl" class="pic1">
			</p>
			<p class="news"><span>每一次上新，都是万里挑一</span></p>
			<ul class="classify">
				<li>综合</li>
				<li @click="sortData">价格
					<span>
						<span v-show="pribol>1" class="sortUp">↑</span>
						<span v-show="pribol<1" class="sortDown">↓</span>
					</span>
				</li>
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
							<dd class="likeItems_price">￥{{item.retailPrice}}</dd>
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
			priNum : 0,
			pribol : 1,
			price : "1",
			newOne : [],
			newPro : []
		}
	},
	mounted (){
		this.$http.get("../../static/json/new_product.json").then(function(res){
			this.newOne = res.body.newItemAds;
			this.newPro = res.body.newItems.itemList;
		})
	},
	methods : {
		sortData : function(e){
			this.priNum++;
			if(this.priNum%2==0){
				this.newPro = this.newPro.sort((p1,p2)=>{
					this.pribol = 2;
					return p1["retailPrice"]-p2["retailPrice"];
				})
			}else{
				this.newPro = this.newPro.sort((p1,p2)=>{
					this.pribol = 0;
					return p2["retailPrice"]-p1["retailPrice"];
				})
			}

		}
	}
}
</script>
<style lang="css">
.priSel{
	border:0;
}
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
