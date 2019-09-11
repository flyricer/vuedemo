<template>
  <div>
    <button @click="changeValue(-1)">-1</button>
    <span>{{currentVal}}</span>
    <button @click="changeValue(1)">+1</button>
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
    prop: "value",
    event: "inputs"
  },
  data() {
    return {
      currentVal: this.value,
    };
  },
  updated() {
    console.log('updated')
  },
  methods: {
    changeValue(val) {
      this.currentVal += parseInt(val);
      this.$emit("inputs", this.currentVal); // 定义input事件
    }
  }
};
</script>

<style lang="less" scoped>
.img {
  width: 100%;
  height: 100px;
  background-color: #eeeeee;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    left: -50%; top: -50%;
    border: 1px solid red;
    border-radius: 8px;
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    box-sizing: border-box;
  }
}

</style>
