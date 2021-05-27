/*
 * @Author: your name
 * @Date: 2021-05-23 10:31:59
 * @LastEditTime: 2021-05-24 22:13:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \frontend\src\pages\base\mymod\Graph\index.tsx
 */
import React from 'react'
import { Button } from 'antd'
import { Graph, Shape } from '@antv/x6';
import { DagreLayout } from '@antv/layout'
import './index.css'
import { SimpleNodeView } from './view'

const data: any = {
  nodes: [],
  edges: [],
}

for (let i = 1; i <= 12; i++) {
  data.nodes.push({
    id: i + '',
    shape: 'ellipse',
    width: 60,
    height: 60,
    label: i,
    attrs: {
      body: {
        fill: '#855af2',
        stroke: 'transparent',
      },
      label: {
        fill: '#ffffff',
      },
    },
  })
}

data.edges.push(
  ...[
    {
      source: '1',
      target: '2',
      attrs: {
        line: {
          stroke: '#fd6d6f',
          strokeWidth: 1,
        },
      },
    },
    {
      source: '2',
      target: '3',
      attrs: {
        line: {
          stroke: '#fd6d6f',
          strokeWidth: 1,
        },
      },
    },
    {
      source: '2',
      target: '4',
      attrs: {
        line: {
          stroke: '#fd6d6f',
          strokeWidth: 1,
        },
      },
    },
    {
      source: '4',
      target: '5',
      attrs: {
        line: {
          stroke: '#fd6d6f',
          strokeWidth: 1,
        },
      },
    },
    {
      source: '4',
      target: '6',
      attrs: {
        line: {
          stroke: '#fd6d6f',
          strokeWidth: 1,
        },
      },
    },
    {
      source: '4',
      target: '7',
      attrs: {
        line: {
          stroke: '#fd6d6f',
          strokeWidth: 1,
        },
      },
    },
    {
      source: '4',
      target: '8',
      attrs: {
        line: {
          stroke: '#fd6d6f',
          strokeWidth: 1,
        },
      },
    },
    {
      source: '5',
      target: '9',
      attrs: {
        line: {
          stroke: '#fd6d6f',
          strokeWidth: 1,
        },
      },
    },
    {
      source: '6',
      target: '10',
      attrs: {
        line: {
          stroke: '#fd6d6f',
          strokeWidth: 1,
        },
      },
    },
    {
      source: '7',
      target: '11',
      attrs: {
        line: {
          stroke: '#fd6d6f',
          strokeWidth: 1,
        },
      },
    },
    {
      source: '8',
      target: '12',
      attrs: {
        line: {
          stroke: '#fd6d6f',
          strokeWidth: 1,
        },
      },
    },
  ],
)

interface Props {}

interface State {
  canUndo: boolean
  canRedo: boolean
}

export default class Example extends React.Component<Props, State> {

  private history: Graph.HistoryManager
  private container: HTMLDivElement
  private minimapContainer: HTMLDivElement

  state: State = {
    canRedo: false,
    canUndo: false,
  }

  componentDidMount() {
    const graph = new Graph({
      container: this.container,
      width: 1000,
      height: 800,
      background: {
        color: '0x0000',                             // 设置画布背景颜色
      },
      grid: {
        size: 10,                                     // 网格大小 10px
        visible: false,                               // 渲染网格背景
      },
      history: true,                                  //撤销重做
      snapline: true,                                 //对齐线
      scroller: {                                     //滚动
        enabled: true,
        pannable:true,
        pageVisible: true,
        pageBreak: false,
      },
      mousewheel: {                                   //按键修饰
        enabled: true,
        modifiers: 'ctrl',
      },
      minimap: {                                      //小地图
        enabled: true,
        container: this.minimapContainer,
        width: 300,
        height: 200,
        padding: 10,
        graphOptions: {
          async: true,
          getCellView(cell) {
            if (cell.isNode()) {
              return SimpleNodeView
            }
          },
          createCellView(cell) {
            if (cell.isEdge()) {
              return null
            }
          },
        },
      },
    })

    const dagreLayout = new DagreLayout({
      type: 'dagre',
      rankdir: 'LR',
      align: 'UR',
      ranksep: 30,
      nodesep: 15,
      controlPoints: true,
    })
    const model = dagreLayout.layout(data)

    graph.fromJSON(model)
    // graph.on('node:click', ({ node }) => { 
    //   if(node.store.data.event === "jump1"){
    //     window.location.href='http://www.baidu.com' 
    //   }   
    //   if(node.store.data.event === "jump2"){
    //     window.location.href='http://www.sougou.com' 
    //   }    
    // })

    this.history = graph.history
    this.history.on('change', () => {
      this.setState({
        canRedo: this.history.canRedo(),
        canUndo: this.history.canUndo(),
      })
    })
  }

  onUndo = () => {
    this.history.undo()
  }

  onRedo = () => {
    this.history.redo()
  }

  refContainer = (container: HTMLDivElement) => {
    this.container = container
  }

  refMiniMapContainer = (container: HTMLDivElement) => {
    this.minimapContainer = container
  }

  render() {
    return (
      <div className="app">
        <div className="app-btns">
          <Button.Group>
            <Button onClick={this.onUndo} disabled={!this.state.canUndo}>
              恢复
            </Button>
            <Button onClick={this.onRedo} disabled={!this.state.canRedo}>
              重做
            </Button>
          </Button.Group>
        </div>
        <div ref={this.refContainer} className="app-content" />
        <div className="app-minimap" ref={this.refMiniMapContainer} />
      </div>
    )
  }
}