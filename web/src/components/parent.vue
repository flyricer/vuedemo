<template>
  <div class="parent">
    <brother-card></brother-card>
    <sister-card></sister-card>
    <current-table :person="person">
      <current-item :name="person.firstname"></current-item>
    </current-table>
    <create-ele></create-ele>
    <one title="专题" :rightbtn="rightbtn"></one>
    <two></two>
    <three v-model="searchText" v-on:focus="onFocus"></three>
    <span>{{searchText}}</span>
    <four v-model="lovingVue"></four>
    <span>{{lovingVue}}</span>
    <Functional :level='1'>测试函数式组件</Functional>
    <Button type="danger" @click.native="log">success</Button>
    <div class="transbox">
      <transition name="fade">
        <button class="transbtn" :key="isEditing" @click="isEditing = !isEditing">
          {{ isEditing ? 'Save' : 'Edit' }}
        </button>
      </transition>
    </div>
    <div class="directive" v-style='Style' v-setcolor='fontcolors'>测试自定义指令</div>
  </div>
</template>

<script>
import BrotherCard from "@/components/brother.vue";
import SisterCard from "@/components/sister.vue";
import CurrentTable from "@/components/currenttable.vue";
import CurrentItem from "@/components/currentitem.vue";
import CreateEle from "@/components/createElement.vue";
import One from "@/components/one.vue";
import Two from "@/components/two.vue";
import Three from "@/components/three.vue";
import Four from "@/components/four.vue";
import Functional from "@/components/functional.vue";
import Button from "@/components/button.vue";

export default {
  data() {
    return {
      person: {
        firstname: "jack",
        lastname: "ma"
      },
      Style: {
        backgroundColor: "#eeeeee",
        width: '200px',
        height: '50px'
      },
      rightbtn: {
        name: "编辑"
      },
      searchText: '',
      lovingVue: '给你100块',
      isEditing: true,
      type: 'btn-success',
      fontcolors: {
        color: 'red'
      }
    };
  },
  provide: function () {
    return {
      getMap: this.getMap
    }
  },
  methods: {
    getMap: function () {
      console.log('getmaps')
    },
    divClick() {
      this.arr.push(5);
    },
    onFocus() {
      console.log(1)
    },
    log() {
      console.log('成功')
    }
  },
  computed: {},
  components: {
    BrotherCard,
    SisterCard,
    CurrentTable,
    CurrentItem,
    CreateEle,
    One,
    Two,
    Three,
    Four,
    Functional,
    Button
  }
};
</script>

<style lang="less" scoped>
.parent {
  border: 1px solid #eeeeee;
}
.active {
  color: red;
}
.fade-enter-active, .fade-leave-active {
  transition: all 1s ease;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px)
}
.fade-enter {
  opacity: 0;
  transform: translateX(30px);
}
.transbox {
  position: relative;
  top: 0;
  left: 0;
}
.transbtn {
  position: absolute;
}
.btn-success {
  background-color: green
}
.btn-danger {
  background-color: red
}
.btn-warning {
  background-color: yellow
}
</style>
