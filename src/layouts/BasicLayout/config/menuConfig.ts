/*
 * @文件描述: 路由
 * @公司: 山东大学
 * @作者: 李洪文
 * @Date: 2019-06-13 10:35:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-26 17:36:30
 */

import {
  HomeOutlined,
  SettingOutlined,
  AreaChartOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

const menuConfig = [
  {
    key: 'home',
    name: '首页',
    link: '/home',
    icon: HomeOutlined,
  },
  {
    key: 'base',
    name: '信息通路',
    icon: SettingOutlined,
    children: [
      // {
      //   key:'X6',
      //   link:'/base/X6',
      //   name:'X6测试'
      // },
      {
        key:'G6',
        link:'/base/G6',
        name:'造血细胞PATHWAY'
      },
    ],
  },
];

export { menuConfig };
