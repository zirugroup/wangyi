<template lang="html">
	<div class="info">
		<div class="infohead">
			<router-link to="/topic">
				<img src="../assets/shouye.png" alt="">
			</router-link>
			<img src="../assets/yanxuan.png">
		</div>
		<div class="swiper-container topicInfo_lunzu">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide items1"></div>
	            <div class="swiper-slide items2"></div>
	            <div class="swiper-slide items3"></div>
	            <div class="swiper-slide items4"></div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination"></div>
	    </div>
	    <div class="infotitle">{{topicInfo.title}}</div>
	    <div class="showhead">
			<div class="icon"><img src="../assets/touxiang3.png" alt="" width="100%" height="100%"></div>
			<p class="nickname">{{topicInfo.nickname}}</p>
		</div>
		<div class="text">
			{{topicInfo.content}}
		</div>
		<div class="tuwen">
			<dl>
				<dt><img src="../assets/xiwan.png" alt=""></dt>
				<dd>茶籽薄荷洗碗皂</dd>
				<dd>￥14.9</dd>
			</dl>
			<dl>
				<dt><img src="../assets/xiyi.png" alt=""></dt>
				<dd>土豆茶树洗衣皂</dd>
				<dd>￥19.9</dd>
			</dl>
		</div>
		<div class="zhuanfa">
			<p>阅读 12868</p>
			<p>转发 385</p>
		</div>
		<div class="liuyanban">
			<p>精选留言</p>
			<img src="../assets/liuyan.png" alt="">
		</div>
		<div class="liuyan">
			<div class="liuyanhead">
				<p>
					<img src="../assets/touxiang1.jpg" alt="">
					<span>杰***卡</span>
					<span></span>
				</p>
				<p>
					<span>11</span>
					<img src="../assets/zan.png" alt="">
				</p>
			</div>
			<p>确实很好用，去污能力很强。</p>
			<p>2017-05-05 23:03:54</p>
		</div>
		<hr>
		<div class="liuyan">
			<div class="liuyanhead">
				<p>
					<img src="../assets/touxiang2.png" alt="">
					<span>f***g</span>
					<span></span>
				</p>
				<p>
					<span>3</span>
					<img src="../assets/zan.png" alt="">
				</p>
			</div>
			<p>在严选基本以每月4/5单的速度败家 入坑太深了...已经基本摸清了套路 啥时候上冰箱储物和姨妈巾...你们上货已经跟不上我安家的速度了</p>
			<p>2017-05-08 12:11:24</p>
		</div>
		<hr>
		<div class="liuyan">
			<div class="liuyanhead">
				<p>
					<img src="../assets/touxiang2.png" alt="">
					<span>m***1</span>
					<span></span>
				</p>
				<p>
					<span>3</span>
					<img src="../assets/zan.png" alt="">
				</p>
			</div>
			<p>相信一定好用</p>
			<p>2017-05-07 10:52:09</p>
		</div>
		<hr>
		<div class="liuyan">
			<div class="liuyanhead">
				<p>
					<img src="../assets/touxiang2.png" alt="">
					<span>s***e</span>
					<span></span>
				</p>
				<p>
					<span>3</span>
					<img src="../assets/zan.png" alt="">
				</p>
			</div>
			<p>好棒的！</p>
			<p>2017-05-06 23:22:00</p>
		</div>
		<div class="items">
			<p></p>
			<p class="tlt">专题推荐/商品推荐</p>
		</div>
		<dl class="topic_item">
			<dt><img src="../assets/tui1.jpg" alt=""  width="100%" height="100%"></dt>
			<dd>设计师们推荐的应季好物</dd>
		</dl>
		<dl class="topic_item">
			<dt><img src="../assets/tui2.jpg" alt=""  width="100%" height="100%"></dt>
			<dd>短途出游的减法方案</dd>
		</dl>
		<dl class="topic_item">
			<dt><img src="../assets/tui3.jpg" alt="" width="100%" height="100%"></dt>
			<dd>旅行必备的单品</dd>
		</dl>
	</div>
</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	import "../../static/css/swiper-3.3.1.min.css"
	import "../../static/js/swiper-3.3.1.min.js"
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
				url:"../../static/json/topicInfo.json",
				dataType:"json",
				success:function(res){
					vm.topicInfo=res.data;
					console.log(res.data)
				}
			})
			var swiper1 = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationType: 'fraction'
		    })
		}
	}
</script>
<style lang="css">
	.info{
			position: relative;
			background-color: #f4f4f4;
		}
		.topicInfo_lunzu {
	        width: 100%;
	        height: 8rem;
	        margin-top: 2rem;
	    }
	    .
	    .swiper-slide {
	        text-align: center;
	        font-size: 18px;
	        background: #fff;
	        line-height: 300px;
	        position: relative;
	    }
	    .swiper-pagination{
	    	width: 1.5rem;
	    	height: 0.45rem;
	    	position: absolute;
	    	font-size: 0.45rem;

	    }
	    .infohead{
	    	width: 100%;
	    	height: 1.3rem;
	    	position: fixed;
	    	top: 0;
	    	z-index: 2;
	    	background-color: #fff;
	    	padding-top: 0.25rem;
	    	border:1px solid #fff;
	    	line-height: 1.75rem;
	    	text-align: center;
	    	
	    }
	    .infohead a img:first-of-type{
	    	width: 0.7rem;
			height: 0.7rem;
			display: block;
			margin-top: 0.25rem;
			margin-left: 0.25rem;
			float: left;
	    }
	    .infohead>img{
	    	width: 4rem ;
	    	height: 1rem ;
	    }
	    .items1{
			background: url("../assets/lun1.jpg");
			background-size: 100% auto;
	    }
	    .items2{
			background: url("../assets/lun2.jpg");
			background-size: 100% auto;
	    }
	    .items3{
			background: url("../assets/lun3.jpg");
			background-size: 100% auto;
	    }
	    .items4{
			background: url("../assets/lun4.jpg");
			background-size: 100% auto;
	    }
	    .infotitle{
			width: 100%;
			height: 0.8rem;
			line-height: 0.8rem;
			font-size: 0.6rem;
			background-color: #fff;
			text-indent:0.25rem; 
	    }
	    .showhead{
			width: 100%;
			height: 1rem;
			background-color: #fff;
		}
		.icon{
			width: 1rem;
			height: 1rem;
			float: left;
			margin-left: 0.25rem;
			line-height: 1rem;


		}
		.icon img{
			width: 0.7rem;
			height: 0.7rem;
			border-radius: 50%;
		}
		.nickname{
			width: 4.25rem;
			height: 0.8rem;
			line-height: 0.8rem;
			font-size: 0.5rem;
			color: #333;
			float: left;
			margin-top: 0.1rem;
		}
		.text{
			font-size: 0.4rem;
			padding: 0.25rem;
			background-color: #fff;
			letter-spacing: 0.035rem;
		}
		.tuwen{
			width: 100%;
			height: 6.5rem;
			background-color: #fff;
			margin-top: 0.25rem;
		}
		.tuwen dl{
			float: left;
			width: 49%;
			border-bottom: 1px solid #f3f3f3;
			padding-bottom: 0.3rem;
			border-top: 1px solid #f3f3f3;

		}
		.tuwen dl:first-of-type{
			border-right: 1px solid #f3f3f3;
		}
		.tuwen dt{
			width: 100%;
			
		}
		.tuwen dt img{
			width: 100%;
		}
		.tuwen dd{
			text-align: center;
			font-size: 0.3rem;
		}
		.tuwen dd:last-of-type{
			margin-top: 0.1rem;
			color: #b4282d;
		}
		.zhuanfa{
			width: 100%;
			height: 0.5rem;
			padding-left: 0.25rem;
			background-color: #fff;
		}
		.zhuanfa p{
			width: 2rem;
			font-size: 0.3rem;
			float: left;
			color: #666;
		}
		.liuyanban{
			height: 0.6rem;
			padding-left:0.25rem;
			margin-top: 0.5rem;
			background-color: #fff;
		}
		.liuyanban p{
			float: left;
			width: 2rem;
			font-size: 0.4rem;
		}
		.liuyanban img{
			float: right;
			width: 0.5rem;
			height: 0.5rem;
			margin-right: 1rem;
		}


		.liuyan{
			width: 100%;
			background-color: #fff;
			
		}
		.liuyanhead{
			width: 100%;
			height: 1rem;
		}
		.liuyanhead p:first-of-type{
			width: 69%;
			height: 1rem;
			line-height: 1rem;
			float: left;
		}
		.liuyanhead p:last-of-type{
			width: 30%;
			height: 1rem;
			line-height: 1rem;
			float: right;
		}
		/*留言板头像*/
		.liuyanhead p:first-of-type img:first-of-type{
			width: 0.6rem;
			height: 0.6rem;
			border-radius: 50%;
			margin-left: 0.3rem;
			margin-top: 0.2rem;
		}
		/*留言板第一个p下所有span*/
		.liuyanhead p:first-of-type span{
			font-size: 0.3rem;
			vertical-align: top;
		}
		/*留言板的vip小图*/
		.liuyanhead p:first-of-type span:nth-of-type(2){
			width: 0.6rem;
			height: 0.6rem;
			display: inline-block;
			background: url(../assets/vip.png) no-repeat 1px 3px;
			background-size: 100%;
		}
		/*留言板第二个p下的点赞个数*/
		.liuyanhead p:last-of-type span{
			margin-left: 1rem;
			vertical-align: top;
		}
		/*留言板点赞图标*/
		.liuyanhead p:last-of-type img{
			width: 0.5rem;
			height: 0.5rem;
			margin-top: 0.2rem;
		}
		.liuyan>p{
			padding: 0.2rem;
		}
		.liuyan p:first-of-type{
			font-size: 0.3rem;
			color: #333;
		}
		.liuyan p:last-of-type{
			font-size: .3rem;
			color: #7f7f7f;
		}
		/*推荐商品头*/
		.items{
			width: 100%;
			height: 1rem;
			position: relative;
		}
		.items p:first-of-type{
			width: 90%;
			height: 50%;
			margin: 0 auto;
			border-bottom: 1px solid #D0D0D0;
			
		}
		.items p:last-of-type{
			height: 0.5rem;
			font-size: 0.4rem;
			line-height: 0.5rem;
			text-align:center;
			position: absolute;
			top: 0.25rem;
			left: 2rem;
			background-color: #f4f4f4;
			color: #999;
		}
		.topic_item {
			margin: 0 auto;
			width: 90%;
			height: 4rem;
			margin-bottom: 0.25rem;
			background-color: #fff;
			
		}
		.topic_item dt{
			width: 90%;
			margin: 0 auto;
		}
		.topic_item dd{
			width: 100%;
			height: 0.6rem;
			font-size: 0.5rem;
			line-height: 0.6rem;
			color: #333;
			text-align: center;
			margin-top: 0.3rem;
		}
</style>