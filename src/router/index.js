import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [ 
  {
   path:'/',
   name:'home',
   component: ()=>import("@/views/home"),
  //  children:[ 
  //   {
  //     path: "aside",
  //     name: "aside",
  //     component: () =>import("@/views/jnr/jnrAsideNav"),
  //    },
  //  {
  //   path: "header",
  //   name: "header",
  //   component: () =>import("@/views/jnr/jnrHeaderNav"),
  //  },
  //  {
  //   path: "tabs",
  //   name: "tabs",
  //   component: () =>import("@/views/jnr/jnrTabs"),
  //   children:[
  //     {
  //       path: "0",
  //       name: "panel0",
  //       component: () =>
  //       import("@/layout/panel/panel0.vue")
  //     },
  //     {
  //         path: "1",
  //         name: "panel1",
  //         component: () =>
  //         import("@/layout/panel/panel1.vue")
  //       },
  //       {
  //         path: "2",
  //         name: "panel2",
  //         component: () =>
  //         import("@/layout/panel/panel2.vue")
  //       },
  //       {
  //         path: "3",
  //         name: "panel3",
  //         component: () =>
  //         import("@/layout/panel/panel3.vue")
  //       },
  //       {
  //         path: "4",
  //         name: "panel4",
  //         component: () =>
  //         import("@/layout/panel/panel4.vue")
  //       },
  //       {
  //         path: "5",
  //         name: "panel5",
  //         component: () =>
  //         import("@/layout/panel/panel5.vue")
  //       },
  //       {
  //         path: "6",
  //         name: "panel6",
  //         component: () =>
  //         import("@/layout/panel/panel6.vue")
  //       },
  //       {
  //         path: "7",
  //         name: "panel7",
  //         component: () =>
  //         import("@/layout/panel/panel7.vue")
  //       },
  //       {
  //         path: "8",
  //         name: "panel8",
  //         component: () =>
  //         import("@/layout/panel/panel8.vue")
  //       },
  //       {
  //         path: "9",
  //         name: "panel9",
  //         component: () =>
  //         import("@/layout/panel/panel9.vue")
  //       },
  //       {
  //         path: "10",
  //         name: "panel10",
  //         component: () =>
  //         import("@/layout/panel/panel10.vue")
  //       },
  //       {
  //         path: "11",
  //         name: "panel11",
  //         component: () =>
  //         import("@/layout/panel/panel11.vue")
  //       },  
  //       {
  //         path: "12",
  //         name: "panel12",
  //         component: () =>
  //         import("@/layout/panel/panel12.vue")
  //       }, 
  //        {
  //         path: "13",
  //         name: "panel13",
  //         component: () =>
  //         import("@/layout/panel/panel13.vue")
  //       },
        
  //   ]
  //  },
  //  ]
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
