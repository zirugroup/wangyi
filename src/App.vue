<template>
  <div id="app">
    <router-view></router-view>
    <footer v-if =" $route.path == '/' || $route.path == '/car' || $route.path == '/topic' || $route.path == '/classify' || $route.path == '/mine' ">
      <router-link to="/">首页</router-link>
      <router-link to="/topic">专题</router-link>
      <router-link to="/car">购物车</router-link>
      <router-link to="/classify">分类</router-link>
      <router-link to="/mine">个人</router-link>
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
  height : 30px;
  display : flex;
  width : 100%;
  justify-content: space-around;
  background:pink;
}
footer a{
  flex : 1 1 25%;
  text-align: center;

}
</style>
