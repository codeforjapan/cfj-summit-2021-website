import { mount } from '@vue/test-utils';
import IconFacebook from '../components/IconFacebook.vue';

describe('IconFacebook component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IconFacebook);
    expect(wrapper.vm).toBeTruthy();
  });
});
