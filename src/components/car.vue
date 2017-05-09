<template lang="html">
	<div class="car">
		<div class="car_header">
			<div class="car_title">购物车</div>
			<ul>
				<li><span></span>30天无忧退货</li>
				<li><span></span>48小时快速退款</li>
				<li><span></span>满88元免邮费</li>
			</ul>
		</div>
		<div class="car_empty" v-if='!isEmpty()'>
			<div class="empty_car"></div>
			<p>去添点什么吧{{address}}</p>
		</div>
		<div class="car_like">
			<p>猜你喜欢</p>
			<div class="likeItems">
				<router-link v-for="(x,key) in carlike" :key="x.id" :to="{path:'/item',query:{object:x}}">
					<dl>
						<dt><img :src="x.listPicUrl"></dt>
						<dd class="likeItems_news">{{x.simpleDesc}}</dd>
						<dd class="likeItems_name">{{x.name}}</dd>
						<dd class="likeItems_price">￥{{x.retailPrice}}</dd>
					</dl>
					<div class="car_clear"></div>
				</router-link>
				<div class="car_clear"></div>
			</div>
		</div>
		
		<router-link to="/carorder">下单</router-link>
	</div>
</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
	export default{
		data (){
			return {
				address : "aaaa",
				carlike : [],
				allItems : ['a']
			}
		},
		mounted (){
			var vm = this;
			$.ajax({
                type:"get",
                url : "../../static/json/carlike.json",
                dataType:"json",
                success:function(res){
                    vm.carlike = res.data.items;
                }
            })
		},
		methods : {
			isEmpty: function(){
				return this.allItems.length>0;
			}
		}
	}
</script>
<style lang="css">
	/*.car_header{
		position: flex;

	}*/
	.car_title{
		height: 1.3rem;
		width: 100%;
		color: #333;
		line-height: 1.3rem;
		text-align: center;
		font-size: 0.55rem;
	}
	.car_empty{
		padding: 1.25rem 0;
		background-color: #F4F4F4;
	}
	.car_empty p{
		text-align: center;
		color: #999;
		font-size: 0.35rem;
	}
	.car_header ul{
		background-color: #F4F4F4;
		height: 1.25rem;
		line-height: 1.25rem;
		padding: 0 0.54rem;
		display: flex;
		font-size: 0.3rem;
		color: #666;
		justify-content: space-between;
	}
	.car_header ul li{
		list-style-position: inside;
	}
	.car_header ul li span{
		display: inline-block;
		margin-right: 0.125rem;
		width: 0.175rem;
		height: 0.175rem;
		background: url(../assets/list.png); 
		background-size: 100% 100%;
	}
	.empty_car{
		width: 100%;
		height: 3.75rem;
		background: url(../assets/car.png) no-repeat;
		background-position: 50%; 
		background-size: auto 100%;

	}
	.car_like{
		padding: 0 0.25rem;
		margin-bottom: 0.9rem;
	}
	.car_clear{
		width: 0;
		height: 0;
		clear: both;
	}
	.car_like p{
		font-size: 0.4rem;
		height: 1.5rem;
		line-height: 1.5rem;
		text-align: center;
	}
	.likeItems a{
		background-color: #F4F4F4;
		float: left;
		width: 49%;
		margin-bottom: 0.4rem;
	}
	.likeItems a:nth-of-type(even){
		float: right;
	}
	.likeItems dl img{
		width: 100%;
	}
	.likeItems dd{
		text-indent: 10px;
	}
	.likeItems_news{
		background-color: #F1ECE2;
		color: #9F8A60;
		font-size: 0.3rem;
		line-height: 1rem;
		height: 1rem;
	}
	.likeItems_name{
		white-space: nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
		font-size: 0.33rem;
		background-color: #fff;
		line-height: 1rem;
		height: 1rem;
	}
	.likeItems_price{
		background-color: #fff;
		font-size: 0.33rem;
		color: #b4282d;
	}
</style>