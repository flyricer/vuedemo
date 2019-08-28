import Sum from './sum.vue'

Sum.install = function (Vue) {
    Vue.component(Sum.name, Sum);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default Sum;