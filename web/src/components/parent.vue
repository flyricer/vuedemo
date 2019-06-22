<template>
  <div class="parent">
    <brother-card></brother-card>
    <sister-card></sister-card>
  </div>
</template>

<script>
import BrotherCard from "@/components/brother.vue";
import SisterCard from "@/components/sister.vue";

export default {
  data() {
    return {
    };
  },
  methods: {},
  computed: {},
  components: {
    BrotherCard,
    SisterCard
  }
};
</script>

<style lang="less" scoped></style>
