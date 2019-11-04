<template>
  <div>
    <header></header>
    <main>
      <div class="content">
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
        111 <br>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  created() {
    console.log(this.$route)
  },
  mounted() {
    console.log(this.$route)
  },
};
</script>

<style lang="less" scoped>
  header, footer, main {
      display: block;
  }
  header {
    height: 50px;
    position: fixed;
    background-color: blue;
    opacity: .5;
    top: 0;
    left: 0;
    right: 0
  }
  main{
    position: absolute;
    width: 100%;
    top: 100px;  
    bottom: 30px;
    overflow-y: scroll;
    -webkit-overflow-scrolling:touch;
    // padding: 50px 0;
    // height: 100%;
  }
  main .content{
    height: 2000px;
  }
  footer {
    height: 50px;
    position: fixed;
    background-color: blue;
    opacity: .5;
    bottom: 0;
    left: 0;
    right: 0
  }
</style>