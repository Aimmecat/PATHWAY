/*
 * @Author: your name
 * @Date: 2021-05-26 21:05:08
 * @LastEditTime: 2021-05-28 14:40:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Github\Frontends\src\pages\base\G6\APP\Tooltip.tsx
 */
import { GraphinContext} from '@antv/graphin';
import { Card,Button} from 'antd';
import * as React from 'react';
const CustomTooltip_Node = () => {
  const { tooltip } = React.useContext(GraphinContext);
  const context = tooltip.node;
  const { item } = context;
  const model = item && item.getModel();
  if(model.id === 'Hematopietic stem cell'){
    return (
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:947'}}>CD34</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2322'}}>CD135</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Lymphoid stem cell Double-negative cell(DNI)'){
    return (
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:947'}}>CD34</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:960'}}>CD44</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3815'}}>CD117</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1791'}}>TdT</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3108+hsa:3109+hsa:3111+hsa:3112+hsa:3113+hsa:3115+hsa:3117+hsa:3118+hsa:3119+hsa:3122+hsa:3123+hsa:3125+hsa:3126+hsa:3127'}}>HLA-DR</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Pro T cell(DN2)'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/dbget-bin/www_bget?K06449'}}>CD2</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/K06455'}}>CD5</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:924'}}>CD7</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3559'}}>CD25</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:952'}}>CD38</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:960'}}>CD44</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:7037'}}>CD71</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3815'}}>CD117</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3575'}}>CD127</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1791'}}>TdT</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3122'}}>HLA-DRA</Button>
      </Card></div>
    )
  }
  else if(model.id === 'DN3'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/dbget-bin/www_bget?K06449'}}>CD2</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:921'}}>CD5</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:924'}}>CD7</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3559'}}>CD25</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:952'}}>CD38</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:960'}}>CD44</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:7037'}}>CD71</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3815'}}>CD117</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3575'}}>CD127</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1791'}}>TdT</Button>
      </Card></div>
    )
  }
  else if(model.id === 'DN4'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:911'}}>CD1</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/dbget-bin/www_bget?K06449'}}>CD2</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:920'}}>CD4</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:921'}}>CD5</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:924'}}>CD7</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:952'}}>CD38</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:960'}}>CD44</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3815'}}>CD117</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1791'}}>TdT</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Intermediate single-postive cell(ISP)'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/dbget-bin/www_bget?K06449'}}>CD2</Button>
        <Button onClick={()=>{window.location.href=''}}>CD3</Button>
        <Button onClick={()=>{window.location.href=''}}>CD4or8</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:921'}}>CD5</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:924'}}>CD7</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:952'}}>CD38</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Double-positive cell(DP)'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/dbget-bin/www_bget?K06449'}}>CD2</Button>
        <Button onClick={()=>{window.location.href=''}}>CD3</Button>
        <Button onClick={()=>{window.location.href=''}}>CD4or8</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:921'}}>CD5</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:924'}}>CD7</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Pro B Cell'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:928'}}>CD9</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4311'}}>CD10</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:930'}}>CD19</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:54474'}}>CD20</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:933'}}>CD22</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:100133941'}}>CD24</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3815'}}>CD117</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3575'}}>CD127</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1791'}}>TdT</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3122'}}>HLA-DRA</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Pre B I cell'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:928'}}>CD9</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4311'}}>CD10</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:930'}}>CD19</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:54474'}}>CD20</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:933'}}>CD22</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:100133941'}}>CD24</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:952'}}>CD38</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3815'}}>CD117</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3575'}}>CD127</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1791'}}>TdT</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3122'}}>HLA-DRA</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Immature B cell'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:928'}}>CD9</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:930'}}>CD19</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:54474'}}>CD20</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1380'}}>CD21</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:933'}}>CD22</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:100133941'}}>CD24</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:951'}}>CD37</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3122'}}>HLA-DRA</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:959'}}>IgM</Button>
      </Card></div>
    )
  }
  else if(model.id === 'B Cell'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:921'}}>CD5</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:928'}}>CD9</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:930'}}>CD19</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:54474'}}>CD20</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1380'}}>CD21</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:933'}}>CD22</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3563'}}>CD23</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:100133941'}}>CD24</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1378'}}>CD35</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:951'}}>CD37</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3122'}}>HLA-DRA</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:959'}}>IgM</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2296'}}>IgDA</Button>
      </Card></div>
    )
  }
  else if(model.id === 'CFU-GEMM'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:945'}}>CD33</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:947'}}>CD34</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1438'}}>CD116</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1441'}}>CD114</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3554'}}>CD121A</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3563'}}>CD123</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3581'}}>IL-9R</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2057'}}>EPOR</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3122'}}>HLA-DRA</Button>
      </Card></div>
    )
  }
  else if(model.id === 'CFU-GM'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2526'}}>CD15</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:945'}}>CD33</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:947'}}>CD34</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2209'}}>CD64</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1441'}}>CD114</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1436'}}>CD115</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1438'}}>CD116</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3554'}}>CD121A</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3563'}}>CD123</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3566'}}>CD124</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3568'}}>CD125</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3570'}}>CD126</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3122'}}>HLA-DRA</Button>
      </Card></div>
    )
  }
  else if(model.id === 'CFU-G'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:290'}}>CD13</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2526'}}>CD15</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:945'}}>CD33</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1441'}}>CD114</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1438'}}>CD116</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3554'}}>CD121A</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3563'}}>CD123</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3566'}}>CD124</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3568'}}>CD125</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3570'}}>CD126</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3122'}}>HLA-DRA</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Myeloblast'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:290'}}>CD13</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2526'}}>CD15</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:945'}}>CD33</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1441'}}>CD114</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1438'}}>CD116</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3554'}}>CD121A</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3563'}}>CD123</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3566'}}>CD124</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3568'}}>CD125</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3570'}}>CD126</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Neutrophilic Myelocyte'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3684'}}>CD11B</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2526'}}>CD15</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:945'}}>CD33</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1438'}}>CD116</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3563'}}>CD123</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3568'}}>CD125</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Neutrophil'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3684'}}>CD11B</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2526'}}>CD15</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:945'}}>CD33</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Monoblast'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3684'}}>CD11B</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:290'}}>CD13</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:929'}}>CD14</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2526'}}>CD15</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:945'}}>CD33</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2209'}}>CD64</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1436'}}>CD115</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1438'}}>CD116</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3563'}}>CD123</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3566'}}>CD124</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3570'}}>CD126</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3122'}}>HLA-DRA</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Promonocyte'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3684'}}>CD11B</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:290'}}>CD13</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:929'}}>CD14</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:945'}}>CD33</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2209'}}>CD64</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1436'}}>CD115</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1438'}}>CD116</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3563'}}>CD123</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3566'}}>CD124</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3570'}}>CD126</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3122'}}>HLA-DRA</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Monocyte'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3684'}}>CD11B</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:929'}}>CD14</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:945'}}>CD33</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2209'}}>CD64</Button>
      </Card></div>
    )
  }
  else if(model.id === 'BFU-E'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:945'}}>CD33</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1378'}}>CD35</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3815'}}>CD117</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3563'}}>CD123</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:25871'}}>nEPRO</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3122'}}>HLA-DRA</Button>
      </Card></div>
    )
  }
  else if(model.id === 'CFU-E'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:948'}}>CD36</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2993'}}>CD235a</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Proerythroblast'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2993'}}>CD235a</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Erythrocyte'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1378'}}>CD35</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:960'}}>CD44</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1604'}}>CD55</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:966'}}>CD59</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2993'}}>CD235a</Button>
      </Card></div>
    )
  }
  else if(model.id === 'BFU-MK'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:945'}}>CD33</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:947'}}>CD34</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1438'}}>CD116</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3563'}}>CD123</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3570'}}>CD126</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/mmu:16157'}}>IL-11RA</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3122'}}>HLA-DRA</Button>
      </Card></div>
    )
  }
  else if(model.id === 'CFU-MK'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/mmu:16416'}}>CD61</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1438'}}>CD116</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3560'}}>CD122</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3570'}}>CD126</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Mega-karyocyte'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:928'}}>CD9</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:929'}}>CD14</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:948'}}>CD36</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3674'}}>CD41</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/mmu:54368'}}>CD42</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/mmu:16416'}}>CD61</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1438'}}>CD116</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3563'}}>CD123</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3570'}}>CD126</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Platelets'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:928'}}>CD9</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:929'}}>CD14</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:948'}}>CD36</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3674'}}>CD41</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/mmu:54368'}}>CD42</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/mmu:109700'}}>CD49</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/mmu:16416'}}>CD61</Button>
        <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3570'}}>CD126</Button>
      </Card></div>
    )
  }
  else{
    return (
      <div><Card title="基因信息" style={{ width: '200px' }}>
          该基因无更多信息
        </Card></div>
    );
  }
};

export default CustomTooltip_Node