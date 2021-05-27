/*
 * @Author: your name
 * @Date: 2021-05-24 16:50:48
 * @LastEditTime: 2021-05-24 16:50:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \frontend\src\pages\base\mymod\GraphTest\view.ts
 */
import { NodeView } from '@antv/x6'

export class SimpleNodeView extends NodeView {
  protected renderMarkup() {
    return this.renderJSONMarkup({
      tagName: 'rect',
      selector: 'body',
    })
  }

  update() {
    super.update({
      body: {
        refWidth: '100%',
        refHeight: '100%',
        fill: '#31d0c6',
      },
    })
  }
}
