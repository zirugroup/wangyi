<template lang="html">
	<div class="home">
		<div class="hmHeader">
			<p class="hm-header"><a class="hm-logo"></a><input type="text" class="hm-search" placeholder="商品搜索,共4682款好物"></p>
			<ul class="hm-nav">
				<li><a href="" class="hm-nav-active">推荐</a></li>
				<li><a href="">限时购</a></li>
				<li v-for=" x in htmlData ">
					<a href="">{{x.name}}</a>
				</li>
			</ul>
		</div>
		<div class="hm-main">
			<div class="swiper-container" id="swiper-container1">
		        <div class="swiper-wrapper">
		            <div class="swiper-slide">
		            	<div class="recommendHtml">
		            		<div class="swiper-container" id="swiper-container2">
		            			<div class="swiper-wrapper">
		            				<div class="swiper-slide"><img src="../assets/banner0.jpg"></div>
		            				<div class="swiper-slide"><img src="../assets/banner1.jpg"></div>
		            				<div class="swiper-slide"><img src="../assets/banner2.jpg"></div>
		            				<div class="swiper-slide"><img src="../assets/banner3.jpg"></div>
		            				<div class="swiper-slide"><img src="../assets/banner4.jpg"></div>
		            			</div>
		            			<div class="swiper-pagination"></div>
		            		</div>
		            		<div class="rc-banner-info">
		            			<span>网易自营品牌</span>
		            			<span>30天无忧退货</span>
		            			<span>48小时快速退款</span>
		            		</div>
		            		<div class="rc-prandMarker">
		            			<p class="rc-pm-title">品牌制造商直供<span class="rc-pm-icon"></span></p>
		            			<ul class="rc-pm-ul">
		            				<li class="rc-pm-brand1">
		            					<p><span class="rc-pm-name">CK</span>制造商</p>
		            					<p>39元起</p>
		            					<p class="rc-pm-more"></p>
		            				</li>
		            				<li class="rc-pm-brand2">
		            					<p><span class="rc-pm-name">MUJI</span>制造商</p>
		            					<p>12.9元起</p>
		            				</li>
		            				<li class="rc-pm-brand3">
		            					<p><span class="rc-pm-name">Coach</span>制造商</p>
		            					<p>49元起</p>
		            					<p class="rc-pm-more"></p>
		            				</li>
		            			</ul>
		            		</div>
		            		<div class="rc-newProd">
		            			<div class="rc-np-title">
		            				<p>周一至周四·新品首发</p>
		            				<span>查看全部</span>
		            			</div>
		            			<ul class="rc-np-ul">
	            					<li v-for="x in rcNewItems">
	            						<img :src="x.listPicUrl">
	            						<div class="rc-npInfo">
	            							<p>{{x.name}}</p>
	            							<p  class="rc-npName">{{x.simpleDesc}}</p>
	            							<span>￥{{x.retailPrice}}</span>
	            						</div>
	            					</li>
	            					<li class="rc-npMore">
	            						<p>查看全部</p>
	            					</li>
		            			</ul>
		            		</div>
		            		<div class="rc-hotReco">
		            			<p>人气推荐</p>
		            			<ul>
		            				<li v-for="x in rcHotReco">
		            					<img :src="x.listPicUrl">
		            					<div>
		            						<p>{{x.name}}</p>
		            						<p class="rcHotReco-desc">{{x.simpleDesc}}</p>
		            						<span>￥{{x.retailPrice}}</span>
		            					</div>
		            				</li>
		            			</ul>
		            		</div>
		            		<div class="rc-timeLimit">
		            			<div class="rc-timeLimit-info">
		            				<p>严&nbsp;选&nbsp;限&nbsp;时&nbsp;购</p>
		            				<p>这里有一个计时器</p>
		            				<p class="rc-timeLimit-time">下一场 18:00 开始</p>
		            			</div>
		            			<div class="rc-timeLimit-img">
		            				<p>
		            					<span>￥24</span>
		            					<span class="hm-rc-oriprice">￥30</span>
		            				</p>
		            			</div>
		            		</div>
		            		<div class="rc-chioce">
		            			<p>专题精选</p>
		            			<img src="../assets/hm-rc-choice.jpg">
		            			<div>
		            				<p>成就一室笋香<span>12元起</span></p>
		            				<p  class="rc-chioce-info">三石哥办公室常备小食推荐</p>
		            			</div>
		            		</div>
							<div class="rc-rcType" v-for="items in recommenList">
								<p>{{items.name}}好物</p>
								<ul>
									<li v-for="x in items.itemList">
										<div class="rc-rcType-img">
											<span class="rc-rcType-img-color"></span>
											<img :src="x.listPicUrl" />
											<p class="rc-rcType-img-desc">{{x.simpleDesc}}</p>
										</div>
										<div class="rc-rcType-info">
											<p>{{x.name}}</p>
											<span>{{x.retailPrice}}</span>
										</div>
									</li>
								</ul>
							</div>
		            	</div>
		            </div>
		            <div class="swiper-slide">
		            	<div class="timeHtml">
		            		限时购
		            	</div>
		            </div>
		            <div class="swiper-slide">
						<div class="timeHtml">
		            		居家
		            	</div>
		            </div>
		            <div class="swiper-slide">
		            	<div class="kitchen">餐厨</div>
		            </div>
		            <div class="swiper-slide">
		            	<div class="armature">配件</div>
		            </div>
		            <div class="swiper-slide">服装</div>
		            <div class="swiper-slide">洗护</div>
		            <div class="swiper-slide">婴童</div>
		            <div class="swiper-slide">杂货</div>
            		<div class="swiper-slide">饮食</div>
            		<div class="swiper-slide">志趣</div>
        		</div>
   			</div>
		</div>
		<router-link to="/brand">品牌</router-link>
		<router-link to="/hotrecommend">热门推荐</router-link>
	</div>
</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	import "../../static/css/swiper-3.3.1.min.css"
	import "../../static/js/swiper-3.3.1.min.js"
	Vue.use(VueResource)
	export default{
		data() {
			return {
				htmlData: [],
				rcNewItems: [],
				rcHotReco: [],
				recommenList: []
			}
		},
		mounted() {
			this.$http.get("../static/hmData.json").then(function(res){
				// console.log(res.body);
				this.htmlData = res.body;
			}),
			// 新品首发数据
			this.$http.get("../static/hmNewItems.json").then(function(res){
				// console.log(res.body.itemList);
				this.rcNewItems = res.body.itemList;
			}),
			// 人气推荐数据
			this.$http.get("../static/hmHotReco.json").then(function(res){
				// console.log(res.body.itemList);
				this.rcHotReco = res.body.itemList;
			}),
			// 推荐的项目
			this.$http.get("../static/recommend.json").then(
				function(res){
					console.log(res.body.cateList);
					this.recommenList = res.body.cateList;
			})
			// var mySwiper1 = new Swiper ('#swiper-container1', {
			//     direction: 'vertical'
			// })
			// var mySwiper2 = new Swiper ('#swiper-container2', {
			// 	autoplay: 2000,
			//     direction: 'vertical',	
			//     nested: true,//允许嵌套
   //     			resistanceRatio: 0,
			//     // 如果需要分页器
			//     pagination: '.swiper-pagination'
		 //    })       
		}
	}
</script>
<style lang="css">
	*{
		padding: 0;
		margin: 0;
	}
	img{
		vertical-align: top;
	}
	/*logo部分*/
	.home{
		width: 100%;
	/*	background-color: #f9f9f9;*/
	font-family: PingFangSC-Light, helvetica, "Heiti SC";
	}
	.hmHeader{
		position: fixed;
		background-color: #fff;
		z-index: 6;
	}
	.hm-header{
		width: 100%;
		height: 1rem;
		padding: 0.2rem 0.4rem;
		color: #666;
		box-sizing: border-box;
	}
	.hm-header .hm-logo{
		display: inline-block;
		vertical-align: middle;
		width: 1.7rem;
		height: 0.5rem;
		margin-right: 0.25rem;
		background: url("http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png");
		background-size: cover;
	}
	.hm-header .hm-search{
		display: inline-block;
		vertical-align: middle;
		width: 6.6rem;
		height: 0.7rem;
		text-indent: 1.75rem;
		line-height: 0.75rem;
		border: none;
		border-radius: 5px;
		font-size: 0.38rem;
		font-weight: 500;
		background: #ededed url(//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png) no-repeat 1.125rem center;
		background-size: 0.46rem auto;
	}
	/*nav部分*/
	.hm-nav{
		width: 90%;
		padding-left: 0.375rem;
		height: 0.875rem;
		font-size: 0;
		margin-top: 0.125rem;	
		display: -webkit-box;
		overflow-x: auto;
        -webkit-perspective: 1000;
        -webkit-overflow-scrolling: touch;
	}
	.hm-nav::-webkit-scrollbar{
		display: none;
	}
	.hm-nav>li{
		margin-right: 0.42rem;
		line-height: 0.875rem;
	}
	.hm-nav a{
		text-align: center;
		font-size: 0.36rem;
		padding: 5px 6px;
	}
	.hm-nav .hm-nav-active{
		color: #b4282d;
		border-bottom: 2px solid #b4282d;
	} 
	.hm-main{
		padding-top: 2rem;
		color: #888;
	}
	/*轮播图*/
	.hm-main .swiper-slide{
		width: 100%;
	}
	#swiper-container2 img{
		width: 100%;
		height: 4.5rem;
	}
	/*推荐页*/
	.rc-banner-info{
		width: 97%;
		padding-left: 3%;
		display: flex;
		height: 0.875rem;
		line-height: 0.875rem;
		font-size: 0.3rem;
		border-bottom: 0.25rem solid #f4f4f4;
	}
	.rc-banner-info span{
		color: #333;
		width: 26%;
		padding-left: 6%;
		background: url(../assets/hm-right.png) no-repeat 0 center;
		background-size: 0.45rem auto;
	}
	/*品牌直供*/
	.rc-prandMarker{
		width: 94%;
		height: 7.25rem;	
		padding: 0 3% 0.25rem;
		border-bottom: 0.25rem solid #f4f4f4;
	}
	.rc-pm-title{
		color: #666;
		font-size: 0.36rem;
		width: 100%;
		height: 1.25rem;
		line-height: 1.25rem;
		text-align: center;
	}
	.rc-pm-icon{
		display: inline-block;
		vertical-align: middle;
		margin-left: 0.1rem;
		width: 0.375rem;
		height: 0.375rem;
		background: url(../assets/hm-rc-more.png) no-repeat;
		background-size: cover;
	}
	.rc-pm-ul{
		width: 100%;
		height: 6rem;
	}
	.rc-pm-ul>li{
		box-sizing: border-box;
		width: 49.5%;
		height: 50%;
		padding: 4% 0 0 4%;
		float: left;
		margin: 0 1px 1px 0;
	}
	.rc-pm-ul>li p{
		color: #666;
		font-size: 15px;
		line-height: 22px;
	}
	.rc-pm-ul>li .rc-pm-name{
		color: #000;
	}
	.rc-pm-ul>li .rc-pm-more{
		width: 0.75rem;
		height: 0.5rem;
		background: url(../assets/hm-rc-new.png) no-repeat;
		background-size: 30px auto;
	}
	.rc-pm-ul .rc-pm-brand1{
		height: 100%;
		background: url(../assets/hm-rc-pm1.jpg) no-repeat 0 -0.375rem;
		background-size: 100% auto;
	}
	.rc-pm-ul .rc-pm-brand2{
		background: url(../assets/hm-rc-pm2.jpg) no-repeat;
		background-size: cover;
	}
	.rc-pm-ul .rc-pm-brand3{
		background: url(../assets/hm-rc-pm3.png) no-repeat;
		background-size: cover;
	}
	/*周一周四新品首发*/
	.rc-newProd{
		width: 100%;
		border-bottom: 0.25rem solid #f4f4f4;
	}
	.rc-np-title{
		height: 1.75rem;
		background: url(../assets/hm-newProd.png) no-repeat;
		background-size: cover;
		font-size: 0.45rem;
		padding-top: 1rem;
		line-height: 0.6rem;
		text-align: center;
		position: relative;
	}
	.rc-np-title::after{
		content: "";
		display: block;
		width: 0;
		height: 0;
		border: 0.225rem solid transparent;
		border-top-color: #F3EBD9;
		position: absolute; 
		left: 50%;
		top: 2.75rem;
	}
	.rc-np-title span{
		color: #888;
		padding-right: 0.3rem;
		font-size: 0.3rem;
		background: url(../assets/hm-rc-newright.png) no-repeat 1.3rem center;
		background-size: 0.15rem auto;
	}
	.rc-np-ul{
		width: 100%;
		height: 5.75rem;
		padding: 0.375rem 0.5rem;
		display: -webkit-box;
		overflow-x: auto;
        -webkit-perspective: 1000;
        -webkit-overflow-scrolling: touch;
	}
	.rc-np-ul::-webkit-scrollbar{
		display: none;
	}
	.rc-np-ul li{
		font-size: 0.35rem;
		width: 40%;
		text-align: center;
		margin-right: 2px; 
		line-height: 0.5rem;
	}
	.rc-np-ul li img{
		width: 100%;
		height: 110%;
		margin-bottom: 0.25rem;
	}
	.rc-np-ul li .rc-npName{
		font-size: 0.3rem;
	}
	.rc-np-ul .rc-npInfo span{
		color: #b4282d;
	}
	.rc-np-ul .rc-npMore{
		padding: 1rem 0.5rem;
	}
	.rc-np-ul .rc-npMore p{
		line-height: 3.5rem;
		height:  3.5rem;
		border: 0.1rem solid #ededed;
	}
	/*人气推荐部分*/
	.rc-hotReco{
		width: 100%;
		border-bottom: 0.25rem solid #f4f4f4;
	}
	.rc-hotReco>p, .rc-chioce>p{
		height: 1.375rem;
		line-height: 1.375rem;
		font-size: 0.4rem;
		color: #333;
		text-align: center;
		background: url(../assets/hm-rc-more.png) no-repeat 63% center;
		background-size: 0.4rem auto;
	}
	.rc-hotReco ul{
		padding: 0 10px;
	}
	.rc-hotReco ul li{
		width: 100%;
		border-top: 1px solid #f4f4f4;
		height: 3.25rem;
	}
	.rc-hotReco ul li img{
		display: inline-block;
		width: 45%;
		height: 100%;
	}
	.rc-hotReco ul li div{
		width: 50%;
		display: inline-block;
		margin: 0.625rem 0; 
		line-height: 0.625rem;
		font-size: 0.375rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.rc-hotReco .rcHotReco-desc{
		font-size: 11px;
	}
	.rc-hotReco ul li div span{
		color: #b4282d;
	}
	/*严选限时购*/
	.rc-timeLimit{
		width: 100%;
		height: 4.75rem;
		display: flex;
		justify-content: space-around;
		border-bottom: 0.25rem solid #f4f4f4;
	}
	.rc-timeLimit div{
		width: 47%;
	}
	.rc-timeLimit .rc-timeLimit-info{
		padding: 1.25rem 0.5rem;
		font-size: 0.45rem;
		line-height: 0.65rem;
		box-sizing: border-box;
	}
	.rc-timeLimit-info .rc-timeLimit-time{
		font-size: 0.3rem;
	}
	.rc-timeLimit .rc-timeLimit-img{
		background: url(../assets/hm-timeLimit.png) no-repeat;
		background-size: 97% auto;
		position: relative;
		font-size: 0.375rem;
		color: #fff;
		line-height: 0.375rem;
		text-align: center;
	}
	.rc-timeLimit .rc-timeLimit-img p{
		position: absolute;
		right: 0.75rem;
		bottom: 0.75rem;
		width: 1.25rem;
		height: 1rem;
		padding-top: 0.25rem;
		border-radius: 50%;
		background-color: rgba(244,143,24,.95);
	}
	.rc-timeLimit .rc-timeLimit-img .hm-rc-oriprice{
		text-decoration: line-through;
	}
	/*专题精选*/
	.rc-chioce{
		width: 100%;
		height: 310px;
		border-bottom: 0.25rem solid #f4f4f4;
	}
	.rc-chioce img{
		margin: 0 10px;
		width: 90%;
		height: 185px;
	}
	.rc-chioce div{
		padding: 15px 0 8px 10px;
		font-size: 14px;
		font-weight: bold;
	}
	.rc-chioce div span{
		color: #b4282d;
		margin-left: 8px;
	}
	.rc-chioce div .rc-chioce-info{
		font-size: 11px;
		font-weight: normal;
		color: #999;
	}
	/*具体推荐*/
	.rc-rcType{
		width: 100%;
		border-bottom: 0.25rem solid #f4f4f4;
	}
	.rc-rcType>p{
		height: 60px;
		line-height: 60px;
		font-size: 0.4rem;
		color: #333;
		text-align: center;
	}
	.rc-rcType>ul{
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.rc-rcType>ul li{
		width: 45%;
		height: 300px;
		background-color: pink;
	}
	.rc-rcType .rc-rcType-img{
		
	}
</style>