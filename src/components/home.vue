<template lang="html">
	<div>
		<h1>首页</h1>
		<router-link to="/brand">品牌</router-link>
		<router-link to="/hotrecommend">热门推荐</router-link>
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
	
</style>