<template>
  <div>
    <div ref="test">{{bet}}</div>
    <button @click="handleClick">test</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: 'start',
      bet: {
　　　　　　pokerState: 53,
　　　　　　pokerHistory: 'local'
　　　　}  
    }
  },
  methods: {
    handleClick() {
      this.bet.pokerHistory = 'localhost'
    }
  },
  watch: {
  　　bet: {
  　　　　handler(newValue, oldValue) {
  　　　　　　console.log(newValue);
  　　　　},
  　　　　deep: true
  　　}
  }
}
</script>
