<template lang="html">
	<div class="zhuanti" >
		<div class="nav">
			<router-link to="/topicgroom">
				<div class="lunzou swiper-container">
					<div class="swiper-wrapper topic_all">
							<div class="lunzi item1s tpitem swiper-slide"><span>丁磊私物推荐</span></div>
							<div class="lunzi item2s tpitem swiper-slide"><span>特色系列</span></div>
							<div class="lunzi item3s tpitem swiper-slide"><span>明星商品</span></div>
							<div class="lunzi item4s tpitem swiper-slide"><span>严选幕后</span></div>
							<div class="lunzi item5s tpitem swiper-slide"><span>严选推荐</span></div>
						
					</div>
				</div>
			</router-link>
		</div>
		<div class="show" v-for="x in topicInfo">
			<router-link to="/topicInfo">
				<div class="showhead">
					<div class="icon"><img :src="x.avatar"/></div>
					<p class="nickname">{{x.nickname}}</p>
				</div>
				<dl>
					<dt>
						<img :src="x.scenePicUrl" alt="">
						<p class="distance">
							<img src="../assets/xiaoyanjing.png" alt=""><span>{{x.readCount}}</span>
						</p>
						
					</dt>
					<dd class="price">
						<div>{{x.title}}</div>
						<div>{{x.priceInfo}}元起</div>
					</dd>

					<dd class="account">{{x.subtitle}}</dd>
				</dl>
			</router-link>
		</div>
	</div>
</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	import Swiper from "../../static/js/swiper-3.3.1.min.js"
	Vue.use(VueResource)
	export default{
		data(){
			return{
				address:"aaaa",
				topicInfo:[]
			}
		},
		mounted(){
			var vm=this;
			$.ajax({
				type:"get",
				url:"../../static/json/topic.json",
				dataType:"json",
				success:function(res){
					vm.topicInfo=res.data.topicList;
					console.log(res.data.topicList)
				}
			})
			var swiper2 = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        slidesPerView: 3,
		        paginationClickable: true,
		        spaceBetween: 3
		    })
		}
	}

</script>
<style lang="css">
	@import "../../static/css/swiper-3.3.1.min.css";
	.zhuanti{
		width: 100%;
		height: 100%;
		background-color: #f4f4f4;
	}
	.nav{
			height: 2rem;
			padding: 0.25rem;
			background-color: #fff;
		}
	.lunzou{
        width: 100%;
       	height:2rem;
    }
    .lunzi{
    	width: 32% !important;
    	margin-right: 0.25rem !important;
    	height: 1.8rem;
        text-align: center;
        background: #fff;
        
        /*display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center*/;
    }
    .tpitem{
    	border-radius: 0.1rem 0.1rem 0.1rem 0.1rem;
		width: 32% !important;
    	margin-right: 0.25rem !important;
    	height: 1.4rem;
        text-align: center;
        background: #fff;

    }
	.item1s{
		background: url("../assets/dinglei.jpg");
		background-size: 100% auto;
	}
	.item2s{
		background: url("../assets/tese.png");
		background-size: 100% auto;

	}
	.item3s{
		background: url("../assets/mingxing.png");
		background-size: 100% auto;

	}
	.item4s{
		background: url("../assets/muhou.jpg");
		background-size: 100% auto;

	}
	.item5s{
		background: url("../assets/tuijian.jpg");
		background-size: 100% auto;
		margin-right: 0px !important;

	}
	.tpitem span{
		font-size:0.3rem;
		position: absolute;
		width: 100%;
		left: 0;
		top: 0.5rem;
		text-align: center;
		color: #fff;
	}
	.show{
		width: 100%;
		background-color: #fff;
		margin-bottom: 0.25rem;
	}
	.showhead{
		width: 100%;
		height: 1.2rem;
	}
	.icon{
		width: 1rem;
		height: 1rem;
		float: left;
		margin-left: 0.25rem;
		margin-top: 0.1rem;

	}
	.icon img{
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
	}
	.nickname{
		width: 3.25rem;
		height: 0.8rem;
		line-height: 0.8rem;
		font-size: 0.5rem;
		color: #333;
		float: left;
		margin-top: 0.25rem
	}
	.show dl{
		width: 100%;
		height: 9.55rem;
	}
	.show dt{
		width: 100%;
		position: relative;
		height: 6.3rem;
	}
	.show dt>img{
		width: 100%;
		height: 6.3rem;
	}
	.distance{
		width: 2.5rem;
		height: 0.6rem;
		position: absolute;
		bottom: 0;
		right: 0;
		background:linear-gradient(to right,transparent,rgba(0,0,0,0.5));
	}
	.distance img{
		margin:0.15rem 0.1rem 0 0.5rem;
	}
	.distance span{
		display: block;
		float: right;
		margin: 0.1rem 0.1rem 0 0;
		color: #fff;
		font-size: 0.4rem;
		vertical-align: bottom;
	}
	.price{
		width: 100%;
		height: 0.825rem;
		line-height: 0.825rem;
		margin-top: 0.3rem;
		
	}
	.price div:first-of-type{
		margin-left: 0.25rem;
		font-size: 0.45rem;
		float: left;
	}
	.price div:nth-of-type(2){
		margin-right: 0.4rem;
		font-size: 0.4rem;
		float: right;
		color: #B4282D;
	}
	.account{
		/*height: 0.46rem;*/
		font-size: 0.45rem;
		line-height: .6rem;
		margin-left: 0.25rem;
		margin-top: 0.3rem;
		letter-spacing:0.025rem;
	}
</style>