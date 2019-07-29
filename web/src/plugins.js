export default {
  install(Vue, options) {
    Vue.directive('setcolor', {
      bind (el, binding, vnode, oldVnode) {
        el.style.color = binding.value.color
      }
    })
  }
};
