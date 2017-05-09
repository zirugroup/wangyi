<template lang="html">
	<div class="addAddr">
		<header>
			<span class="back"><router-link to="myAddress">&lt;</router-link></span>
			<span class="addman">添加地址</span>
			<span class="addSave addman" @click="writeAdd()"><router-link to="myAddress">保存</router-link></span>
		</header>
		<main>
			<input type="text" class="inname" placeholder="姓名" />
			<input type="text" class="innumber" placeholder="手机号码" />
			<input type="text" class="incity" placeholder="省份、城市、区县" />
			<input type="text" class="inroad" placeholder="详细地址、如街道、楼牌号" />
			<div class="defaultAdd">
				<span class="ding">
					<i class="tubiao" @click="addAddr()">&#xe7b4;</i>
					<input type="checkbox" checked="checked" class="addradio" />
					<i class="tubiao2" @click="addAddr()">&#xe601;</i><span class="dewords">设为默认地址</span>
				</span>
			</div>
		</main>
	</div>
</template>

<script>
var a =0;
import Vue from "vue"
export default{
	data (){
		return {name : "abc"};
	},
	methods : {
		addAddr : function(){
			a+=1;
			$(".tubiao2").toggleClass("isShow");
			if(a%2==0){
				$(".addradio").prop("checked","checked");
			}else{
				$(".addradio").removeProp("checked");
			}
		},
		writeAdd : function(){
			$(".manageAddrMain").html(`
				<ul class="line"></ul>
				<div class="addressAdd">
					<div class="addressSh">
						<div class="addressEdit">
							<span>d</span>
							<span>12121222</span>
						</div>
						<div class="addressBeijing">
							<span>默认</span>
							<span>北京市</span>
						</div>
					</div>
					<div class="addressEd">编辑</div>
				</div>
				`)
		}
	}
}

</script>

<style lang="css">
html {font-size:40px;}
.line{
    display: block;
    width: 100%;
    height: .1rem;
    background: url(//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-bg-bd30f2bfeb.png) repeat-x;
    background-size: .8rem .13333rem;
}
.addressAdd{
	height:15rem;
	background: #eee;
	display: flex;
}
.addressSh{
	width:75%;
	height:1.8rem;
	background: #fff;
	padding:0.3rem 0 0 0;
}
.addressEdit span:nth-of-type(1){
	padding:0 1.3rem 0.1rem 0.5rem;
	display: inline-block;
	margin-bottom: 0.1rem;
	font-size: 0.4rem;
}
.addressBeijing span:nth-of-type(1){
	margin:0 0.6rem 0 0.5rem;
	color:#842323;
	border: 1px solid #842323;
	padding:0 0.1rem;
	font-family: "微软雅黑";
	font-size: 0.3rem;
}
.addressEd{
	width:25%;
	height:2.1rem;
	background: #fff;
	text-align: right;
	padding-right: 0.4rem;
	line-height: 2.1rem;
	font-size: 0.4rem;
}
.isShow{
	display: none;
}
.addAddr header {
	display: flex;
	justify-content:space-between;
	padding: 0.35rem 0.5rem;
	box-sizing:border-box;
}
.addAddr .back{
	font-size:0.5rem;
}
.addAddr header{
	background: #FAFAFA;
}
.addAddr .addman{
	font:normal 0.45rem "微软雅黑";
}
.addAddr main {
	display: flex;
	flex-direction:column;
}
.inname, .innumber, .inroad, .incity {
	padding-left:0.3rem;
	height:1.2rem;
	border-top:0;
	border-left:0;
	border-right:0;
	border-bottom:1px solid #ccc;
}
.defaultAdd{
	text-align:center;
	line-height:1.2rem;
	height:1.2rem;
	font-size:0.35rem;
	font-family: "微软雅黑";
}
.defaultAdd .ding{
	position: relative;
}
.def{
	width:0.45rem;
	height:0.45rem;
	display: inline-block;
	vertical-align: middle;
}
.dewords{
	display: inline-block;
	vertical-align: middle;
}
@font-face {
  font-family: 'iconfont';  /* project id 295055 */
  src: url('//at.alicdn.com/t/font_vpbhp9kicdnp14i.eot');
  src: url('//at.alicdn.com/t/font_vpbhp9kicdnp14i.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_vpbhp9kicdnp14i.woff') format('woff'),
  url('//at.alicdn.com/t/font_vpbhp9kicdnp14i.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_vpbhp9kicdnp14i.svg#iconfont') format('svg');
}

.tubiao{
	font-family: iconfont;
	font-style: normal;
}
.tubiao2{
	font-family: iconfont;
	font-style: normal;
	position: absolute;
	left:0rem;
	/*display: none;*/
}
.addradio{
	display: none;
}
</style>