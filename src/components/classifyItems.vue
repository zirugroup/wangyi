<template lang="html">
	<div class="classifyItem">
        <ul class="hm-nav" v-for="item in listCmputed">
            <li v-for="(x,i) in item.subCateList">
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
        <div class="car_like">
            <div class="likeItems" >
                <router-link :to="{path:'/item',query:{object:item}}" v-for="item in lihaiData">
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
</style>