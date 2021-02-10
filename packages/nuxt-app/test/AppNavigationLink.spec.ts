import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import AppNavigationLink from '../components/AppNavigationLink.vue';

describe('AppNavigationLink component', () => {
  const createSimpleInstance = (
    props = {
      label: 'HOME',
      path: '/',
    }
  ) =>
    shallowMount(AppNavigationLink, {
      propsData: props,
      stubs: { NuxtLink: RouterLinkStub },
    });

  test('is a Vue instance', () => {
    const wrapper = createSimpleInstance();
    expect(wrapper.vm).toBeTruthy();
  });

  test('has a nuxt-link with specified path and label', () => {
    const wrapper = createSimpleInstance();
    const link = wrapper.getComponent(RouterLinkStub);
    expect(link.props().to).toBe('/');
    expect(link.html()).toContain('HOME');
  });
});
