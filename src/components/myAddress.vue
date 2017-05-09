<template lang="html">
	<div class="manageAddress">
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
		
	}
</script>
<style lang="css">
html {font-size:40px;}
.manageAddress header {
	padding:0.35rem 0;
}
.manageAddress .back{
	font-size:0.5rem;
	margin-left:0.5rem;
	margin-right:3.1rem;
}
.manageAddress	header{
	background: #FAFAFA;
}
.manageAddress .addman{
	font:normal 0.45rem "微软雅黑";
}
.manageAddress main{
	width:100%;
	height:15.3rem;
	background: #F4F4F4 url(../assets/noAddress.png) no-repeat 50% 40%;
	background-size:4.6rem 4.6rem;
}
.manageAddress footer {
	position: fixed;
	z-index:2;
	width:80%;
	height:1rem;
	padding:0 0.4rem;
	border:1px solid #f00;
	left:0.5rem;
	bottom:0;
	background:#F4F4F4; 
}
.manageAddress .footspan {
	font-size:0.5rem;
	text-align:center;
	line-height: 0.8rem;
	color:#f00;
}
</style>