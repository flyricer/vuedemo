<template>
  <div>
    <h1>这是测试插槽的数据传递</h1>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // person: {
      //   firstname: "jack",
      //   lastname: "ma"
      // }
    };
  }
};
</script>

<style lang="less" scoped></style>
