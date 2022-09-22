import { Module } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import { GlobalDataProps } from './index'
import { TextComponentProps } from '../defaultProps'
export interface EditorProps {
  // 供中间编辑器渲染的数组
  components: ComponentData[];
  // 当前编辑的是哪个元素，uuid
  currentElement: string;
  // 当然最后保存的时候还有有一些项目信息，这里并没有写出，等做到的时候再补充
}
export interface ComponentData {
  // 这个元素的 属性，属性请详见下面
  props: Partial<TextComponentProps>;
  // id，uuid v4 生成
  id: string;
  // 业务组件库名称 l-text，l-image 等等 
  name: string;
}

export const testComponents: ComponentData[] = [
  { id: uuidv4(), name: 'l-text', props: { text: 'hello', fontSize: '10px', 'lineHeight': '1' }},
  { id: uuidv4(), name: 'l-text', props: { text: 'hello2', fontSize: '20px', color: 'red', 'lineHeight': '2' }},
  { id: uuidv4(), name: 'l-text', props: { text: 'hello3', fontSize: '30px', fontWeight: 'bold', actionType: 'url', url: 'https://www.baidu.com', 'lineHeight': '3' }}
]

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: ''
  },
  mutations: {
    addComponent(state, props: Partial<TextComponentProps>) {
      const newComponent: ComponentData = {
        id: uuidv4(),
        name: 'l-text',
        props
      }
      state.components.push(newComponent)
    },
    setActive(state, currentId: string) {
      state.currentElement = currentId
    }
  },
  getters: {
    getCurrentElement: (state) => {
      return state.components.find((component) => component.id === state.currentElement)
    }
  }
}

export default editor