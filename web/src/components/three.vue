<template>
  <div class="wrapper">
    <input v-bind="$attrs" :value="value" v-on="inputListeners">
  </div>
</template>

<script>
// import Sister from "./sister.vue";

export default {
  props: ['value'],
  data() {
    return {

    };
  },
  methods: {
    
  },
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
