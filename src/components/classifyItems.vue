<template lang="html">
	<div>
		<router-link to="/item">单品</router-link>
		<div>
			<div class="data-reactid" v-for="item in listCmputed">
				<div v-for="x in item.subCateList">
					{{x.name}}
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
	Vue.use(VueResource)
	export default{
		data(){
            return{
                res : [],
                response : [],
                item_last : [],
                route_last : [],
                classy_last : [],
                index_last :  [],
                lihaiData : []
            }
        },
        computed :{
            listCmputed : function(){
            	var that = this;
                return this.res.filter(function(item){
                    return item.id == that.classy
                    console.log(item.id)
                })
            }
        },
        mounted(){
            var that=this;
            var res;
            //这个数据是大类别数据
            $.ajax({
                type:"get",
                url : "../../static/json/classfy.json",
                dataType:"json",
                success:function(data){
                    that.res = data;
                }
            });
            //这个数据是明细分类数据
            $.ajax({
            	type:"get",
                url : "../../static/json/jujia.json",
                dataType:"json",
                success:function(data1){
                    that.response = data1;
                    that.lihaiData = that.response[that.item_last].itemList;
                }
            })
        },
        created : function(){
			this.route_last = this.$route.query;

			this.classy_last = this.route_last.class; //返回商品总类别
			this.item_last = this.route_last.item;    //返回商品明细类别
            // console.log(this.item_last);
			this.index_last = this.route_last.index;  //返回商品明细索引
		},
	}
</script>
<style lang="css">
	@import '../../static/css/classfy.css';
</style>