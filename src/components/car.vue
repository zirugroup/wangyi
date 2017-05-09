<template lang="html">
	<div class="car">
		<div class="car_header">
			<div class="car_title">购物车<span class="car_mod" @click="modHtml" v-if='isEmpty()'>编辑</span></div>
			<ul v-if='!isEmpty()'>
				<li><span></span>30天无忧退货</li>
				<li><span></span>48小时快速退款</li>
				<li><span></span>满88元免邮费</li>
			</ul>
			<div class="car_again" v-if='isEmpty()'>
			<span>再购￥29.00可免邮费</span></div>
		</div>
		<div class="car_empty" v-if='!isEmpty()'>
			<div class="empty_car"></div>
			<p>去添点什么吧{{address}}</p>
		</div>
		<div class="car_items" v-show='!ismod' v-for="x in itemCount">
			<div class="car_full"><span>满折</span><i>再购1件，满2件享88折></i></div>
			<div class="car_itemInfo">
				<div class="car_selected_div"><span class="car_selected"></span></div>
				<div class="car_img"><img :src='x.listPicUrl'/></div>
				<div class="car_content">
					<p>{{x.name}}</p>
					<p>波普深蓝</p>
					<p>￥{{x.retailPrice}}</p>
				</div>
				<div class="car_num">
					<p>x{{x.count}}</p>
					<p>优惠活动</p>
				</div>
			</div>
		</div>
		<div class="mod_car_items" v-show="ismod" v-for="x in itemCount">
			<div class="car_full"><span>满折</span><i>再购1件，满2件享88折></i></div>
			<div class="car_itemInfo">
				<div class="car_selected_div"><span class="car_unselected"></span></div>
				<div class="car_img"><img :src='x.listPicUrl'/></div>
				<div class="car_mod_price">
					<p>￥{{x.retailPrice}}</p>
				</div>
				<div class="car_mod_num">
					<p>已选择：米色条纹</p>
					<p><span>-</span><span>{{x.count}}</span><span @click="addnum(x)">+</span></p>
				</div>
			</div>
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
		<div class="car_footer" v-show='!ismod'>
			<div class="car_all">
				<div class="car_selectall"></div>
				<div class="allcount">已选({{count}})</div>
			</div>
			<div class="car_order">
				<div class="allprice">￥{{itemprice}}</div>
				<div class="order_sure">下单</div>
			</div>
		</div>	
		<router-link to="/carorder">下单</router-link>
	</div>
</template>
<script>
	import Vue from "vue";
	import VueResource from "vue-resource";
	import eventHub from '../buy.js';
	Vue.use(VueResource)
	export default{
		data (){
			return {
				address : "aaaa",
				carlike : [],
				itemCount : [],
				count : '',
				itemprice : '',
				ismod : false
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
				return this.itemCount.length>0;
			},
			modHtml : function(){
				if($('.car_mod').html()=='编辑'){
					$('.car_mod').html('完成');
					this.ismod = true;
				}else{
					$('.car_mod').html('编辑');
					this.ismod = false;
				}
			},
			addnum : function(item){
				console.log(item.count);
				eventHub.$emit("add",item);
			}
		},
		created(){
			this.itemCount = eventHub.allItem;
			this.count = eventHub.allcount;
			this.itemprice = eventHub.allprice;
		}
	}
</script>
<style lang="css">
	.car_unselected{
		height: 20px;
		background-position: 10px -90px;
		margin-top: 10px;
		display: inline-block;
		width: 25px;
		background-size: 60%;
		background-repeat: no-repeat;
		background-image: url(../assets/rig.png);
	}
	.car_mod_price{
		width: 15%;
		height: 100%;
		display: flex;
		align-items:flex-end;
	}
	.car_mod_num{
		text-align: right;
		width: 45%;
		height: 100%;
		display: flex;
		flex-direction:column;
		justify-content: space-between;
	}
	.car_mod_num span{
		display: inline-block;
		width: 30px;
		border:1px solid #f4f4f4;
		text-align: center;
		height: 20px;
	}
	.car_footer{
		width: 100%;
		height: 1.3rem;
		position: fixed;
		bottom:1.3rem;
		display: flex;
		background-color: #fff;
	}
	.car_all {
		width: 50%;
		display: flex;
		align-items: center;
	}
	.allcount{
		padding-left: 10px;
	}
	.car_order {
		width: 50%;
		display: flex;
		justify-content:space-around;
		align-items: center;
	}
	.car_order div{
		height: 100%;
		line-height: 1.3rem;
		text-align: center;
	}
	.allprice{
		width: 35%;
		color: #b4282d;
	}
	.order_sure{
		width: 65%;
		color: #fff;
		background-color: #b4282d;
	}
	.car_selectall{
		margin-top: 10px;
		width: 25px;
		height: 25px;
		background-position: 10px -75px;
		background-size: 60%;
		background-repeat: no-repeat;
		background-image: url(../assets/rig.png);
	}
	.car_items{
		border-bottom: 10px solid #f4f4f4;
	}
	.car_num{
		height: 100%;
		width: 15%;
		text-align: right;
		display: flex;
		flex-direction : column;
		justify-content: space-between;

	}
	.car_content{
		width: 45%;
	}
	.car_img{
		width: 65px;
		height: 65px;
		padding-right: 10px;
	}
	.car_itemInfo{
		padding: 10px 0;
		width: 100%;
		height: 65px;
		display: flex;
		align-items: center;
	}
	.car_img img{
		width: 100%;
	}
	.car_selected_div{
		width: 15%;
		height: 100%;
	}
	.car_selected{
		margin-top: 20px;
		display: inline-block;
		width: 25px;
		height: 25px;
		background-position: 10px -75px;
		background-size: 60%;
		background-repeat: no-repeat;
		background-image: url(../assets/rig.png);
	}
	.car_full{
		height: 50px;
		line-height: 50px;
		padding: 0 10px;
		border-bottom: 1px solid #f4f4f4;
	}
	.car_full span{
		color: #f48f18; 
		border: 1px solid #f48f18;
		padding: 3px;
		border-radius: 3px;
		margin-right: 5px;
	}
	.car_full i{
		font-style: normal;
	}
	.car_again{
		background-color: #fff8d8;
		color: #f48f18;
		padding: 0 10px;
		height: 35px;
		line-height: 35px;
	}
	.car_again span{
		height: 35px;
		padding-right: 20px;
		display: inline-block;
		background-image: url(../assets/carright.png);
		background-position: center right;
		background-repeat: no-repeat;
		background-size: 7%;
	}
	.car_title{
		height: 1.3rem;
		width: 100%;
		color: #333;
		line-height: 1.3rem;
		text-align: center;
		font-size: 0.55rem;
	}
	.car_title span{
		float: right;
		font-size: 16px;
		margin-right: 15px;
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