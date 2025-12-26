import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //首頁
    {
      path: '/',
      name: 'Home-View',
      component: () => import('../views/Home-View.vue'),
    },
    //會員-購物商城
    {
      path: '/detail',
      name: 'Detail-View',
      component: () => import('../views/Detail-View.vue'),
    },
    //會員-商品詳細頁面

    //會員-購物車

    //會員-我的訂單

    //管理員-商品管理










    // 這行放最後面
    //404頁面
    { path: '/:pathMatch(.*)*',
      name:'notFound',
      component:()=>import('../views/404-View.vue') 
    }
  ],
})

export default router
