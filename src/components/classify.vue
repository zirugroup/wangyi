<template lang="html">
	<div>
		<!-- <router-link to="/classifyItems">分类具体</router-link> -->
		<div class="classify">
	        <div class="search">
                <div class="search_input">
                    <i class="search_picture"></i>
                    <span>
                        商品搜索，共<span>4000</span>件商品
                    </span>
                </div>
            </div>
            <div class="down">
                <div class="down_toolbar">
                    <ul id="list_count">
                        <li v-on:click="change(i)" v-for="(toolbar,i) in res">
                            <span class="list_left" >{{toolbar.name}}</span>
                        </li>
                    </ul>
                </div>
                <div class="down_contains">
                    <div class="contains" v-for="toolbar in res">
                        <div class="contains_back" :style="'background-image:url('+toolbar.imgUrl+');'">
                            <div class="contains_word"> 
                                热卖好物，诚意推荐
                            </div>
                        </div>
                        <div class="contains_class">
                            <span>{{toolbar.name}}分类</span>
                        </div>
                        <div  class="contains_goods">
                            <ul class="contains_goods_each"  >
                                <li v-for="x in toolbar.subCateList" :style="'background-image:url('+x.wapBannerUrl+')'">{{x.name}}</li>
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
                res : "",
            }
        },
        mounted(){
            var that=this;
            var res;
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
                console.log(a);
                $(".contains").css("display","none");
                $("#list_count li span").attr("class","list_left");
                $(".contains").eq(a).css("display","block");
                $("#list_count li span").eq(a).attr("class","changeColor")
            }
        }
    }
</script>

<style lang="css">
	@import '../../static/css/classfy.css';
</style>