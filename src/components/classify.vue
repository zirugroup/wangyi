<template lang="html">
	<div>
		<h1>分类</h1>
		<router-link to="/classifyItems">分类具体</router-link>
		 <div v-for="toobar in res">
	        <div class="search">
                <div>
                    <span>商品搜索，共</span>
                    <span>4000</span>
                    <span>件商品</span>
                </div>
            </div>
            <div class="toolbar" >
                <ul>
                    <li>{{toobar.name}}</li>
                </ul>
            </div>
            <div class="contains" >
                <img :src=toobar.bannerUIrl >
                <div :style="'background:url('+toobar.bannerUrl+');height : 30px;width : 100px'">
                    
                </div>
            </div>
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
                res : "",
            }
        },
        mounted(){
            var that=this;
            var res;
            $.ajax({
                type:"get",
                url : "../../static/json/classfy.json",
                dataType:"json",
                success:function(data){
                    console.log(data);
                    that.res = data;
                }
            })
        }
    }
</script>

<style lang="css">
	
</style>