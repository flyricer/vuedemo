<template>
  <div class="wrapper">
    <div class="left" v-if="leftbtn">{{ leftbtn.name }}</div>
    <div class="center">{{ title }}</div>
    <div class="right" v-if="rightbtn">{{ rightbtn.name }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'rightbtn', 'leftbtn']
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left,
.right {
  text-align: center;
  padding: 0 10px;
}
.center {
  flex: 1;
  text-align: center;
}
</style>
