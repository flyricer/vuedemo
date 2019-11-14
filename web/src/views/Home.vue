<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/lunbo1.jpeg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/lunbo2.jpeg" alt>
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/lunbo3.jpeg" alt>
      </swiper-slide>
      <div class="swiper-pagination pagination-home" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->

    <div class="nav-icons bg-white text-center">
      <div class="nav-box flex-box jc-b flex-wrap">
        <div class="nav-item">
          <i class="nav-icon nav1"></i>
          <div class="nav-title">爆料站</div>
        </div>
        <div class="nav-item">
          <i class="nav-icon nav2"></i>
          <div class="nav-title">故事站</div>
        </div>
        <div class="nav-item">
          <i class="nav-icon nav3"></i>
          <div class="nav-title">周边商城</div>
        </div>
        <div class="nav-item">
          <i class="nav-icon nav4"></i>
          <div class="nav-title">体验服</div>
        </div>
        <div class="nav-item">
          <i class="nav-icon nav5"></i>
          <div class="nav-title">新人专区</div>
        </div>
        <div class="nav-item">
          <i class="nav-icon nav6"></i>
          <div class="nav-title">荣耀·传承</div>
        </div>
        <div class="nav-item">
          <i class="nav-icon nav7"></i>
          <div class="nav-title">模拟战资料库</div>
        </div>
        <div class="nav-item">
          <i class="nav-icon nav8"></i>
          <div class="nav-title">王者营地</div>
        </div>
        <div class="nav-item">
          <i class="nav-icon nav9"></i>
          <div class="nav-title">公众号</div>
        </div>
        <div class="nav-item">
          <i class="nav-icon nav10"></i>
          <div class="nav-title">版本介绍</div>
        </div>
        <div class="nav-item">
          <i class="nav-icon nav11"></i>
          <div class="nav-title">对局环境</div>
        </div>
        <div class="nav-item">
          <i class="nav-icon nav12"></i>
          <div class="nav-title">无限王者团</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->

    <list-card title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link 
        tag="div"
        :to="`/articles/${news._id}`"
        class="title-box flex-box" 
        v-for="(news, i) in category.newsList" :key="i">
          <span class="text-dark">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark text-ellipsis">{{news.title}}</span>
          <span class="text-grey">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </list-card>

    <list-card title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem;">
          <router-link
          tag="div"
          :to="`/heroes/${hero._id}`"
          class="p-2 text-center"
          style="width: 20%;" 
          v-for="(hero, i) in category.heroList" :key="i">
            <img :src="hero.avatar" class="w-100">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </list-card>

    <!-- <m-card icon="menu1" title="精彩视频"></m-card>
    <m-card icon="menu1" title="图文攻略"></m-card> -->
  </div>
</template>

<script>
import dayjs from "dayjs";
import ListCard from '../components/ListCard.vue'

export default {
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        },
        loop : true,
        autoplay : {
          delay: 2000,
          disableOnInteraction: false,
        },
      },
      newsCats: [],
      heroCats: []
    };
  },
  components: {
    ListCard
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("/news/list");
      this.newsCats = res.data;
    },
  //   async fetchHeroCats() {
  //     const res = await this.$http.get("/heroes/list");
  //     this.heroCats = res.data;
  //   }
  },
  created() {
    this.fetchNewsCats();
    // this.fetchHeroCats();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

  .nav-icons {
    .nav-box {
      .nav-item {
        width: 25%;
        padding: .769231rem 0;
        .nav-icon {
          display: inline-block;
          width: 2.307692rem;
          height: 2.307692rem;
          @include sprite($url);
          &.nav1 {
            background-position: 9.302% 0.813%
          }
          &.nav2 {
            background-position: 36.746% 0.924%
          }
          &.nav3 {
            background-position: 63.3% 0.927%
          }
          &.nav4 {
            background-position: 89.733% 1.266%
          }
          &.nav5 {
            background-position: 10.408% 15.517%
          }
          &.nav6 {
            background-position: 36.467% 15.287%
          }
          &.nav7 {
            background-position: 63.546% 15.517%
          }
          &.nav8 {
            background-position: 90.483% 15.614%
          }
          &.nav9 {
            background-position: 9.302% 0.813%
          }
          &.nav10 {
            background-position: 9.302% 0.813%
          }
          &.nav11 {
            background-position: 9.302% 0.813%
          }
          &.nav12 {
            background-position: 9.302% 0.813%
          }
        }
      }
    }
  }
  .title-box {
    span {
      padding: 4px 0;
      &.px-2 {
        padding: 0 4px;
      }
    }
  }
</style>