/*
 * @Author: your name
 * @Date: 2021-05-26 21:05:08
 * @LastEditTime: 2021-05-27 09:29:41
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
        <Button onClick={()=>{window.location.href=''}}>(CD2)</Button>
        <Button onClick={()=>{window.location.href=''}}>(CD5)</Button>
        <Button onClick={()=>{window.location.href=''}}>CD7</Button>
        <Button onClick={()=>{window.location.href=''}}>CD25</Button>
        <Button onClick={()=>{window.location.href=''}}>CD38</Button>
        <Button onClick={()=>{window.location.href=''}}>CD44</Button>
        <Button onClick={()=>{window.location.href=''}}>(CD71)</Button>
        <Button onClick={()=>{window.location.href=''}}>CD117</Button>
        <Button onClick={()=>{window.location.href=''}}>CD127</Button>
        <Button onClick={()=>{window.location.href=''}}>TdT</Button>
        <Button onClick={()=>{window.location.href=''}}>HLA-DR</Button>
      </Card></div>
    )
  }
  else if(model.id === 'DN3'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD2</Button>
        <Button onClick={()=>{window.location.href=''}}>CD5</Button>
        <Button onClick={()=>{window.location.href=''}}>CD7</Button>
        <Button onClick={()=>{window.location.href=''}}>CD25</Button>
        <Button onClick={()=>{window.location.href=''}}>CD38</Button>
        <Button onClick={()=>{window.location.href=''}}>CD44</Button>
        <Button onClick={()=>{window.location.href=''}}>CD71</Button>
        <Button onClick={()=>{window.location.href=''}}>CD117</Button>
        <Button onClick={()=>{window.location.href=''}}>(CD127)</Button>
        <Button onClick={()=>{window.location.href=''}}>TdT</Button>
      </Card></div>
    )
  }
  else if(model.id === 'DN4'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD1</Button>
        <Button onClick={()=>{window.location.href=''}}>CD2</Button>
        <Button onClick={()=>{window.location.href=''}}>(CD4)</Button>
        <Button onClick={()=>{window.location.href=''}}>CD5</Button>
        <Button onClick={()=>{window.location.href=''}}>CD7</Button>
        <Button onClick={()=>{window.location.href=''}}>CD38</Button>
        <Button onClick={()=>{window.location.href=''}}>(CD44)</Button>
        <Button onClick={()=>{window.location.href=''}}>(CD117)</Button>
        <Button onClick={()=>{window.location.href=''}}>TdT</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Intermediate single-postive cell(ISP)'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD2</Button>
        <Button onClick={()=>{window.location.href=''}}>CD3</Button>
        <Button onClick={()=>{window.location.href=''}}>CD4or8</Button>
        <Button onClick={()=>{window.location.href=''}}>CD5</Button>
        <Button onClick={()=>{window.location.href=''}}>CD7</Button>
        <Button onClick={()=>{window.location.href=''}}>CD38</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Double-positive cell(DP)'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD2</Button>
        <Button onClick={()=>{window.location.href=''}}>CD3</Button>
        <Button onClick={()=>{window.location.href=''}}>CD4or8</Button>
        <Button onClick={()=>{window.location.href=''}}>CD5</Button>
        <Button onClick={()=>{window.location.href=''}}>CD7</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Pro B Cell'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>(CD9)</Button>
        <Button onClick={()=>{window.location.href=''}}>(CD10)</Button>
        <Button onClick={()=>{window.location.href=''}}>CD19</Button>
        <Button onClick={()=>{window.location.href=''}}>(CD20)</Button>
        <Button onClick={()=>{window.location.href=''}}>CD22</Button>
        <Button onClick={()=>{window.location.href=''}}>CD24</Button>
        <Button onClick={()=>{window.location.href=''}}>CD117</Button>
        <Button onClick={()=>{window.location.href=''}}>CD127</Button>
        <Button onClick={()=>{window.location.href=''}}>TdT</Button>
        <Button onClick={()=>{window.location.href=''}}>HLA-DR</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Pre B I cell'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD9</Button>
        <Button onClick={()=>{window.location.href=''}}>CD10</Button>
        <Button onClick={()=>{window.location.href=''}}>CD19</Button>
        <Button onClick={()=>{window.location.href=''}}>CD20</Button>
        <Button onClick={()=>{window.location.href=''}}>CD22</Button>
        <Button onClick={()=>{window.location.href=''}}>CD24</Button>
        <Button onClick={()=>{window.location.href=''}}>CD38</Button>
        <Button onClick={()=>{window.location.href=''}}>CD117</Button>
        <Button onClick={()=>{window.location.href=''}}>CD127</Button>
        <Button onClick={()=>{window.location.href=''}}>TdT</Button>
        <Button onClick={()=>{window.location.href=''}}>HLA-DR</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Immature B cell'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>(CD9)</Button>
        <Button onClick={()=>{window.location.href=''}}>CD19</Button>
        <Button onClick={()=>{window.location.href=''}}>CD20</Button>
        <Button onClick={()=>{window.location.href=''}}>CD21</Button>
        <Button onClick={()=>{window.location.href=''}}>CD22</Button>
        <Button onClick={()=>{window.location.href=''}}>CD24</Button>
        <Button onClick={()=>{window.location.href=''}}>CD37</Button>
        <Button onClick={()=>{window.location.href=''}}>HLA-DR</Button>
        <Button onClick={()=>{window.location.href=''}}>IgM</Button>
      </Card></div>
    )
  }
  else if(model.id === 'B Cell'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>(CD5)</Button>
        <Button onClick={()=>{window.location.href=''}}>(CD9)</Button>
        <Button onClick={()=>{window.location.href=''}}>CD19</Button>
        <Button onClick={()=>{window.location.href=''}}>CD20</Button>
        <Button onClick={()=>{window.location.href=''}}>CD21</Button>
        <Button onClick={()=>{window.location.href=''}}>CD22</Button>
        <Button onClick={()=>{window.location.href=''}}>(CD23)</Button>
        <Button onClick={()=>{window.location.href=''}}>CD24</Button>
        <Button onClick={()=>{window.location.href=''}}>CD35</Button>
        <Button onClick={()=>{window.location.href=''}}>CD37</Button>
        <Button onClick={()=>{window.location.href=''}}>HLA-DR</Button>
        <Button onClick={()=>{window.location.href=''}}>IgM</Button>
        <Button onClick={()=>{window.location.href=''}}>IgD</Button>
      </Card></div>
    )
  }
  else if(model.id === 'CFU-GEMM'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD33</Button>
        <Button onClick={()=>{window.location.href=''}}>CD34</Button>
        <Button onClick={()=>{window.location.href=''}}>CD116</Button>
        <Button onClick={()=>{window.location.href=''}}>CD114</Button>
        <Button onClick={()=>{window.location.href=''}}>CD121</Button>
        <Button onClick={()=>{window.location.href=''}}>CD123</Button>
        <Button onClick={()=>{window.location.href=''}}>IL-9R</Button>
        <Button onClick={()=>{window.location.href=''}}>EPOR</Button>
        <Button onClick={()=>{window.location.href=''}}>HLA-DR</Button>
      </Card></div>
    )
  }
  else if(model.id === 'CFU-GM'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD15</Button>
        <Button onClick={()=>{window.location.href=''}}>CD33</Button>
        <Button onClick={()=>{window.location.href=''}}>CD34</Button>
        <Button onClick={()=>{window.location.href=''}}>CD64</Button>
        <Button onClick={()=>{window.location.href=''}}>CD114</Button>
        <Button onClick={()=>{window.location.href=''}}>CD115</Button>
        <Button onClick={()=>{window.location.href=''}}>CD116</Button>
        <Button onClick={()=>{window.location.href=''}}>CD121</Button>
        <Button onClick={()=>{window.location.href=''}}>CD123</Button>
        <Button onClick={()=>{window.location.href=''}}>CD124</Button>
        <Button onClick={()=>{window.location.href=''}}>CD125</Button>
        <Button onClick={()=>{window.location.href=''}}>CD126</Button>
        <Button onClick={()=>{window.location.href=''}}>HLA-DR</Button>
      </Card></div>
    )
  }
  else if(model.id === 'CFU-G'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD13</Button>
        <Button onClick={()=>{window.location.href=''}}>CD15</Button>
        <Button onClick={()=>{window.location.href=''}}>CD33</Button>
        <Button onClick={()=>{window.location.href=''}}>CD114</Button>
        <Button onClick={()=>{window.location.href=''}}>CD116</Button>
        <Button onClick={()=>{window.location.href=''}}>CD121</Button>
        <Button onClick={()=>{window.location.href=''}}>CD123</Button>
        <Button onClick={()=>{window.location.href=''}}>CD124</Button>
        <Button onClick={()=>{window.location.href=''}}>CD125</Button>
        <Button onClick={()=>{window.location.href=''}}>CD126</Button>
        <Button onClick={()=>{window.location.href=''}}>HLA-DR</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Myeloblast'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD13</Button>
        <Button onClick={()=>{window.location.href=''}}>CD15</Button>
        <Button onClick={()=>{window.location.href=''}}>CD33</Button>
        <Button onClick={()=>{window.location.href=''}}>CD114</Button>
        <Button onClick={()=>{window.location.href=''}}>CD116</Button>
        <Button onClick={()=>{window.location.href=''}}>CD121</Button>
        <Button onClick={()=>{window.location.href=''}}>CD123</Button>
        <Button onClick={()=>{window.location.href=''}}>CD124</Button>
        <Button onClick={()=>{window.location.href=''}}>CD125</Button>
        <Button onClick={()=>{window.location.href=''}}>CD126</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Neutrophilic Myelocyte'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD11b</Button>
        <Button onClick={()=>{window.location.href=''}}>CD15</Button>
        <Button onClick={()=>{window.location.href=''}}>CD33</Button>
        <Button onClick={()=>{window.location.href=''}}>CD116</Button>
        <Button onClick={()=>{window.location.href=''}}>CD123</Button>
        <Button onClick={()=>{window.location.href=''}}>CD125</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Neutrophil'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD11b</Button>
        <Button onClick={()=>{window.location.href=''}}>CD15</Button>
        <Button onClick={()=>{window.location.href=''}}>CD33</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Monoblast'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD11b</Button>
        <Button onClick={()=>{window.location.href=''}}>CD13</Button>
        <Button onClick={()=>{window.location.href=''}}>CD14</Button>
        <Button onClick={()=>{window.location.href=''}}>CD15</Button>
        <Button onClick={()=>{window.location.href=''}}>CD33</Button>
        <Button onClick={()=>{window.location.href=''}}>CD64</Button>
        <Button onClick={()=>{window.location.href=''}}>CD115</Button>
        <Button onClick={()=>{window.location.href=''}}>CD116</Button>
        <Button onClick={()=>{window.location.href=''}}>CD123</Button>
        <Button onClick={()=>{window.location.href=''}}>CD124</Button>
        <Button onClick={()=>{window.location.href=''}}>CD126</Button>
        <Button onClick={()=>{window.location.href=''}}>HLA-DR</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Promonocyte'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD11B</Button>
        <Button onClick={()=>{window.location.href=''}}>CD13</Button>
        <Button onClick={()=>{window.location.href=''}}>CD14</Button>
        <Button onClick={()=>{window.location.href=''}}>CD33</Button>
        <Button onClick={()=>{window.location.href=''}}>CD64</Button>
        <Button onClick={()=>{window.location.href=''}}>CD115</Button>
        <Button onClick={()=>{window.location.href=''}}>CD116</Button>
        <Button onClick={()=>{window.location.href=''}}>CD123</Button>
        <Button onClick={()=>{window.location.href=''}}>CD124</Button>
        <Button onClick={()=>{window.location.href=''}}>CD126</Button>
        <Button onClick={()=>{window.location.href=''}}>HLA-DR</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Monocyte'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD11b</Button>
        <Button onClick={()=>{window.location.href=''}}>CD14</Button>
        <Button onClick={()=>{window.location.href=''}}>CD33</Button>
        <Button onClick={()=>{window.location.href=''}}>CD64</Button>
      </Card></div>
    )
  }
  else if(model.id === 'BFU-E'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD33</Button>
        <Button onClick={()=>{window.location.href=''}}>CD35</Button>
        <Button onClick={()=>{window.location.href=''}}>CD117</Button>
        <Button onClick={()=>{window.location.href=''}}>CD123</Button>
        <Button onClick={()=>{window.location.href=''}}>EPRO</Button>
        <Button onClick={()=>{window.location.href=''}}>HLA-DR</Button>
      </Card></div>
    )
  }
  else if(model.id === 'CFU-E'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD36</Button>
        <Button onClick={()=>{window.location.href=''}}>CD235a</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Proerythroblast'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD235a</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Erythrocyte'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD35</Button>
        <Button onClick={()=>{window.location.href=''}}>CD44</Button>
        <Button onClick={()=>{window.location.href=''}}>CD55</Button>
        <Button onClick={()=>{window.location.href=''}}>CD59</Button>
        <Button onClick={()=>{window.location.href=''}}>CD235a</Button>
      </Card></div>
    )
  }
  else if(model.id === 'BFU-MK'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD33</Button>
        <Button onClick={()=>{window.location.href=''}}>CD34</Button>
        <Button onClick={()=>{window.location.href=''}}>CD116</Button>
        <Button onClick={()=>{window.location.href=''}}>CD123</Button>
        <Button onClick={()=>{window.location.href=''}}>CD126</Button>
        <Button onClick={()=>{window.location.href=''}}>IL-11R</Button>
        <Button onClick={()=>{window.location.href=''}}>HLA-DR</Button>
      </Card></div>
    )
  }
  else if(model.id === 'CFU-MK'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD61</Button>
        <Button onClick={()=>{window.location.href=''}}>CD116</Button>
        <Button onClick={()=>{window.location.href=''}}>CD122</Button>
        <Button onClick={()=>{window.location.href=''}}>CD126</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Mega-karyocyte'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD9</Button>
        <Button onClick={()=>{window.location.href=''}}>CD14</Button>
        <Button onClick={()=>{window.location.href=''}}>CD36</Button>
        <Button onClick={()=>{window.location.href=''}}>CD41</Button>
        <Button onClick={()=>{window.location.href=''}}>CD42</Button>
        <Button onClick={()=>{window.location.href=''}}>CD61</Button>
        <Button onClick={()=>{window.location.href=''}}>CD116</Button>
        <Button onClick={()=>{window.location.href=''}}>CD123</Button>
        <Button onClick={()=>{window.location.href=''}}>CD126</Button>
      </Card></div>
    )
  }
  else if(model.id === 'Platelets'){
    return(
      <div><Card title="基因信息" style={{ width: '200px' }}>
        <Button onClick={()=>{window.location.href=''}}>CD9</Button>
        <Button onClick={()=>{window.location.href=''}}>CD14</Button>
        <Button onClick={()=>{window.location.href=''}}>CD36</Button>
        <Button onClick={()=>{window.location.href=''}}>CD41</Button>
        <Button onClick={()=>{window.location.href=''}}>CD42</Button>
        <Button onClick={()=>{window.location.href=''}}>CD49</Button>
        <Button onClick={()=>{window.location.href=''}}>CD61</Button>
        <Button onClick={()=>{window.location.href=''}}>CD126</Button>
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