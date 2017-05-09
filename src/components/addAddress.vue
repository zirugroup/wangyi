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
		return {name : ""};
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
			$(".manageAddrMain").html(name)
		}
	}
}

</script>

<style lang="css">
html {font-size:40px;}
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