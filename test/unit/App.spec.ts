import { expect } from 'chai'
import { div } from './utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('should name equals World', done => {
    const vm = new App({
      el: div
    })

    expect(vm.name).to.equals('World')

    const $el = vm.$el.querySelector('h1.title')
    expect($el).is.not.be.null
    expect($el.textContent.trim()).to.equals('Hello World!')

    vm.name = 'Vue'
    vm.$nextTick(() => {
      expect($el.textContent.trim()).to.equals('Hello Vue!')
      done()
    })
  })
})
