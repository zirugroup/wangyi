<template lang="html">
	<div class="classifyItem brandHtml">
        <header>
            <div>
                <span class="hideMenu" v-on:click="isShow = !isShow" v-bind:class="{hideMenuActive: isShow}"></span>
                <span class="brandTitle"></span>
                <span class="brandSearch"></span>
                <router-link to="/car" tag="span" class="brandCar"></router-link>
            </div>
            <ul class="hideMenuCont" v-show="isShow">
                <router-link to="/home/hmRecommend" tag="li" class="toHome"><span></span>首页</router-link>
                <router-link to="/topic" tag="li" class="toTopic"><span></span>专题</router-link>
                <router-link to="/classify" tag="li" class="toClassify"><span></span>分类</router-link>
                <router-link to="/mine" tag="li" class="toMine"><span></span>个人</router-link>
            </ul>
        </header>
        <ul class="hm-nav nav_classify" v-for="item in listCmputed">
            <li v-for="(x,i) in item.subCateList" >
                <router-link  :to="{path:'/classifyItems',query: {index : i , class : x.superCategoryId ,item : x.id}}" exact>
                    {{x.name}}
                </router-link>
            </li>
        </ul>
		<div class="data_discribe">
            <p class="data_back"></p>
			<p class="data_discribe_contains">
				{{lihaiData1}}
			</p>
        </div>
        <div class="car_like car_like1">
            <div class="likeItems" >
                <router-link :to="{path:'/item',query:{object:item}}" v-for="(item,key) in lihaiData" :key="item.id">
                    <dl>
                        <dt><img :src="item.listPicUrl"></dt>
                        <dd class="likeItems_news">{{item.simpleDesc}}</dd>
                        <dd class="likeItems_name">{{item.name}}</dd>
                        <dd class="likeItems_price">￥{{item.retailPrice}}</dd>
                    </dl>
                    <div class="car_clear"></div>
                </router-link>
                <div class="car_clear"></div>
            </div>
        </div>
        <div class="place_hold">
            <span>更多内容敬请期待</span>
        </div>
	</div>
</template>
<script>
	import Vue from "vue"
	import VueResource from "vue-resource"
    import classify from "../components/classify.vue"
	Vue.use(VueResource)
	export default{
        components : {classify : classify},
		data(){
            return{
                isShow: false,
                res : [],
                response : [],
                item_last : [],
                route_last : [],
                classy_last : [],
                index_last :  [],
                mingxi : [],
                lihaiData : [],
                classify : [],
                lihaiData1 : []
            }
        },
        computed :{
            listCmputed : function(){
            	var that = this;
                return this.res.filter(function(item){
                    return item.id == that.classy_last
                })
            }
        },
        methods : {
            //抓取json数据的文件
            getData : function(id){
                var that = this;
                return $.ajax({
                    type:"get",
                    url : "../../static/json/"+id+".json",
                    success:function(data){
                        that.response = data;
                        that.mingxi = that.response.categoryItemList;
                        that.mingxi.filter(function(item){
                            if(item.category.id == that.item_last){
                                that.lihaiData = item.itemList;
                                that.lihaiData1 = item.category.frontName;
                            }
                        })
                    }
                });
            }
        },

        mounted(){
            var that=this;
            var eles = (this.$el.getElementsByClassName(".hm-nav") )
            var h1 = document.createElement("h1")
            //令选中项在视窗范围内
            var inter = setInterval(function(){
                var len = $(".hm-nav").length;
                if(len>0){
                    clearInterval(inter);
                }
                $(".hm-nav").scrollLeft($(".hm-nav").children().eq(that.index_last).offset().left);
            },100);

            //这个函数用于明细分类
            this.getData(this.classy_last);

            //这个数据是大类别数据
            $.ajax({
                type:"get",
                url : "../../static/json/classfy.json",
                success:function(data){
                    that.res = data;
                }
            });
        },
        created : function(){
			this.classy_last = this.$route.query.class; //返回商品总类别
			this.item_last = this.$route.query.item;    //返回商品明细类别
			this.index_last = this.$route.query.index;  //返回商品明细索引
		},
        watch : {
            "$route" : function(to , from){
                if(to.query.item !== from.query.item){
                    this.item_last = to.query.item;
                    this.classy_last = to.query.class;
                    this.index_last = to.query.index;
                    this.getData(this.classy_last);
                }
            }
        }
	}
</script>
<style lang="css">
	@import '../../static/css/classfy.css';
    .brandHtml header{
        width: 100%;
        position: fixed;
        top: 0;
        background-color: #fff;
        z-index: 6;
        box-sizing: border-box;
    }
    .brandHtml header div{
        margin: 7px 15px;
    }
    .brandHtml header div::after{
        content: "";
        display: block;
        clear: both;
    }
    .brandHtml header div span{
        width: 30px;
        height: 30px;
    }
    .brandHtml header .hideMenu{
        float: left;
        width: 30px;
        height: 30px;
        background: url(../assets/brandIcon.png) no-repeat 0 -130px;
        background-size: 300%;
    }
    .brandHtml header .hideMenuActive{
        background: url(../assets/brandIcon.png) no-repeat 0 -160px;
        background-size: 300%;
    }
    .brandHtml header .brandTitle{
        float: left;
        width: 100px;
        margin: 0 50px 0 95px;
        background: url(../assets/brandIcon.png) no-repeat;
        background-position: 0 -110px;
        background-size: 100% auto;
    }
    .brandHtml header .brandSearch{
        float: left;
        background: url(../assets/brandIcon.png) no-repeat 0 -300px;
        background-size: 300%;
    }
    .brandHtml header .brandCar{
        float: right;
        background: url(../assets/brandIcon.png) no-repeat;
        background-size: 300%;
    }
    .brandHtml header .hideMenuCont{
        padding-bottom: 6px;
        width: 100%;
        border-top: 1px solid #f4f4f4;
        display: flex;
        justify-content: space-between;
    }
    .brandHtml header .hideMenuCont li{
        font-size: 12px;
        color: #888;
        width: 15%;
        text-align: center;
        padding: 0 5%;
    }
    .brandHtml header .hideMenuCont span{
        display: block;
        width:28px;
        height: 28px;
        margin: 4px 0 0 16px;
    }
    .brandHtml header .hideMenuCont .toHome span{
        background: url(../assets/brandIcon.png) no-repeat 0 -65px;
        background-size: 320%;  
    }
    .brandHtml header .hideMenuCont .toTopic span{
        background: url(../assets/brandIcon.png) no-repeat 0 -335px;
        background-size: 320%;  
    }
    .brandHtml header .hideMenuCont .toClassify span{
        background: url(../assets/brandIcon.png) no-repeat 0 -35px;
        background-size: 320%;  
    }
    .brandHtml header .hideMenuCont .toMine span{
        background: url(../assets/brandIcon.png) no-repeat 0 -265px;
        background-size: 320%;  
    }
</style>