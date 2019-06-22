<template>
  <div>
    <p class="message-text">我是Sister组件</p>
    <button @click="messageBrother" class="btn">给哥哥发消息</button>
    <div v-if="fromBrother" class="alert" v-html="fromBrother"></div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus.js";

export default {
  name: "SisterCard",
  data() {
    return {
      theCardTitle: "Sister Card",
      fromBrother: ""
    };
  },
  methods: {
    messageBrother() {
      EventBus.$emit("sisterSaid", "妈妈说，该做作业了！(^_^)!!!");
    }
  },
  created() {
    EventBus.$on("brotherSaid", message => {
      this.fromBrother = message;
    });
  }
};
</script>

<style lang="less" scoped></style>
