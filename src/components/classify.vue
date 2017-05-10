<template lang="html">
	<div>
		<div class="classify">
	        <div class="search">
                <div class="search_input">
                    <router-link to="/sousuo">
                        <i class="search_picture"></i>
                        <span>
                            商品搜索，共<span>4000</span>件商品
                        </span>
                    </router-link>
                </div>
            </div>
            <div class="down">
                <div class="down_toolbar">
                    <ul id="list_count ">
                        <li  v-for="(toolbar,i) in res">
                            <router-link :to="{path : '/classify' ,query :{class : toolbar.name,index : i}}" exact class="list_left" active-class="changeColor">
                                {{toolbar.name}}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="down_contains">
                    <div class="contains" v-for="item in listCmputed">
                        <div class="contains_back" :style="'background-image:url('+item.imgUrl+');'">
                            <div class="contains_word">
                                热卖好物，诚意推荐
                            </div>
                        </div>
                        <div class="contains_class">
                            <span>{{item.name}}分类</span>
                        </div>
                        <div  class="contains_goods">
                            <ul class="contains_goods_each">
                                <router-link v-for="(x,i) in item.subCateList" :to="{path:'/classifyItems',query: {index : i , class : x.superCategoryId ,item : x.id}}">
                                    <li :style="'background-image:url('+x.wapBannerUrl+')'">
                                        {{x.name}}
                                    </li>
                                </router-link>
                            </ul>
                        </div>
                    </div>
                </div>
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
                ind : [],
                class1 : []
            }
        },
        computed :{
            listCmputed : function(){
                var that = this;
                return this.res.filter(function(item){
                    return item.name == that.class1
                })
            }
        },
        mounted(){
            var that=this;
            $.ajax({
                type:"get",
                url : "../../static/json/classfy.json",
                dataType:"json",
                success:function(data){
                    that.res = data;
                }
            });
        },
        methods : {
            change : function(a){
                $(".contains").css("display","none");
                $("#list_count li span").attr("class","list_left");
                $(".contains").eq(a).css("display","block");
                $("#list_count li span").eq(a).attr("class","changeColor")
            }
        },
        created(){
            this.class1 = this.$route.query.class;
            this.index1 = this.$route.query.index;
        },
        watch : {
            "$route" : function(to , from){
                if(to.query.class !== from.query.class){
                    this.class1 = to.query.class;
                    this.index1 = to.query.index;
                }
            }
        }
    }
</script>

<style lang="css">
	@import '../../static/css/classfy.css';
</style>