<template lang="html">
	<div>
		<div class="sousuo_box">
			<div class="sousuo_head">
				<div class="sousuo_kuang">
					<img src="../assets/sousuo.png" alt="" width="100%" height="100%">
					<input type="text" :placeholder="place.keyword">
				</div>
				<router-link to="/hotrecommend">
				<span>取消</span>
				</router-link>
			</div>
			<div class="sousuo_hot"> 
				<p>热门搜索</p>
				<div class="sousuo_buts">
					<span v-for="x in sousuo">
						{{x.keyword}}
					</span>
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
				address:"aabb",
				sousuo:[],
				place : []
			}
		},
		mounted(){
			var vm=this;
			$.ajax({
				type:"get",
				url:"../../static/json/sousuo.json",
				dataType:"json",
				success:function(res){
					vm.sousuo=res.data.hotKeywordVOList;
					vm.place = res.data.defaultKeywords[0]
					console.log(res.data.hotKeywordVOList)
				}
			})
		}
	}

</script>
<style lang="css">
	.sousuo_box{
		width: 100%;
		height: 100%;
		background-color: #f4f4f4;
	}
	.sousuo_head{
		width: 100%;
		height:1rem;
		background-color: #fff; 
		padding: 0.2rem;

	}
	.sousuo_kuang{
		width: 80%;
		height: 0.8rem;
		background-color: #f4f4f4;
		float: left;
		padding: 0.1rem;
	}
	.sousuo_kuang>img{
		width: 10%;
		height: 0.5rem;
		display: block;
		float: left;
		margin-top: 0.15rem;
	}
	.sousuo_kuang input{
		width: 88%;
		height: 0.8rem;
		font-size: 0.3rem;
		display:block;
		float: right;
		border: none;
		outline: none;
		background-color: #f4f4f4;
	}
	.sousuo_head span{
		font-size: 0.3rem;
		float: left;
		margin-top: 0.3rem;
		margin-left: 0.375rem;
		color: #333;
	}
	/*热门搜索*/
	.sousuo_hot{
		width: 100%;
		background-color: #fff;
	}
	.sousuo_hot>p{
		width: 100%;
		height: 0.5rem;
		line-height: 0.5rem;
		margin-left: 0.25rem;
		font-size: 0.4rem;
		color: #999;
	}
	.sousuo_buts{
		width: 100%;
		padding: 0.25rem;
	}
	.sousuo_buts span{
		height: 0.5rem;
		font-size: 0.5rem;
		background-color: #fff;
		border: 1px solid #999;
		padding: 0.1rem;
		color: #333;
		border-radius: 0.1rem 0.1rem 0.1rem 0.1rem;
		margin-right: 0.35rem;
		margin-top: 0.25rem;
		display: inline-block;
	}
</style>