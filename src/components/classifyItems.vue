<template lang="html">
	<div>
		<!-- <router-link to="/item">单品</router-link> -->
		<div>
			<div class="data-reactid">
				
			</div>
			<div>
				<div v-for="x in res.subCateList">{{x.name}}</div>
			</div>
			<div></div>
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
                    that.res = data;
                }
            });
        },
	}
</script>
<style lang="css">
	@import '../../static/css/classfy.css';
</style>