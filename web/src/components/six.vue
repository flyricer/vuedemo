<template>
  <div>
    <button @click="changeValue(-1)">-1</button>
    <span>{{currentVal}}</span>
    <button @click="changeValue(1)">+1</button>
    <p>issue</p>
    <!-- <p>还需要一天完成这个分支</p> -->
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number
    }
  },
  model: {
    prop: 'value',
    event: 'inputs'
  },
  data() {
    return {
      currentVal: this.value
    };
  },
  methods: {
    changeValue(val) {
      this.currentVal += parseInt(val);
      this.$emit("inputs", this.currentVal); // 定义input事件
    }
  }
};
</script>

