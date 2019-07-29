<template>
  <div>
    <test :level='1'>Hello world!</test>
    <test :level='2'>Hello world!</test>
  </div>
</template>
<script>
const test = {
  // functional: true,
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render: function (createElement, context) {
    const data = {
      style: {
        color:'red'
      }
    }
    return createElement('h' + this.level, data, this.$slots.default);
  }
};

export default {
  data() {
    return {}
  },
  components: {
    test: test
  }
};
</script>

<style lang="less" scoped></style>
