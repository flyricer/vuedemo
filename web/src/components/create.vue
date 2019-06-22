<template>
  <div>
    <anchored-heading>Hello world!</anchored-heading>
  </div>
</template>
<script>
export default {
  name: "render",
  components: {
    anchoredHeading: {
      render: function(createElement) {
        return createElement(
          "div", // tag name 标签名称
          {
            // 和`v-bind:class`一样的 API
            class: {
              foo: true,
              bar: false
            },
            // 和`v-bind:style`一样的 API
            style: {
              color: "red",
              fontSize: "14px"
            },
            // 正常的 HTML 特性
            attrs: {
              id: "foo"
            },
            // 组件 props
            props: {
              myProp: "bar"
            }
          },
          [
            createElement("h1", "一则头条"),
            createElement("span", "文章内容"),
            this.$slots.default
          ] // 子组件中的阵列
        );
      }
      // props: {
      //   level: {
      //     type: Number,
      //     required: true
      //   }
      // }
    }
  }
};
</script>

<style lang="less" scoped></style>
