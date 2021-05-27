/*
 * @文件描述: 路由
 * @公司: 山东大学
 * @作者: 李洪文
 * @Date: 2020-05-20 10:31:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-26 17:35:00
 */

export const routes = [
  {
    path: '/user',
    component: '@/layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './login' },
    ],
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/base',
        //wrappers: ['@/components/Authorized'],
        routes: [
          {
            path: '/base/department',
            component: './base/department',
          },
          {
            path: '/base/X6',
            component: './base/X6'
          },
          {
            path:'/base/G6',
            component:'./base/G6'
          },
        ],
      },
      /*
      {
        path: '/system',
        //wrappers: ['@/components/Authorized'],
        routes: [
          {
            path: '/system/admin',
            component: './system/admin/list',
          },
          {
            path: '/system/admin/edit',
            component: './system/admin/edit',
          },
          {
            path: '/system/admin/add',
            component: './system/admin/edit',
          },
        ],
      },
      */
      { path: '/', redirect: '/home' },
      {
        path: '/home',
        component: './home',
      },
    ],
  },
  {
    component: '404',
  },
];
