<template>
  <div id="app">
    <router-view></router-view>
    <footer v-if =" $route.path == '/home' || $route.path == '/car' || $route.path == '/topic' || $route.path == '/classify' || $route.path == '/mine' ">
      <router-link class="index_home" to="/home" router-link-active="active_index_home"><span>首页</span></router-link>
      <router-link class="index_topic" to="/topic"><span>专题</span></router-link>
      <router-link class="index_classify" to="/classify"><span>分类</span></router-link>
      <router-link class="index_car" to="/car"><span>购物车</span></router-link>
      <router-link class="index_mine" to="/mine"><span>个人</span></router-link>
    </footer>
  </div>
  
</template>

<script>
export default {
  name: 'app'
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
footer{
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
  width: 40px;
  padding-top: 20px;
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
  background-position: 6px -152px;
}
.index_home span{
  background-color: #fff;
}
.router-link-active{
  background-position: 6px -122px;
}
.active_index_home{
  background-position: 0px 145px;
}
.index_topic i{
  background-position: 0px 70px;
}
.active_index_topic{
  background-position: 0px 95px;
}
.index_car i{
  background-position: 0px 220px;
}
.active_index_car{
  background-position: 0px 245px;
}
.index_classify i{
  background-position: 0px 170px;
}
.active_index_classify{
  background-position: 0px 195px;
}
.index_mine i{
  background-position: 0px 20px;
}
.active_index_mine{
  background-position: 0px 45px;
}
</style>
