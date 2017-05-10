<template lang="html">
	<div>
		<div class="topicgroom_box">
			<div class="topicgroom_head">
				<router-link to="/topic">
					<img src="../assets/shouye.png" alt="" width="100%" height="100%">
				</router-link>
				<span>丁磊私物推荐</span>
			</div>
			<div class="topicgroom_show" v-for="x in topicgroom">
				<router-link to="/topic/topicInfo">
					<div class="topicgroom_showhead">
						<div class="topicgroom_icon"><img :src="x.avatar"/></div>
						<p class="topicgroom_nickname">{{x.nickname}}</p>
					</div>
				</router-link>
				<dl>
					<dt>
						<img :src="x.scenePicUrl" alt="">
						<p class="topicgroom_distance">
							<img src="../assets/xiaoyanjing.png" alt=""><span>{{x.readCount}}</span>
						</p>
					</dt>
					<dd class="topicgroom_price">
						<div>{{x.title}}</div>
						<div>{{x.priceInfo}}元起</div>
					</dd>

					<dd class="topicgroom_account">{{x.subtitle}}</dd>
				</dl>
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
				address:"aaab",
				topicgroom:[]
			}
		},
		mounted(){
			var vm=this;
			$.ajax({
				type:"get",
				url:"../../static/json/topicgroom.json",
				dataType:"json",
				success:function(res){
					vm.topicgroom=res.data.topicList;
					console.log(res.data.topicList)
				}
			})
		}
	}
</script>
<style lang="css">
	.topicgroom_box{
		width: 100%;
		height: 100%;
		background-color: #f4f4f4;
	}
	.topicgroom_head{
		width: 100%;
		height: 1rem;
		text-align: center;
		font-size: 0.45rem;
		line-height: 0.45rem;
		background-color: #fff;
		margin-bottom: 0.25rem;
	}
	.topicgroom_head img{
		width: 0.5rem;
		height: 0.5rem;
		display: block;
		margin-left: 0.25rem;
		margin-top: 0.2rem;
		vertical-align:top;
		float: left;
	}
	.topicgroom_head span{
		line-height: 1rem;
	}
	.topicgroom_show{
		width: 100%;
		background-color: #fff;
		margin-bottom: 0.25rem;
	}
	.topicgroom_showhead{
		width: 100%;
		height: 1.2rem;
	}
	.topicgroom_icon{
		width: 1rem;
		height: 1rem;
		float: left;
		margin-left: 0.25rem;
		margin-top: 0.1rem;

	}
	.topicgroom_icon img{
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 50%;
	}
	.topicgroom_nickname{
		width: 3.25rem;
		height: 0.8rem;
		line-height: 0.8rem;
		font-size: 0.5rem;
		color: #333;
		float: left;
		margin-top: 0.15rem
	}
	.topicgroom_show dl{
		width: 100%;
		height: 9.55rem;
	}
	.topicgroom_show dt{
		width: 100%;
		position: relative;
		height: 6.3rem;
	}
	.topicgroom_show dt>img{
		width: 100%;
		height: 6.3rem;
	}
	.topicgroom_distance{
		width: 2.5rem;
		height: 0.6rem;
		position: absolute;
		bottom: 0;
		right: 0;
		background:linear-gradient(to right,transparent,rgba(0,0,0,0.5));
	}
	.topicgroom_distance img{
		margin:0.15rem 0.1rem 0 0.5rem;
	}
	.topicgroom_distance span{
		display: block;
		float: right;
		margin: 0.1rem 0.1rem 0 0;
		color: #fff;
		font-size: 0.4rem;
		vertical-align: bottom;
	}
	.topicgroom_price{
		width: 100%;
		height: 0.825rem;
		line-height: 0.825rem;
		margin-top: 0.3rem;
		
	}
	.topicgroom_price div:first-of-type{
		margin-left: 0.25rem;
		font-size: 0.45rem;
		float: left;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.topicgroom_price div:nth-of-type(2){
		margin-right: 0.4rem;
		font-size: 0.4rem;
		float: right;
		color: #B4282D;
	}
	.topicgroom_account{
		/*height: 0.46rem;*/
		font-size: 0.4rem;
		line-height: .6rem;
		margin-left: 0.25rem;
		margin-top: 0.3rem;
		letter-spacing:0.025rem;
	}
</style>