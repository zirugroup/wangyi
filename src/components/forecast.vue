<template lang="html">
	<div id="new_pro_show">
		<main>
			<p >
				<img src="../assets/446afd6e87dc47dd147fe9324b66c419.jpg"  class="pic1">
			</p>
			<p class="news"><span>每一次上新，都是万里挑一</span></p>
			<ul class="classify">
				<li>综合</li>
				<li @click = filPri()>价格</li>
				<li>分类</li>
			</ul>
			<div class="car_like">	
				<div class="likeItems">
				<div v-for="i in foreshow" class="_proShow">
					<router-link :to="{path:'/item',query:{object:i}}"  class="new_p" >
						<dl>
							<dt><img :src="i.listPicUrl"></dt>
							<dd class="likeItems_news">{{i.simpleDesc}}</dd>
							<dd class="likeItems_name">{{i.name}}</dd>
							<dd class="likeItems_price">￥{{i.retailPrice}}</dd>
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
			foreshow : []
			}
		},
		mounted() {
			var vm_foreshow = this;
			$.ajax({
				type : "get",
				url : "../../static/json/foreshow_product.json",
				dataType : "json",
				success : function(res){
					vm_foreshow.foreshow = res.itemList;
				}
			})
		},
		filters : {

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
.new_p:nth-of-type(1),.new_p:nth-of-type(2){
	margin-top:0.2rem;
}

</style>
