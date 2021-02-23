import Vue from "vue";
import VueRouter from "vue-router";
import panelRouter from './modules/panel'
Vue.use(VueRouter);

const routes = [ 
  {
   path:'/',
   name:'home',
   component: ()=>import("@/views/home"),
   children:[ 
    {
    path: "",
    name: "home",
    components: {
      tabs:()=>import("@/views/jnr/jnrTabs"),
      header:()=>import("@/views/jnr/jnrHeaderNav"),
      aside:()=>import("@/views/jnr/jnrAsideNav"),
    }
   },
   ...panelRouter
   ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
});
const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router;
