<template>
  <div>
    <counter :value="counter2Val" :on-minus="minusVal" :on-plus="plusVal"></counter>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter2Val: 0
    };
  },
  methods: {
    minusVal() {
      this.counter2Val--;
    },
    plusVal() {
      this.counter2Val++;
    }
  }
};
</script>
