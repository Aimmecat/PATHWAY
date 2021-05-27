/*
 * @文件描述: 扩展面包屑
 * @公司: 山东大学
 * @作者: 李洪文
 * @Date: 2019-05-31 10:35:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-27 14:57:17
 */

export const routes = [
  {
    path: '/base',
    breadcrumbName: '信号通路',
    children: [
      {
        path: '/user',
        breadcrumbName: '用户管理',
        children: [
          { path: '/add', breadcrumbName: '新增' },
          { path: '/edit', breadcrumbName: '编辑' },
        ],
      },
      {
        path: '/department',
        breadcrumbName: '部门管理',
      },
      {
        path:'/X6',
        breadcrumbName:'X6测试'
      },
      {
        path:'/G6',
        breadcrumbName:'人体内造血细胞信号通路'
      },
    ],
  },
  {
    path: '/system',
    breadcrumbName: '系统管理',
    children: [
      {
        path: '/config',
        breadcrumbName: '参数设置',
      },
      {
        path: '/network',
        breadcrumbName: '网络设置',
      },
      {
        path: '/department',
        breadcrumbName: '部门管理',
      },
    ],
  },
];
