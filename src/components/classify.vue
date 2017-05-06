<template lang="html">
	<div>
		<h1>分类</h1>
		<router-link to="/classifyItems">分类具体</router-link>
		 <div>
	        <div class="id">{{}}</div>
	        <div class="id">{{}}</div>
	    </div>
	</div>
</template>

<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
    export default{
        data(){
            return{
                ret:'',
                data:''
            }
        },
        mounted(){
            var that=this;
            $.ajax({
                type:"get",
                url : "../../static/json/classfy.json",
                dataType:"json",
                success:function(data){
                    console.log(data);
                }
            })
        }
    }
</script>

<style lang="css">
	
</style>