import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Hello from '@/components/Hello.vue'
import TemplateList from '@/components/TemplateList.vue'
import axios from 'axios'
import flushPromises from 'flush-promises'

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.get('h1').text()).toBe(msg)
    expect(wrapper.findComponent(Hello).exists()).toBeTruthy()
  })
  it('should update the count when clicking the button', async () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    await wrapper.get('button').trigger('click')
    expect(wrapper.get('button').text()).toBe('2')
  })
  it('should add todo when fill the input and click the add button', async () => {
    const msg = 'new message'
    const todoContent = 'buy milk'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    await wrapper.get('input').setValue(todoContent)
    expect(wrapper.get('input').element.value).toBe(todoContent)
    await wrapper.get('.addTodo').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(1)
    expect(wrapper.get('li').text()).toBe(todoContent)
    expect(wrapper.emitted()).toHaveProperty('send')
    const events = wrapper.emitted('send')
    if (events && events.length > 0) {
      expect(events[0]).toEqual([todoContent])
    }
  })
  it.only('should load user message when click the load button', async () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    mockAxios.get.mockResolvedValueOnce({ data: { username: 'viking'}})
    await wrapper.get('.loadUser').trigger('click')
    expect(mockAxios.get).toHaveBeenCalled()
    expect(wrapper.find('.loading').exists()).toBeTruthy()
    await flushPromises()
    // 界面更新完毕
    expect(wrapper.find('.loading').exists()).toBeFalsy()
    expect(wrapper.get('.userName').text()).toBe('viking')
  })
  it.only('should load error when return promise reject', async () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    mockAxios.get.mockRejectedValueOnce('error')
    await wrapper.get('.loadUser').trigger('click')
    await flushPromises()
    expect(wrapper.find('.loading').exists()).toBe(false)
    expect(wrapper.find('.error').exists()).toBe(true)
  })
})
