<template lang="html">
	<div class="timeLimitHtml">
		<div class="tlLogo">
			<img src="../assets/timeLimitBanner.jpg">
		</div>
		<ul class="tlTime" >
			<li v-for="(x, index) in timeMenu" @click="getTime(index)">
				<p class="timeList" >{{x}}</p>
				<p >抢购中</p>
			</li>
		</ul>
		<div class="tlDesc">
			<span></span>限时限量&nbsp;先到先得<span></span>
		</div>
		<ul class="showUp">
			<li v-for="x in dataUp"> 
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
			</li>
		</ul>
	</div>
</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
	Vue.use(VueResource)
	export default{
		data(){
			return{
				timeMenu: ["10:00", "14:00", "18:00", "22:00", "明日10:00", "明日14:00", "明日18:00", "明日22:00" ],
				timeStatus: ["抢购中", "已开抢", "即将开始"],
				isActive: false,
				timeType: 0,//待修改，需要在点击时改变
				dataUp: [],
				dataDown: []
			}
		},
		methods: {
			getTime: function(index){
				console.log(index);
				this.timeType = index;
			}
		},
		mounted(){
			console.log(this.timeType)
			this.$http.get("../static/json/timeLimit" + this.timeType + ".json").then(function(res){
					// console.log(res.body);
					this.dataUp = res.body.dataUp.itemList;
					this.dataDown = res.body.dataDown;
					console.log(this.dataUp);
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
		height: 36px;
		padding: 6px 0;
		background: #f7dfc2;
		/* #f48f18 */
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
		/*height: 90%;*/
		padding-top: 3px;
		text-align: center;
		line-height: 16px;
		font-size: 12px;
		color: #888;
		border-right: 1px solid #e0e0e0;
	}
	.tlTime .timeList{
		color: #333;
		font-size: 14px;
	}
	/*限量限时*/
	.tlDesc{
		width: 100%;
		height: 50px;
		color: #888;
		font-size: 14px;
		text-align: center;
		line-height: 50px;
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
</style>