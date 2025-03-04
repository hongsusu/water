import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import Link from './Link';

describe('Link.vue', () => {
  let wrapperUrl = null;
  let wrapperTo = null;
  let wrapperLoading = null;

  beforeEach(() => {
    wrapperUrl = shallowMount(Link, {
      propsData: {
        url: 'https://baidu.com',
        target: '_blank',
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    wrapperTo = shallowMount(Link, {
      propsData: {
        to: {
          path: '/',
        },
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    wrapperLoading = shallowMount(Link, {
      propsData: {
        size: 'small',
        loading: true,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
  });

  it('url and target', (done) => {
    wrapperUrl.vm.$nextTick(() => {
      try {
        expect(wrapperUrl.vm.urlValue).toBe('https://baidu.com');
        expect(wrapperUrl.vm.targetValue).toBe('_blank');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('loading', (done) => {
    wrapperLoading.vm.$nextTick(() => {
      try {
        expect(wrapperLoading.vm.loadLarge).toBeFalsy();
        expect(wrapperLoading.vm.loadSmall).toBeTruthy();
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('to', (done) => {
    wrapperTo.vm.$nextTick(() => {
      try {
        expect(wrapperTo.vm.toValue).toEqual({ path: '/' });
        expect(wrapperTo.vm.targetValue).toBe('_self');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
