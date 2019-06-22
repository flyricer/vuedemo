<template>
  <div>
    <p class="message-text">我是Brother组件</p>
    <button @click="messageSister" class="btn">给妹妹发消息</button>
    <div v-if="fromSister" class="alert" v-html="fromSister"></div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus.js";

export default {
  name: "BrotherCard",
  data() {
    return {
      theCardTitle: "Brother Card",
      fromSister: ""
    };
  },
  methods: {
    messageSister() {
      EventBus.$emit("brotherSaid", "妈妈说，该做作业了！(^_^)!!!");
    }
  },
  created() {
    EventBus.$on("sisterSaid", message => {
      this.fromSister = message;
    });
  }
};
</script>

<style lang="less" scoped></style>
