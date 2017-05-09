<template lang="html">
	<div class="myOrder">
		<header>
			<span class="back"><router-link to="mine">&lt;</router-link></span>
			<span class="addman">我的订单</span>
			<nav id="orderNav" class="orderNav z-tab">
				<li>全部</li>
				<li>代付款</li>
				<li>代发货</li>
				<li>已发货</li>
				<li>待评价</li>
			</nav>
		</header>
		
	</div>	
</template>
<script>
import Vue from "vue"
import VueResource from "vue-resource"
import tab from "../../static/js/jquery-tab.js"
Vue.use(VueResource)
	export default{
		mounted() {
			$("#orderNav").tab({
			    tips: true,//是否有滑动条  默认为true
			    event : "click",//滑动条触发方式  默认mouseover，接受标准事件
			    swiper : true,//滑动条是否有动画  默认true
			    tipsPosition: "bottom",//滑动条出现的位置  默认top 接受bottom
			    callback: function(index, str) { //触发选项卡时的事件，传回该元素的index值，从0开始，及该元素的文本内容
			        console.log(index, str)
			    }
			});
		}
		}

</script>
<style lang="css">
@import "../../static/css/jquery-tab.css";
.myOrder{
	padding-top:0.35rem;
	background: #F4F4F4;
}
.myOrder .back{
	font-size:0.5rem;
	margin-left:0.5rem;
	margin-right:3.1rem;
}
.myOrder .addman{
	font:normal 0.4rem "微软雅黑";
}
.orderNav{
	padding:0.2rem 0 0.1rem 0;
	display: flex;
	justify-content:space-around;
}
</style>