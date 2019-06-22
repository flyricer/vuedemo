<template>
  <div class="about">
    <h1>This is an about page</h1>
    <base-list></base-list>
  </div>
</template>

<script>
import baseList from "@/components/parent.vue";
// import baseItem from "@/components/child.vue";

export default {
  data() {
    return {
      list: [{ message: "Foo" }, { message: "Bar" }, { message: "Ion" }],
      username: "jack"
    };
  },
  methods: {},
  computed: {},
  components: {
    baseList
    // baseItem
  }
};
</script>

<style lang="less" scoped></style>
