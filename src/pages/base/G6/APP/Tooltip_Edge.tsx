/*
 * @Author: your name
 * @Date: 2021-05-27 09:15:51
 * @LastEditTime: 2021-05-27 09:33:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Github\Frontends\src\pages\base\G6\APP\Tooltip_Edge.tsx
 */
import { GraphinContext} from '@antv/graphin';
import { Card,Button} from 'antd';
import * as React from 'react';

const CustomTooltip_Edge = () => {
    const { tooltip } = React.useContext(GraphinContext);
    const context = tooltip.edge
    const { item } = context;
    const model = item && item.getModel();
    //仿照Tooltip中书写 用model.id值唯一判断edge
    return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            
        </Card></div>
      )
}

export default CustomTooltip_Edge