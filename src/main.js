// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 图片懒加载
// import VueLazyload from 'vue-lazyload/vue-lazyload-next'

Vue.config.productionTip = false

// 懒加载
// Vue.use(VueLazyload, {
// 	error: '错误的图片',
// 	loading: '正在加载',
// 	try: 4
// })

/* eslint-disable no-new */
new Vue({
  	el: '#app',
  	router,
  	template: '<App/>',
  	components: { App },
  	data : {
  		eventHub : new Vue()
  	}
})
