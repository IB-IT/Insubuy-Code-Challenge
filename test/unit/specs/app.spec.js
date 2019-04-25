import Vue from 'vue'
import App from '@/app'

describe('App.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.main').textContent)
      .toEqual('Something')
  })
})
