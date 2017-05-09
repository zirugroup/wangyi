<template lang="html">
	<footer>
	    <router-link to="/">首页</router-link>
	    <router-link to="/topic">专题</router-link>
	    <router-link to="/car">购物车</router-link>
	    <router-link :to="{path :'/classify',query : {index : 0}}">分类</router-link>
	    <router-link to="/mine">个人</router-link>
 	 </footer>
</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
    import classify from "../components/classify.vue"
	Vue.use(VueResource)
	export default{

	}
</script>
<style lang="css">

</style>