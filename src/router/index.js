import Vue from 'vue'
import Router from 'vue-router'
import index from "../view/index.vue"
import inTimeService from "../view/inTimeService/index.vue"
import assemble from "../view/assemble/index.vue"
import order from "../view/order/index.vue"
import member from "../view/member/index.vue"
import loginOrRegister from "../view/loginOrRegister/index.vue"
import set from "../view/set/index.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/inTimeService',
      component: index,
      children:[
        {
          path:'/inTimeService',
          name:"inTimeService",
          component:inTimeService
        },
        {
          path:'/assemble',
          name:"assemble",
          component:assemble
        },
        {
          path:'/order',
          name:"order",
          component:order
        },
        {
          path:'/member',
          name:"member",
          component:member
        }
      ]
    },
    {
      path:"/loginOrRegister",
      name:"loginOrRegister",
      component:loginOrRegister
    },
    {
      path:"/set",
      name:"set",
      component:set
    }
  ]
})
