<template>
  <div>
    <div class="home-top flex-box w-100">
      <div class="logo_cont">
        <a class="logo_img dp-ib" href="https://pvp.qq.com/"></a>
      </div>
      <div class="logo_title text-white flex-1 fs-s">
          <strong>王者荣耀</strong>
          <p class="text-darkg">团队成就更多</p>
      </div>
      <div class="download">
        <a class="download_btn dp-ib" href="http://pvp.qq.com/m/m201706/download.shtml"></a>
      </div>
    </div>
    <div class="home-bottom bg-primary text-white w-100">
      <div class="nav flex-box h-100">
        <div class="nav-item active">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
        </div>       
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.home-top {
  position: sticky;
  top: 0;
  z-index: 999;
  height: 3.461538rem;
  @include sprite($url);
  background-position: 0 87.195%;
  .logo_cont {
    padding: 0 20px;
    .logo_img {
      width: 2.307692rem;
      height: 2.307692rem;
      @include sprite($url);
      background-position: 0 72.588%;
    }
  }
  .download {
    padding: 0 20px;
    .download_btn {
      width: 4.615385rem;
      height: 1.538462rem;
      @include sprite($url);
      background-position: 18.73% 71.694%;
    }
  }
}
.home-bottom {
    height: 3rem;
    z-index: 10;
  .nav {
    .nav-item {
      padding: 4px 0;
      border-bottom: 2px solid transparent;
      &.active {
        border-bottom: 2px solid #ffffff;
      }
    }
  }
}
</style>