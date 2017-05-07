<template lang="html">
	<div class="itemInfo">
		<div class="itemInfo_title"><span class="left"></span><b>商品详情</b><span class="right"></span></div>
		<div class="itemInfo_main">
			<div class="itemInfo_img">
				<img src="../assets/happyy.jpg">
				<ul class="itemInfo_news">
					<li class="itemsnews">
						<p>开心果 142克</p>
						<p>无农药，健康不漂白</p>
						<p>￥29.00</p>
					</li>
					<li>
						已选择：1罐装 x1
					</li>
					<li>3个促销活动：<span>美食节</span><span>该商品参与88元任选5件包邮的，，。。。</span></li>
					<li>服务：
						<p><span>不支持无忧退货</span><span>48小时快速退款</span></p>
						<p><span>满88元免邮费</span><span>网易自营品牌</span></p>
						<p><span>部分地区无法配送</span></p>
					</li>
					<li>评价(678)<span>查看全部</span></li>
					<li>评论</li>
				</ul>
				<ul>
					<li>
						<p>品名</p><p>开心果</p>
					</li>
					<li>
						<p>配料</p><p>开心果、淀粉、食用盐、白砂糖、味精、食品添加剂(甜蜜素、安赛蜜、糖精钠、TBHQ)、食品用香精</p>
					</li>
					<li>
						<p>净含量</p><p>142克</p>
					</li>
					<li>
						<p>保质期</p><p>12个月(常温下)</p>
					</li>
					<li>
						<p>产地</p><p>浙江省杭州市</p>
					</li>
					<li>
						<p>贮存条件</p><p>放置阴凉通风干燥处</p>
					</li>
					<li>
						<p>致敏物质</p><p>本品属于坚果及其果仁类制品</p>
					</li>
					<li>
						<p>温馨提示</p><p>1、网易严选出售的食品、除明确质量问题外均不接受退换货<br>2、夏秋高温季节，请放入冰箱冷藏，开罐后，请尽快食用；<br>3、适宜五周岁以上人群食用，儿童须在成人监护下食用，如有脱氧剂请勿食用。</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default{

	}
</script>
<style lang="css">
	.itemInfo_title{
		position: fixed;
		height: 1.3rem;
		line-height: 1.3rem;
		width: 100%;
		text-align: center;
		border-bottom: 1px solid rgba(234,234,234,.21);
		background-color: rgba(255,255,255,0.3)
	}
	.itemInfo_title b {
		font-size: 0.45rem;
	}
	.itemInfo_title .left{
		float: left;
		margin-left: 0.2rem;
		
		background-image: url(../assets/back.png);
		background-size: 80% 80%; 
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
		margin-bottom: 10px;
		border-bottom: 
	}
	.itemInfo_news p{
		height: 26px;
		line-height: 26px;
		font-size: 16px;
	}
</style>