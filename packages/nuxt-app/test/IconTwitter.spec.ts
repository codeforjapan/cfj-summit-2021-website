import { mount } from '@vue/test-utils';
import IconTwitter from '../components/IconTwitter.vue';

describe('IconTwitter component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IconTwitter);
    expect(wrapper.vm).toBeTruthy();
  });
});
