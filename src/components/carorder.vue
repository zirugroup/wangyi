<template lang="html">
	<div class="car_order_main">
		<div class="car_order_wrap">
			<div class="car_order_head">
				<a class="car_orderLeft" href="javascript:history.go(-1)"></a><span>填写订单</span>
			</div>
			<div class="car_order_notices">
				<i></i>
				<span>北京/西藏刀具商品暂停发货</span>
			</div>

			<div class="car_order_news">
				<div class="car_order_news_border"></div>
				<div class="car_order_user">
					<div class="car_order_name">
						<p>路飞</p>
						<span>默认</span>
					</div>
					<div class="car_order_user_news">
						<p>182****1013</p>
						<p>北京北京市昌平区物美超市</p>
					</div>
					<i></i>
				</div>
			</div>
			<div class="car_order_tic">
				<ul>
					<li class="car_order_seltic"><span>
						请选择优惠券</span>0张<i class="car_right"></i>
					</li>
					<li class="car_box"><i class="car_left"></i>礼品卡: ￥0.00<i class="car_right"></i></li>
				</ul>
			</div>
			<div class="car_order_allCount">
				<ul>
					<li>商品合计<i>￥714.00</i></li>
					<li>优惠券<i>-￥0.00</i></li>
					<li>运费<i>￥0.00</i><span class="car_free">满88元免邮<span class="car_free_tri"></span></span></li>
					<li>活动优惠<i>-￥0.00</i></li>
					<li><i class="car_order_cout_left"></i>我要开发票<i></i></li>
				</ul>
			</div>
			<div class="car_order_allItems">
				<ul>
					<li v-for="x in endItem">
						<div class="car_order_img"><img :src="x.listPicUrl"></div>
						<div class="car_order_itemnews">
							<p>{{x.name}}</p>
							<p class="car_order_type">米色条纹</p>
							<p>￥{{x.retailPrice}}</p>
						</div>
						<div>x{{x.count}}</div>
					</li>
				</ul>
			</div>
			<div class="car_order_agree">
				<i></i>
				<span>我同意</span>
				《严选平台服务协议》
			</div>
		</div>
		<div class="car_order_footer">
			<div class="car_order_price">实付:￥{{itemprice[0]}}</div>
			<div class="car_order_pay">去付款</div>
		</div>
	</div>
	
</template>
<script>
	import eventHub from '../buy.js';
	export default{
		data (){
			return{
				endItem : eventHub.allItem,
				itemprice : eventHub.allprice
			}
		}
	}
</script>
<style lang="css">
	.car_order_wrap{
		margin-bottom: 50px;
	}
	.car_order_footer{
		height: 50px;
		line-height: 50px;
		width: 100%;
		position: fixed;
		color: #b4282d;
		bottom: 0;
		background-color: #fff;
	}
	.car_order_pay{
		float: right;
		width: 30%;
		background-color: #b4282d;
		color: #fff;
		text-align: center;
	}
	.car_order_price{
		margin-left: 10px;
		float: left;
	}
	.car_order_agree i {
		float: left;
		height: 20px;
		width: 20px;
		background-image: url(../assets/rig.png);
		background-repeat: no-repeat;
		background-position: 0px 5px;
		background-size: 70%;
	}
	.car_order_agree span{
		color: #ccc;
		margin-right: 10px;
	}
	.car_order_agree{
		display: flex;
		align-items: center;
		padding: 0 15px;
		height: 80px;
		line-height: 100px;
	}
	.car_order_type{
		color: #ccc;
	}
	.car_order_itemnews{
		width: 80%;
	}
	.car_order_allItems{
		background-color: #fff;
		padding:0 15px;
	}
	.car_order_allItems li{
		display: flex;
		padding: 10px;
		border-bottom: 1px solid #f4f4f4;
	}
	.car_order_img{
		margin-right: 10px;
		width: 20%;
	}
	.car_order_img img{
		width: 100%;
	}
	.car_order_allCount li .car_order_cout_left{
		float: left;
		height: 20px;
		width: 20px;
		background-image: url(../assets/rig.png);
		background-repeat: no-repeat;
		background-position: 0px -33px;
		background-size: 70%;
	}
	.car_order_allCount{
		background-color: #fff;
		padding-left: 10px;
		margin-bottom: 10px;
	}
	.car_order_allCount li i{
		font-style: normal;
		float: right;
		margin-right: 5px;
	}
	.car_order_allCount li{
		font-size: 14px;
		border-bottom: 1px solid #f4f4f4;
		padding: 10px;
	}
	.car_box{
		color: #ccc;
	}
	.car_left{
		float: left;
		height: 20px;
		width: 20px;
		background-image: url(../assets/rig.png);
		background-repeat: no-repeat;
		background-position: 0px -15px;
		background-size: 70%;

	}
	.car_order_tic{
		padding-left: 8px;
		background-color: #fff;
		margin-bottom: 10px;
	}
	.car_order_seltic{
		text-align: right;
	}
	.car_order_seltic span{
		vertical-align: top;
		float: left;
	}
	.car_right{
		float: right;
		display: inline-block;
		width: 20px;
		height: 20px;
		background-image: url(../assets/right.png);
		background-size: 100%;
		background-position: center;

	}
	.car_order_tic li{
		font-size: 14px;
		border-bottom: 1px solid #f4f4f4;
		padding: 10px;
	}
	.car_order_user{
		background-color: #fff;
		font-size: 16px;
		padding: 20px;
		display: flex;
	}
	.car_order_news{
		width: 100%;
		margin-bottom: 10px;
	}
	.car_order_name p{
		margin-bottom: 10px;
	}
	.car_order_user{
		box-sizing: border-box;
		height: 100px;
	}
	.car_order_user i{
		float: right;
		width: 15%;
		height: 100%;
		background-image: url(../assets/right.png);
	}
	.car_order_name span{
		text-align: center;
		padding: 3px 4px;
		border: 1px solid #b4282d;
		color: #b4282d;
		border-radius: 4px;
	}
	.car_order_user_news{
		height: 100%;
		width: 70%;
	}
	.car_order_user_news p{
		margin-bottom: 10px;
	}
	.car_order_name{
		height: 100%;
		width: 20%;
		float: left;
	}
	.car_order_news_border{
		height: 5px;
		width: 100%;
		background-image: url(../assets/order_border.png);
	}
	.car_order_main{
		background-color: #f4f4f4;
	}
	.car_order_notices{
		font-size: 18px;
		color: #f48f18;
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color:#fff8d8; 
		margin-bottom: 10px;
	}
	.car_order_notices i {
		float: left;
		width: 50px;
		height: 50px;
		background-image: url(../assets/listen.png);
		background-size: 40%;
		background-position: center;
		background-repeat: no-repeat;

	}
	.car_order_head .car_orderLeft{
		float: left;
		background-image: url(../assets/back.png);
		background-size: 70%;
		background-position: center;
		background-repeat: no-repeat;
		width: 50px;
		height: 50px;
	}
	.car_order_head{
		background-color: #fff;
		text-align: center;
		height: 50px;
		line-height: 50px;
		width: 100%;
		font-size: 20px;
		border-bottom: 1px solid #f4f4f4;
	}
</style>