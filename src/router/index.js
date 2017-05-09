import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import brand from '@/components/brand'

import topic from '@/components/topic'
import topicgroom from '@/components/topicgroom'
import topicInfo from '@/components/topicInfo'

import classify from '@/components/classify'
import classifyItems from '@/components/classifyItems'

import car from '@/components/car'
import carorder from '@/components/carorder'
import item from '@/components/item'

import mine from '@/components/mine'
import myOrder from '@/components/myOrder'
import myAddress from '@/components/myAddress'
import addAddress from '@/components/addAddress'
import hotrecommend from '@/components/hotrecommend'
import newItems from '@/components/newItems'
import forecast from '@/components/forecast'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
      redirect: "/home",
  },
    {
      path: '/home',
      component: home,
    },
    {
      path: '/brand',
      component: brand
    },
    {
      path: '/hotrecommend',
      component: hotrecommend,
      children : [{
        path: "newItems",
        component : newItems
      },
      {
        path: "forecast",
        component : forecast
      }]
    },
    {
      path: '/topic',
      component: topic
    },
    {
      path: '/topicgroom',
      component: topicgroom
    },
    {
      path: '/topicInfo',
      component: topicInfo
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/classifyItems',
      component: classifyItems
    },
    {
      path: '/car',
      component: car
    },
    {
      path: '/carorder',
      component: carorder
    },
    {
      path: '/item',
      component: item
    },
    {
      path: '/mine',
      component: mine
    },
    {
      path: '/myOrder',
      component: myOrder
    },
    {
      path: '/myAddress',
      component: myAddress
    },
    {
      path: '/addAddress',
      component:addAddress
    }
  ]
})
