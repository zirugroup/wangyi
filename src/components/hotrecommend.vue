<template lang="html">
	<div id="hotrecommend">
		<header>
			<span class="back"><router-link to="/home">&lt;</router-link></span>
			<router-link class="title" to="/hotrecommend/newItems" active-class="active_show">新品</router-link>
			<router-link class="title" to="/hotrecommend/forecast" active-class="active_show">预告</router-link>
		</header>
		<router-view></router-view>
	</div>
</template>
<script>
import Vue from "vue"
import VueResource from "vue-resource"
Vue.use(VueResource)
	export default{

	}
</script>
<style lang="css">
#hotrecommend header{
	height:1rem;
	background:#eee;
	line-height: 1rem;
	padding-left:0.3rem;
	font-size:0;
	padding-bottom:0.1rem;
}
#hotrecommend .back{
padding-right:3.1rem;
font-size:0.5rem;
}
#hotrecommend .title{
	font:normal 0.3rem "微软雅黑";
	padding:0.1rem 0.3rem;
	border:1px solid #666;
}
#hotrecommend .active_show{
	color:#fff;
	background: #666;
	text-decoration: none;
}
</style>