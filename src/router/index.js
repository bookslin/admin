import { createRouter, createWebHashHistory } from 'vue-router'
import Login from "../views/Login.vue" 
import MainBox from "../views/MainBox.vue"
import Home from "../views/home/Home.vue"
import Center from "../views/center/Center.vue"

const routes = [
  {
    path:"/login",
    name:"login",
    component:Login
  },
  {
    path:"/mainbox",
    name:'mainbox',
    component:MainBox
  }
  //mainbox的嵌套路由，后面根据权限动态添加
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.addRoute("mainbox",{
  path:"/index",
  component:Home
}) 
router.addRoute("mainbox",{
  path:"/center",
  component:Center
}) 


export default router
