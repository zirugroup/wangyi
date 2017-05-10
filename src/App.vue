<template>
  <div id="app">
    <router-view></router-view>
    <footer v-if =" $route.path == '/home/hmRecommend' || $route.path == '/car' || $route.path == '/topic' || $route.path == '/classify' || $route.path == '/mine' ">
      <router-link class="index_home" to="/home/hmRecommend" active-class="active_index_home"><span>首页</span></router-link>
      <router-link class="index_topic" to="/topic" active-class="active_index_topic"><span>专题</span></router-link>
      <router-link class="index_classify" to="/classify" active-class="active_index_classify"><span>分类</span></router-link>
      <router-link class="index_car" to="/car" active-class="active_index_car"><span>购物车</span><span class="footer_num" v-show="item_num>0">{{item_num}}</span></router-link>
      <router-link class="index_mine" to="/mine" active-class="active_index_mine"><span>个人</span></router-link>
    </footer>
  </div>
</template>

<script>
    import eventHub from './buy.js';
    export default {
        name: 'app',
        data (){
          return {
            item_num:0
          }
        },
        created(){
          this.item_num = eventHub.allcount;
          console.log(this.item_num);
        }
    }
</script>

<style>
html{
  font-size: 40px;
}
*{
  margin : 0;
  padding:0;
}
li{
  list-style: none;
}
.footer_num{
  position: absolute;
  width: 15px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  background-color: #b4282d;
  display: inline-block;
  color: #fff;
  border-radius: 50%;
  right: 0;
  top: 0;
}
footer{
  z-index: 999;
  position : fixed;
  bottom : 0;
  height : 1.3rem;
  display : flex;
  width : 100%;
  justify-content: space-around;
  background:#fafafa;
  align-items: center;
}
footer a{
  width: 1rem;
  padding-top: 0.625rem;
  background-image: url(./assets/footer.png);
  text-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 60% auto; 
}
footer a span{
  width: 100%;
  background-color: #fff;
}

.index_home{
  background-position: 0.2rem -3.725rem;
}
.index_home span{
  background-color: #fff;
}
.active_index_home{
  background-position: 0.2rem -2.975rem;
}
.index_topic{
  background-position: 0.2rem -5.225rem;
}
.active_index_topic{
  background-position: 0.2rem -4.475rem;
}
.index_car{
  position: relative;
  background-position: 0.2rem -0.725rem;
}
.active_index_car{
  background-position: 0.2rem 0px;
}
.index_classify{
  background-position: 0.2rem -2.2rem;
}
.active_index_classify{
  background-position: 0.2rem -1.45rem;
}
.index_mine{
  background-position: 0.2rem -6.725rem;
}
.active_index_mine{
  background-position: 0.2rem -5.975rem;
}
</style>
