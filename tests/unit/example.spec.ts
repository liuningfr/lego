import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import TemplateList from '@/components/TemplateList.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    // expect(wrapper.text()).toMatch(msg)
    console.log(wrapper.findComponent(TemplateList))
  })
})
