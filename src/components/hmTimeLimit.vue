<template lang="html">
	<div class="timeLimitHtml">
		<div class="tlLogo">
			<img src="../assets/timeLimitBanner.jpg">
		</div>
		<ul class="tlTime">
			<li v-for="(x, index) in timeMenu" @click="getTime(index, $event)">
				<p class="timeList" >{{x}}</p>
				<p class="timeStatus"></p>
			</li>
		</ul>
		<div class="tlDesc">
			<span></span>限时限量&nbsp;先到先得<span></span>
		</div>
		<ul class="showUp">
			<router-link v-for="x in dataUp" :key="x.id" :to="{path:'/item', query:{object:x}}" tag="li">
				<div class="itemImg">
					<img :src="x.listPicUrl">
				</div>
				<div class="itemInfo">
					<p class="itemName">{{x.itemName}}</p>
					<p>{{x.simpleDesc}}</p>
					<div>
						<p>限时价<span class="curPrice">￥{{x.actualPrice}}</span>原价<span class="oriPrice">￥{{x.retailPrice}}</span></p>
						<span class="itemNum">仅剩{{x.currentSellVolume}}件</span>
						<span class="itemTag">马上抢</span>
					</div>
				</div>
			</router-link>
		</ul>
		<div class="showDown">
			<p><em></em><span class="showDownIcon"></span>{{dataDown.name}}<em></em></p>
			<ul class="showUp">
				<router-link v-for="x in dataDown.itemList" :key="x.id" :to="{path:'/item', query:{object:x}}" tag="li">
					<div class="itemImg">
						<img :src="x.listPicUrl">
					</div>
					<div class="itemInfo">
						<p class="itemName">{{x.itemName}}</p>
						<p>{{x.simpleDesc}}</p>
						<div>
							<p>限时价<span class="curPrice">￥{{x.actualPrice}}</span>原价<span class="oriPrice">￥{{x.retailPrice}}</span></p>
							<span class="itemNum">仅剩{{x.currentSellVolume}}件</span>
							<span class="itemTag">马上抢</span>
						</div>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
	export default{
		data(){
			return{
				timeMenu: [],
				timeStatus: ["抢购中", "已开抢", "即将开始"],
				isActive: false,
				timeType: [],
				dataUp: [],
				dataDown: []
			}
		},
		methods: {
			getTime: function(index, e){
				$(".tlTime li").removeClass("tlTimeHight");
				e.target.parentNode.setAttribute("class", "tlTimeHight");
				this.timeType = index;
			}
		},
		watch: {
			"timeType": function(nVal, oVal){
				this.$http.get("../static/json/timeLimit" + this.timeType + ".json").then(function(res){
						this.dataUp = res.body.dataUp.itemList;
						this.dataDown = res.body.dataDown;
				})
			}
		},
		mounted(){
			var date = new Date(),
				day = date.getDate()-1,
				hour = date.getHours();
			this.timeMenu = [day+"日18:00", day+"日22:00", "10:00", "14:00", "18:00", "22:00", "明日10:00", "明日14:00", "明日18:00", "明日22:00"];
			console.log(this.timeMenu.length)
			if( hour < 6 || hour >= 22 ){
				this.timeMenu = this.timeMenu.slice(3, 11);
				console.log(this.timeMenu)
			}else if( hour < 14 && hour >= 6){
				this.timeMenu = this.timeMenu.slice(0, 8);
			}else{
				this.timeMenu = this.timeMenu.slice(Math.floor((hour-10)/4), Math.floor((hour-10)/4)+8 );
			}			
			this.$http.get("../static/json/timeLimit2.json").then(function(res){
					this.dataUp = res.body.dataUp.itemList;
					this.dataDown = res.body.dataDown[0];
					if(hour >= 10)	{
						$(".tlTime li").eq(2).addClass("tlTimeHight");
						$(".tlTime li").eq(2).find(".timeStatus").text("抢购中");
						$(".tlTime li:lt(2)").find(".timeStatus").text("已抢购");
						$(".tlTime li:gt(2)").find(".timeStatus").text("即将开抢");
					}else if(hour>= 6 && hour<10){
						$(".tlTime li").eq(1).addClass("tlTimeHight");
						$(".tlTime li").eq(1).find(".timeStatus").text("抢购中");
						$(".tlTime li").eq(0).find(".timeStatus").text("已抢购");
						$(".tlTime li:gt(1)").find(".timeStatus").text("即将开抢");
					}								
			});
			// 菜单固定在顶部
			window.addEventListener("scroll", function(){
				var temp =  window.scrollY > $(".tlLogo").height(); 
				if(temp){
					$(".tlTime").addClass("toTop");
				}else{
					$(".tlTime").removeClass("toTop");
				}
			})
		}
	}
</script>
<style lang="css">
	.timeLimitHtml{
		width: 100%;
		color: #333;
	}
	.tlLogo{
		width: 100%;
	}
	.tlLogo img{
		width: 100%;
		height: auto;
	}
	/*时间轴*/
	.tlTime{
		width: 100%;
		height: 48px;
		background: #f7dfc2;
		display: -webkit-box;
		overflow-x: auto;
		-webkit-perspective: 1000;
        -webkit-overflow-scrolling: touch;
	}
	.tlTime::-webkit-scrollbar{
		display: none;
	}
	.tlTime li{
		width: 23%;
		height: 70%;
		margin: 9px 0 0 6px;
		text-align: center;
		line-height: 16px;
		font-size: 12px;
		color: #888;
		border-right: 1px solid #e0e0e0;
	}
	.toTop{
		position: fixed;
		top: 0;
		z-index: 6;
	}
	.tlTime .timeList{
		color: #333;
		font-size: 14px;
	}
	.tlTime .tlTimeHight{
		background-color: #f48f18;
		padding-top: 9px;
		color: #fff;
		margin: 0;
		height: 84%;
		position: relative;
	}
	.tlTime .tlTimeHight p{
		color: #fff;
	}
	/*.tlTimeHight::after{
		content: "";
		display: block;
		width: 0;
		height: 0;
		border: 5px solid transparent;
		border-top-color: #000;
		position: absolute;
		bottom: 0px;
		left: 45%;
	}*/
	/*限量限时*/
	.tlDesc{
		width: 100%;
		padding-top: 10px;
		height: 40px;
		color: #888;
		font-size: 14px;
		text-align: center;
		line-height: 30px;
		border-bottom: 0.25rem solid #f4f4f4;
	}
	.tlDesc span{
		display: inline-block;
		vertical-align: middle;
		width: 26%;
		margin: 0 4%;
		height: 1px;
		background-color: #e0e0e0;
	}
	/*商品列表*/

	.showUp li{
		display: flex;
		width: 100%;
		height: 157px;
		border-bottom: 0.25rem solid #f4f4f4;
	}
	.showUp .itemImg{
		width: 40%;
	}
	.showUp .itemImg img{
		width: 100%;
		height: auto;
	}
	.showUp .itemInfo{
		width: 60%;
		padding: 30px 10px;
		color: #888;
		box-sizing: border-box; 
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.itemInfo .itemName{
		font-size: 17px;
		color: #333;
	}
	.itemInfo div{
		width: 100%;
		line-height: 30px;
		margin-top: 10px;
		position: relative;
	}
	.itemInfo div .curPrice{
		color: #b4282d;
		font-size: 17px;
		margin-right: 10px;
	}
	.itemInfo div .oriPrice{
		text-decoration: line-through;
	}
	.itemInfo div .itemNum{
		margin-top: 20px;
		padding: 1px 20px;
		border: 1px solid #f48f18;
		border-radius: 9px;
		color: #f48f18;
		background-color: rgba(244,143,24,.15);
	}
	.itemInfo div .itemTag{
		padding: 0 25px;
		font-weight: bold;
		line-height: 27px;
		background-color: #f48f18;
		color: #fff;
		border: 1px solid #f48f18;
		border-radius: 2px;
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.showDown{
		width: 100%;
		border-bottom: 40px solid #f4f4f4; 
	}
	.showDown>p{
		width: 100%;
		height: 40px;
		color: #000;
		font-size: 15px;
		text-align: center;
		line-height: 40px;
		background: #f4f4f4; 
	}
	.showDown p em{
		display: inline-block;
		vertical-align: middle;
		width: 25%;
		margin: 0 4%;
		height: 1px;
		background-color: #e0e0e0;
	}
	.showDown p .showDownIcon{
		display: inline-block;
		width: 18px;
		height: 18px;
		margin: 0 2%;
		background: url(../assets/tlGift.png) no-repeat; 
		background-position: 0 0;
		background-size: 100% auto;
	}
</style>