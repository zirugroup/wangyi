<template lang="html">
	<div>
		<!-- <router-link to="/item">单品</router-link> -->
		<div>
			<div class="data-reactid" v-for="item in listCmputed">
				<div v-for="(x,i) in item.subCateList">
                     <router-link :to="{path:'/classifyItems',query: {index : i , class : x.superCategoryId ,item : x.id}}">
                        {{x.name}}
                    </router-link>
				</div>
			</div>
			<div v-for="item in listCmputed">
				<div v-for="x in item.subCateList">
					{{x.frontName}}
				</div>
            </div>
            <div v-for="item in lihaiData">
                <img :src="item.listPicUrl">
				<div>{{item.name}}</div>
				<div>{{item.simpleDesc}}</div>
                <div>￥{{item.retailPrice}}</div>
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
                classify : []
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
                            }
                        })
                    }
                });
            }
        },
        mounted(){
            var that=this;
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