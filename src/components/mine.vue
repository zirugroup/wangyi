<template lang="html">
	<div class="mine">
		<dl class="mine-head">
		<dt class="mine-head-portrait"></dt>
		<dd class="account-number">
			<span>959418392</span>
			<span>普通用户</span>
		</dd>
		</dl>
		<div class="my_indent">
			<div class="indent"><router-link to="/myOrder"><p class="ind">我的订单<span>&gt;</span></p></router-link></div>
			<div class="tools ind">
				<p class="tool">
					<span class="waitpay">&#xe64a;</span>
					<a href="#">代付款</a>
				</p>
				<p class="tool">
					<span class="waitpay">&#xe65e;</span>
					<a href="#">代发货</a>
				</p>	
				<p class="tool">
					<span class="waitpay">&#xe632;</span>
					<a href="#">已发货</a>
				</p>	
				<p class="tool">
					<span class="waitpay">&#xe616;</span>
					<a href="#">待评价</a>
				</p>	
				<p class="tool">
					<span class="waitpay">&#xe65c;</span>
					<a href="#">售后服务</a>
				</p>
			</div>
		</div>
		<div class="gap1"></div>
		<div class="group_indent indent"><p class="ind"><span class="icon-ahead"><a class="icon_ahead">&#xe647;</a>我的拼团订单</span><span>&gt;</span></p></div>
		<div class="gap1"></div>
		<div class="lists_indent indent">
			<p class="ind"><span><a class="icon_ahead">&#xe638;</a>优惠券</span><span>&gt;</span></p>
			<p class="ind"><span><a class="icon_ahead">&#xe868;</a>优先购</span><span>&gt;</span></p>
			<p class="ind"><span><a class="icon_ahead">&#xe617;</a>礼品卡</span><span>&gt;</span></p>
			<p class="ind"><span><a class="icon_ahead">&#xe639;</a>会员福利</span><span>&gt;</span></p>
			<p class="ind"><span><a class="icon_ahead">&#xe669;</a>我的收藏</span><span>&gt;</span></p>
			<p class="ind"><span><a class="icon_ahead">&#xe646;</a>我的足迹</span><span>&gt;</span></p>
			<p class="ind"><router-link to="/myAddress"><a class="icon_ahead">&#xe6e2;</a>地址管理</router-link><span>&gt;</span></p>
		</div>
		<div class="gap1"></div>
		<div class="lists_indent2 indent">
			<p class="ind"><span><a class="icon_ahead">&#xe600;</a>在线客服</span><span>&gt;</span></p>
			<p class="ind"><span><a class="icon_ahead">&#xe6a6;</a>帮助中心</span><span>&gt;</span></p>
			<p class="ind indsystool"><span><a class="icon_ahead">&#xe629;</a>系统设置</span><span>&gt;</span></p>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style lang="css">
html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img { margin:0; padding:0; }
fieldset, img { border:none; }
address, caption, cite, code, dfn, th, var { font-style:normal; font-weight:normal; }
ul, ol { list-style:none; } 
body { color:#333; font:12px/20px "SimSun","宋体","Arial Narrow",HELVETICA; background:#fff;/* overflow-y:scroll;*/ overflow-x:hidden;}
a { color:#666; text-decoration:none; }
a:visited { color:#666; }
a:hover, a:active, a:focus { color:#ff8400; text-decoration:underline; }
html {font-size:40px;}
.mine{
overflow:visible;
margin-bottom:0.6rem;
}
.mine-head{
	width:100%;
	height:4rem;
	display: flex;
	flex-direction:row;
	background:url(http://yanxuan.nosdn.127.net/6ae93353e95b3450a2710bb43f925a63.jpg);
	padding:1rem 0 0 0.5rem;
	box-sizing:border-box;
}
.mine-head-portrait{
	width:2rem;
	height:2rem;
	background:url(http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png) no-repeat;
	background-size:2rem 2rem;
	border-radius: 50%;
}
.account-number{
	width:3rem;
	height:1.8rem;
	white-space:nowrap;
	overflow:hidden;
	text-overflow:ellipsis;
	display:flex;
	flex-direction:column;
	color:#fff;
	font-size:0.5rem;
	font-weight:600;
	letter-spacing:1px;
	padding:0.4rem 0 0 0.3rem;
}
.account-number span:nth-of-type(2){
	color:#7f7f7f;
	font-size:0.37rem;
	display: inline-block;
	padding-top:0.1rem;
}
.indent{
	padding-left:0.3rem;
}
.ind{
	padding:0.4rem 0.3rem 0.4rem 0;
	border-bottom:1px solid #ddd;
	box-sizing:border-box;
	display: flex;
	justify-content:space-between;
	font-size:0.35rem;
}
.tools{
	padding-left:0.3rem;
}
.tool{
	text-align:center;
	display:flex;
	flex-direction:column;
}
.tool a {
	font-size:0.35rem;
	padding-top:0.2rem;
}
.tools .ind {
	border:0;
	padding-top:0;
}
/*.tools p{
	padding-top:1rem;
}*/
.gap1{
	height:0.3rem;
	background: #e3e4e5;
}
.my_indent,.group_indent,.lists_indent,.lists_indent2{
	font-size:0.4rem;
}
@font-face {
  font-family: 'iconfont';  /* project id 295055 */
  src: url('http://at.alicdn.com/t/font_71ueg5c45mcayvi.eot');
  src: url('http://at.alicdn.com/t/font_71ueg5c45mcayvi.eot?#iefix') format('embedded-opentype'),
  url('http://at.alicdn.com/t/font_71ueg5c45mcayvi.woff') format('woff'),
  url('http://at.alicdn.com/t/font_71ueg5c45mcayvi.ttf') format('truetype'),
  url('http://at.alicdn.com/t/font_71ueg5c45mcayvi.svg#iconfont') format('svg');
}
.waitpay{
	font-family: iconfont;
	font-size:0.6rem;
}
.icon_ahead{
	font-family: iconfont;
	font-size:0.5rem;
	padding-right:0.2rem;
	display: inline-block;
	vertical-align: middle;
}
.indsystool{
	border-bottom:0;
}
</style>