import { mount } from '@vue/test-utils'
import Header from '@/components/common/Header.vue'

describe('Header', () => {
  it('has a logo', () => {
    const wrapper = mount(Header)
    expect(wrapper.contains('.logo')).toBe(true)
  })
  it('renders correctly', () => {
    const wrapper = mount(Header)
    expect(wrapper.element).toMatchSnapshot()
  })
})
