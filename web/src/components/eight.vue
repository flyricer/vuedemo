<template>
<div>
  <div class="scrollbox">{{message}}</div>
  <button @click="scrollGet">btn</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'btn'
    };
  },
  mounted() {
    // localStorage.setItem('localauthor', 'local')
    // sessionStorage.setItem('sessionauthor', 'session')
  },
  created() {
    this.message = 'aaaa'
  },
  methods: {
    scrollGet() {
      this.message = 'bbbb'
      console.log(this.message)
      this.$nextTick(function () {
        console.log(this.message)
      })
    } 
  }
};
</script>

<style>
  
</style>
