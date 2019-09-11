<template>
  <div class="about">
    <h1>This is an about page</h1>
    <base-list></base-list>
    <!-- <echart-table></echart-table> -->
  </div>
</template>

<script>
import baseList from "@/components/parent.vue";
// import EchartTable from "@/echarts/index.vue";

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
    // EchartTable
  },
};
</script>

<style lang="less" scoped></style>
