/*
 * @Author: your name
 * @Date: 2021-05-27 09:15:51
 * @LastEditTime: 2021-05-28 14:40:19
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
    if(model.id === 'Hematopietic stem cell:Lymphoid stem cell Double-negative cell(DNI)'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3574'}}>IL-7</Button>
        </Card></div>
      )
    }
    else if(model.id === 'Hematopietic stem cell:Myeloid Stem Cell'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2323'}}>Flt3L</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1440'}}>G-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3552+hsa:3553'}}>IL-1</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3569'}}>IL-6</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3589'}}>IL-11</Button>
        </Card></div>
      )
    }
    else if(model.id === 'Lymphoid stem cell Double-negative cell(DNI):Pro T cell(DN2)'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3574'}}>IL-7</Button>
        </Card></div>
      )
    }
    else if(model.id === 'Pro T cell(DN2):DN3'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3574'}}>IL-7</Button>
        </Card></div>
      )
    }
    else if(model.id === 'DN3:DN4'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3574'}}>(IL-7)</Button>
        </Card></div>
      )
    }
    else if(model.id === 'DN3:γδ T cell'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3574'}}>(IL-7)</Button>
        </Card></div>
      )
    }
    else if(model.id === 'Lymphoid stem cell Double-negative cell(DNI):Pro B Cell'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3574'}}>IL-7</Button>
        </Card></div>
      )
    }
    else if(model.id === 'Myeloid Stem Cell:CFU-GEMM'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2323'}}>Flt3L</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1440'}}>G-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>   
        </Card></div>
      )
    }
    else if(model.id === 'CFU-GEMM:CFU-Mast'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3565'}}>IL-4</Button>   
        </Card></div>
      )
    }
    else if(model.id === 'CFU-Mast:Mast cell'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3565'}}>IL-4</Button>   
        </Card></div>
      )
    }
    else if(model.id === 'CFU-GEMM:CFU-Bas'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>   
        </Card></div>
      )
    }
    else if(model.id === 'CFU-Bas:Myeloblast(1)'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>   
        </Card></div>
      )
    }
    else if(model.id === 'Myeloblast(1):Basophilic Myelocyte'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>   
        </Card></div>
      )
    }
    else if(model.id === 'Basophilic Myelocyte:Basophil'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>   
        </Card></div>
      )
    }
    else if(model.id === 'CFU-GEMM:CFU-E0'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2323'}}>Flt3L</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>   
        </Card></div>
      )
    }
    else if(model.id === 'CFU-E0:Myeloblast(2)'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3567'}}>IL-5</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'Myeloblast(2):Eosinophilic Myelocyte'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3567'}}>IL-5</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'Eosinophilic Myelocyte:Eosinophil'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3567'}}>IL-5</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'CFU-GEMM:CFU-GM'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1440'}}>G-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'CFU-GM:CFU-M/DC'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2323'}}>Flt3L</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>  
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:7124'}}>TNF</Button>
        </Card></div>
      )
    }
    else if(model.id === 'CFU-M/DC:Myeloid Related Dendritic Cell(1)'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2323'}}>Flt3L</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3565'}}>IL-4</Button>  
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:7124'}}>TNF</Button>
        </Card></div>
      )
    }
    else if(model.id === 'CFU-M/DC:Monoblast'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1435'}}>M-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'Monoblast:Promonocyte'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1435'}}>M-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'Promonocyte:Monocyte'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1435'}}>M-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'Monocyte:Myeloid Related Dendritic Cell(2)'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3565'}}>IL-4</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'Monocyte:Macrophage'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1435'}}>M-CSF</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'CFU-GM:CFU-G'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2323'}}>Flt3L</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1440'}}>G-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'CFU-G:Myeloblast'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1440'}}>G-CSF</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'Myeloblast:Neutrophilic Myelocyte'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1440'}}>G-CSF</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'Neutrophilic Myelocyte:Neutrophil'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1440'}}>G-CSF</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'CFU-GEMM:BFU-E'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2323'}}>Flt3L</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3565'}}>IL-4</Button>   
        </Card></div>
      )
    }
    else if(model.id === 'BFU-E:CFU-E'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3565'}}>IL-4</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2056'}}>EPO</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'CFU-E:Proerythroblast'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2056'}}>EPO</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:7066'}}>TPO</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'Proerythroblast:Erythrocyte'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2056'}}>EPO</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'CFU-GEMM:BFU-MK'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2323'}}>Flt3L</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3569'}}>IL-6</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3589'}}>IL-11</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:7066'}}>TPO</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'BFU-MK:CFU-MK'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:2323'}}>Flt3L</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href=''}}>Meg-CSF</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3569'}}>IL-6</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3589'}}>IL-11</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:7066'}}>TPO</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'CFU-MK:Mega-karyocyte'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:4254'}}>SCF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:1437'}}>GM-CSF</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3562'}}>IL-3</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3569'}}>IL-6</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3589'}}>IL-11</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:7066'}}>TPO</Button>  
        </Card></div>
      )
    }
    else if(model.id === 'Mega-karyocyte:Platelets'){
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3569'}}>IL-6</Button> 
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:3589'}}>IL-11</Button>
            <Button onClick={()=>{window.location.href='https://www.kegg.jp/entry/hsa:7066'}}>TPO</Button>  
        </Card></div>
      )
    }
    else{
      return (
        <div><Card title="基因信息" style={{ width: '200px' }}>
              该Edge无更多信息  
        </Card></div>
      )
    }
}

export default CustomTooltip_Edge