<template lang="html">
	<div class="manageAddressAdd">
		<header>
			<span class="back"><router-link to="mine">&lt;</router-link></span>
			<span class="addman">地址管理</span>
		</header>
		<main class="manageAddrMain">
			
		</main>
		<router-link to="addAddress" class="fota">
		<footer>
				<span class="footspan">+新建地址</span>
		</footer>
		</router-link>
	</div>
</template>
<script> 
	export default{
		data(){
			return {
				// inname : $(".inname").val()
			}
		},
		// ,
		// created : function(){
		// 	$(".manageAddrMain").html(`
		// 	<ul class="line"></ul>
		// 	<div class="addressAdd">
		// 		<div class="addressSh">
		// 			<div class="addressEdit">
		// 				<span>{{this.$route.jquery.name}}</span>
		// 				<span>number</span>
		// 			</div>
		// 			<div class="addressBeijing">
		// 				<span>默认</span>
		// 				<span>北京市</span>
		// 			</div>
		// 		</div>
		// 		<div class="addressEd">编辑</div>
		// 	</div>
		// 	`)	
		// }
		writeAdd : function(){
			// $(".manageAddrMain").html(`
			// 	<ul class="line"></ul>
			// 	<div class="addressAdd">
			// 		<div class="addressSh">
			// 			<div class="addressEdit">
			// 				<span>d</span>
			// 				<span>12121222</span>
			// 			</div>
			// 			<div class="addressBeijing">
			// 				<span>默认</span>
			// 				<span>北京市</span>
			// 			</div>
			// 		</div>
			// 		<div class="addressEd">编辑</div>
			// 	</div>
			// 	`)
		}
	}
</script>
<style lang="css">
html {font-size:40px;}
.manageAddressAdd header {
	padding:0.35rem 0;
}
.manageAddressAdd .back{
	font-size:0.5rem;
	margin-left:0.5rem;
	margin-right:3.1rem;
}
.manageAddressAdd	header{
	background: #FAFAFA;
}
.manageAddressAdd .addman{
	font:normal 0.45rem "微软雅黑";
}
.manageAddressAdd main{
	width:100%;
	height:15.3rem;
}
.manageAddressAdd footer {
	position: fixed;
	z-index:2;
	width:80%;
	height:1rem;
	padding:0 0.4rem;
	border:1px solid #f00;
	left:0.5rem;
	bottom:0;
}
.manageAddressAdd .footspan {
	font-size:0.5rem;
	text-align:center;
	line-height: 0.8rem;
	color:#f00;
}
</style>