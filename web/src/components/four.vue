<template>
<div class="child">
  <p>我是儿子，父亲对我说： {{give}}</p>
  <a href="javascript:void(0);" rel="external nofollow" @click="returnBackFn">回应</a>
</div>
</template>
<script>
export default {
  props: {
    give: String
  },
  model: {
    prop: 'give',
    event: 'returnBack'
  },
  methods: {
    returnBackFn() {
      this.$emit('returnBack', '还你200块');
    }
  }
}
</script>

<style lang="less" scoped>

</style>
