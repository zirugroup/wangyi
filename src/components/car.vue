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
		<div class="car_empty">
			<div class="empty_car"></div>
			<p>去添点什么吧</p>
		</div>
		<div class="car_like">
			<p>猜你喜欢</p>
			<
		</div>
		
		<router-link to="/carorder">下单</router-link>
	</div>
</template>
<script>
	export default{

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
		line-height: 1.575rem;
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
</style>