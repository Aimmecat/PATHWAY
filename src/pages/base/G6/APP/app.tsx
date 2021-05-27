/*
 * @Author: your name
 * @Date: 2021-05-26 15:14:57
 * @LastEditTime: 2021-05-27 20:03:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Github\Frontends\src\pages\base\G6\APP\app.tsx
 */
import React from 'react';
import Graphin, { Behaviors, GraphinTreeData } from '@antv/graphin';
import { MiniMap,Tooltip  } from '@antv/graphin-components';
import { Row, Col, Card } from 'antd';
const { TreeCollapse } = Behaviors;
import data from './data'
import CustomTooltip_Node from './Tooltip'
import CustomTooltip_Edge from './Tooltip_Edge'

const walk = (node: GraphinTreeData, callback: (node: GraphinTreeData) => void) => {
  callback(node);
  if (node.children && node.children.length > 0) {
    node.children.forEach(child => {
      walk(child, callback);
    });
  }
};
walk(data, node => {
  node.style = {
    label: {
      value: node.id,
    },
  };
});
const layouts = [
  {
    type: 'compactBox',
    options: {
      direction: 'LR',
      getId: function getId(d:any) {
        return d.id;
      },
      getHeight: function getHeight() {
        return 26;
      },
      getWidth: function getWidth() {
        return 26;
      },
      getVGap: function getVGap() {
        return 26;
      },
      getHGap: function getHGap() {
        return 100;
      },
    },
    title: '人体内的造血细胞信号通路',
  },
];
export default () => {

  return (
    <div>
      <Row gutter={[12, 12]}>
        {layouts.map(item => {
          const { type, options, title } = item;
          const desc = <code>{`tips:可以鼠标拖动、滚轮放大缩小`}</code>;
          return (
            <Col span={24} key={type}>
              <Card title={title} extra={desc}>
                <Graphin data={data} layout={{ type, ...options }} fitView height={700} >
                  <TreeCollapse /> 
                  <MiniMap visible={true} /> 
                  <Tooltip bindType="node" placement="right">
                    <CustomTooltip_Node/>
                  </Tooltip> 
                  <Tooltip bindType="edge" placement="right">
                    <CustomTooltip_Edge/>
                  </Tooltip> 
                </Graphin>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};