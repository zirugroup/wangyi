<template lang="html">
	<div class="car">
		<div class="car_title">购物车</div>
		<div class="car_empty">
			<ul>
				<li><span></span>30天无忧退货</li>
				<li><span></span>48小时快速退款</li>
				<li><span></span>满88元免邮费</li>
			</ul>
		</div>
		
		<router-link to="/carorder">下单</router-link>
	</div>
</template>
<script>
	export default{

	}
</script>
<style lang="css">
	.car_title{
		height: 1.575rem;
		width: 100%;
		color: #333;
		line-height: 1.575rem;
		text-align: center;
		font-size: 0.65rem;
	}
	.car_empty{
		background-color: #F4F4F4;
	}
	.car_empty ul{
		height: 1.25rem;
		line-height: 1.25rem;
		margin: 0 0.54rem;
		display: flex;
		font-size: 0.425rem;
		color: #666;
		justify-content: space-between;
	}
	.car_empty ul li{
		list-style-position: inside;
	}
	.car_empty ul li span{
		display: inline-block;
		margin-right: 0.125rem;
		width: 0.175rem;
		height: 0.175rem;
		background: url(../assets/list.png); 
		background-size: 100% 100%;
	}
</style>