<template lang="html">
	<div class="itemInfo">
		<div class="itemInfo_title"><a class="left" href="javascript:history.go(-1)"></a><b>商品详情</b><router-link to="/home" tag="span" class="right"></router-link></div>
		<div class="item_main">
			<div class="itemInfo_img">
				<img :src="items_news.listPicUrl">
				<div class="itemInfo_main">
					<ul class="itemInfo_news">
						<li class="itemsnews">
							<p class="item_name">{{items_news.name}}</p>
							<p class="item_intro">{{items_news.simpleDesc}}</p>
							<p class="item_price">￥{{items_news.retailPrice}}</p>
						</li>
						<li class="item_num">
							<span>已选择：1罐装 x1</span>
							<i></i>
						</li>
						<li class="item_active"><div><span>3个促销活动：</span><span class="item_active_title">美食节></span><span class="item_active_content">该商品参与88元任选5件包邮的，，。。。</span></div><i></i></li>
						<li class="item_server"><span class="itemserver">服务：</span>
							<div>
								<p><span><b>不支持无忧退货</b></span><span><b>48小时快速退款</b></span></p>
								<p><span><b>满88元免邮费</b></span><span><b>网易自营品牌</b></span></p>
								<p><span><b>部分地区无法配送</b></span></p>
							</div>
							<i></i>
						</li>
						
					</ul>
					<ul class="item_comment">
						<li>评价(678)<b></b><i>查看全部</i></li>
						<li class="itemcommet"><div>
							<div class="item_user">
								<span class="item_user_img"></span>
								<span class="item_uesr_name">A****单</span>
								<span class="item_uesr_time">2017-05-05 15:05:10</span>
							</div>
							<p>开心果品质不错，原味的喜欢</p>
						</div></li>
					</ul>
					<ul class="item_prop">
						<li>商品参数</li>
						<li>
							<p class="item_prop_left">品名</p><p class="item_prop_right">开心果</p>
						</li>
						<li>
							<p class="item_prop_left">配料</p><p class="item_prop_right">开心果、淀粉、食用盐、白砂糖、味精、食品添加剂(甜蜜素、安赛蜜、糖精钠、TBHQ)、食品用香精</p>
						</li>
						<li>
							<p class="item_prop_left">净含量</p><p class="item_prop_right">142克</p>
						</li>
						<li>
							<p class="item_prop_left">保质期</p><p class="item_prop_right">12个月(常温下)</p>
						</li>
						<li>
							<p class="item_prop_left">产地</p><p class="item_prop_right">浙江省杭州市</p>
						</li>
						<li>
							<p class="item_prop_left">贮存条件</p><p class="item_prop_right">放置阴凉通风干燥处</p>
						</li>
						<li>
							<p class="item_prop_left">致敏物质</p><p class="item_prop_right">本品属于坚果及其果仁类制品</p>
						</li>
						<li>
							<p class="item_prop_left">温馨提示</p><p class="item_prop_right">1、网易严选出售的食品、除明确质量问题外均不接受退换货<br>2、夏秋高温季节，请放入冰箱冷藏，开罐后，请尽快食用；<br>3、适宜五周岁以上人群食用，儿童须在成人监护下食用，如有脱氧剂请勿食用。</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="item_img" v-html="itemInfo">
				{{itemInfo}}
			</div>
			<div class="item_report">
				<p class="itemInfo_report_title"><span>质检报告</span></p>
				<p class="report_img"><img :src="itemimg"/></p>
			</div>
			<div class="item_error">
				<p class="itemInfo_report_title"><span>常见问题</span></p>
				<ul>
					<li v-for="x in errorList">
						<p><span>{{x.question}}</span></p>
						<div v-html="x.answer">{{x.answer}}</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="item_footer">
			<div class="item_person"></div>
			<router-link to="/car" tag="div" class="item_car"><i></i><span class="footer_num" v-show="item_num.length">{{item.length}}</span></router-link>
			<div class="items_buy">
				<router-link to="/car" tag="div" class="item_buy">立即购买</router-link>
				<div class="item_add" @click="addCart(items_news)">加入购物车</div>
			</div>
			
		</div>
	</div>
	
</template>
<script>
	import eventHub from '../buy.js';
	export default{
		data(){
			return {
				itemInfo: '',
				itemimg : '',
				errorList: [],
				items_news : '',
				item_num:eventHub.allItem,
            	item:eventHub.allcount
			}
		},
		mounted (){
			var vm = this;
			$.ajax({
                type:"get",
                url : "../../static/json/item.json",
                dataType:"json",
                success:function(res){
                    vm.itemInfo = res.itemDetail.detailHtml;
                    vm.itemimg = res.reportPicList[0];
                    vm.errorList = res.issueList
                }
            })
		},
		created : function(){
			this.items_news = this.$route.query.object;
		},
		methods: {
			addCart : function(item){
				eventHub.$emit("add",item);
			}
		}
	}

</script>
<style lang="css">
	.item_main{
		padding-bottom: 50px;
	}
	.item_footer{
		border-top: 1px solid #c7c7c7;
		display: flex;
		align-items: center;
		position: fixed;
		bottom: 0;
		height: 50px;
		line-height: 50px;
		width: 100%;
		background-color: #fff;
	}
	.item_footer div{
		border-right: 1px solid #c7c7c7;
		display: inline-block;
	}
	.item_buy{
		color: #333;
		box-sizing:border-box;
		width: 50%;
		float: left;
		height: 50px;
		line-height: 50px;
	}
	.item_add{
		box-sizing:border-box;
		background-color: #b4282d;
		width: 50%;
		float: right;
		height: 50px;
		line-height: 50px;
	}
	.items_buy{
		color:#fff;
		text-align: center;
		width: 67%;
	}
	.item_person{
		width: 40px;
		height: 50px;
		background-image: url(../assets/earphone.png);
		background-size: 70%;
		background-repeat: no-repeat;
		background-position: center;
	}
	.item_person{
		width: 16.5%;
		height: 50px;
		background-image: url(../assets/earphone.png);
		background-size: 50%;
		background-repeat: no-repeat;
		background-position: center;
	}
	.item_car{
		position: relative;
		width: 16.5%;
		height: 50px;
		background-size: 185% ;  
		background-position: 0 12px;
		background-repeat: no-repeat;
	}
	.item_car i{
		margin: 8px 0 0 18px;
		display: inline-block;
		width: 30px;
		height: 30px;
		background-image: url(../assets/footer.png);
		background-repeat: no-repeat;
		background-size: 80%;
		background-position: 0px -26px;
	}
	.item_error{
		padding: 20px 15px;
	}
	.item_error p::before{
		display: inline-block;
		content: "";
		height: 4px;
		width: 4px;
		background-color: #B4282D;
		border-radius: 50%;
	}
	.item_error p{
		margin-bottom: 3px;
	}
	.item_error p span{
		color: #303030;
		margin-left: 5px;
	}
	.item_error div{
		color: #787878;
		margin-left: 10px;
	}
	.itemInfo_report_title{
		position: relative;
		text-align: center;
	}
	.report_img{
		padding: 20px 15px;
	}
	.report_img img{
		width: 100%;
		border-right: 2px solid;
	}
	.itemInfo_report_title::before{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		content: "";
		width: 110px;
		height: 1px;
		margin: auto;
		border-bottom: 1px solid #ccc;
		z-index: 1;
	}
	.itemInfo_report_title p span{
		position: relative;
		background-color: #fff;
		display: inline-block;
		padding: 0 5px; 
		z-index: 999;
	}
	.item_img{
		width: 100%;
	}
	.item_img p img{
		width: 100%;
	}
	.item_prop{
		padding: 10px 10px;
	}
	.item_prop li{
		padding: 5px 0;
		border-bottom: 1px dashed #919191;
	}
	.item_prop_left{
		float: left;
		width: 85px;
	}
	.item_prop_right{
		margin-left: 85px;
	}
	.item_comment{
		padding-left: 10px;
		border-bottom: 10px solid #f4f4f4;
	}
	.item_comment li{
		padding: 10px 0;
		border-bottom: 1px solid #d9d9d9;
	}
	.item_comment p{
		display: inline-block;
		width: 85%;
	}
	.item_comment p span{
		float: right;
	}
	.item_comment .itemcommet{
		border-bottom: 0;
	}
	.itemInfo_main .item_comment li i{
		margin-right: 5px;
		font-style: normal;
		height: 20px;
		width: 75px;
		background-position: right;
		background-size: 38%;

	}
	.item_user{
		width: 100%;
		height: 30px;
		line-height: 30px;
		margin-bottom: 10px;
	}
	.item_uesr_name{
		margin-left: 5px;
	}
	.item_user_img{
		border-radius: 100%;
		background-image: url(../assets/happytx.jpg);
		background-size: 100% 100%;
		float: left;
		height: 30px;
		width: 30px;

	}
	.item_uesr_time{
		float: right;
		margin-right: 20px;
		color: #999;
	}
	.itemserver{
		float: left;
	}
	.itemInfo_news .item_server{
		border-bottom: 0;
	}
	.item_server div{
		display: inline-block;
	}
	ul li.item_server i{
		height: 60px;
	}
	.item_server p span{
		margin-right: 20px;
	}
	.item_server p span::before{
		display: inline-block;
		content: "";
		height: 4px;
		width: 4px;
		background-color: #B4282D;
		border-radius: 50%;
	}
	.item_server p span b{
		color: #7f7f7f;
		margin-left: 5px;
		font-weight: normal;
	}
	.item_active{
		height: 30px;
		line-height: 30px;
		width: 100%;
	}
	.item_active div{
		float: left;
	}
	.item_active_title{
		color: #f48f18;
		border : 1px solid #f48f18;
		padding: 2px 3px;
		border-radius: 4px;

	}
	.item_active_title{
		margin-right: 5px;
	}
	/*.item_active_title:after{
		display: inline-block;
		content: "";
		width: 10px;
		height: 16px;
		background-image: url(../assets/right.png);
		background-size: 100% 100%;
	}*/
	.item_active_content{
		/*display: inline-block;*/
		color: #f48f18;
		float: right;
		width: 130px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}
	.item_num{
		height: 30px;
		line-height: 30px;
		width: 100%;
	}
	.itemInfo_main li i{
		float: right;
		content: "";
		width: 40px;
		height: 100%;
		background-image: url(../assets/right.png);
		background-size: 70%;
		background-repeat: no-repeat;
		background-position: center;
	}
	.itemInfo_main{
	}
	.itemInfo_news li{
		padding: 10px 0;
		border-bottom: 1px solid #d9d9d9;
	}
	.itemsnews{
		padding: 10px 10px 30px;
	}
	.itemsnews p{
		height: 26px;
		line-height: 26px;
		font-size: 16px;
		text-align: center;
	}
	.itemsnews .item_name{
		color: #333;
	}
	.itemsnews .item_intro{
		color: #999;
	}
	.itemsnews .item_price{
		color: #b4282d;
	}
	.itemInfo_title{
		z-index: 999;
		position: fixed;
		height: 1.3rem;
		line-height: 1.3rem;
		width: 100%;
		text-align: center;
		border-bottom: 1px solid rgba(234,234,234,.21);
		background-color: rgba(255,255,255,0.5)
	}
	.itemInfo_title b {
		font-size: 0.45rem;
	}
	.itemInfo_title .left{
		background-color: rgba(255,255,255,.6);
		border-radius: 50%;
		width: 1rem;
		height: 1rem;
		float: left;
		margin-left: 0.2rem;
		margin-top: 6px;
		background-image: url(../assets/back.png);
		background-size: 80% 80%; 
		background-repeat: no-repeat;
		background-position: center;
	}
	.itemInfo_title .right{
		float: right;
		background-image: url(../assets/footer.png);
		background-size: 70% auto;
		background-position: 5px -170px;
		
	}
	.itemInfo_title span{
		margin-top: 6px;
		display: inline-block;
		width: 1rem;
		height: 1rem;
		line-height: 1rem;
		background-color: rgba(255,255,255,.6);
		border-radius: 50%;
		background-position: center;
		background-repeat: no-repeat;
	}
	.itemInfo_img img{
		width: 100%;
		margin-bottom: 5px;
	}
	.itemInfo_news{
		/*margin-bottom: 10px;*/
		font-size: 12px;
		padding-left: 10px;
		border-bottom: 10px solid #f4f4f4;
	}
	
</style>