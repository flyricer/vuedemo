<template>
  <div class="wrapper">
    <button
      v-for="tab in tabs"
      v-bind:key="tab.name"
      v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
      v-on:click="currentTab = tab"
    >{{ tab.name }}</button>

    <component v-bind:is="currentTab.component" class="tab"></component>
  </div>
</template>

<script>
import Sister from "./sister.vue";

const tabs = [
    {
        name: 'Home', 
        component: 'Sister'
    },
    {
        name: 'Posts',
        component: 'Sister'
    },
    {
        name: 'Archive',
        component: 'Sister'
    }
];
export default {
  data() {
    return {
      tabs: tabs,
      currentTab: tabs[0]
    };
  },
  components: {
    Sister
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.active{
    background-color: red;
}
</style>
