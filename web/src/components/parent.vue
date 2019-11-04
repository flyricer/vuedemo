<template>
  <div class="parent">
    <brother-card></brother-card>
    <sister-card></sister-card>
    <current-table :person="person">
      <current-item :name="person.firstname"></current-item>
    </current-table>
    <one title="专题" :rightbtn="rightbtn"></one>
    <two></two>
    <three v-model="searchText" v-on:focus="onFocus"></three>
    <span>{{searchText}}</span>
    <four v-model="lovingVue"></four>
    <span>{{lovingVue}}</span>
    <Functional :level="1">测试函数式组件</Functional>
    <Button type="danger" @click.native="log">success</Button>
    <five :level="2">测试render组件</five>
    <six v-model="sixdata"></six>
    <!-- <seven v-slot="slotProp">seven{{ slotProp.text }}</seven> -->
    <seven :title.sync='message'>{{message}}</seven>
    <eight></eight>
  </div>
</template>

<script>
import BrotherCard from "@/components/brother.vue";
import SisterCard from "@/components/sister.vue";
import CurrentTable from "@/components/currenttable.vue";
import CurrentItem from "@/components/currentitem.vue";
import One from "@/components/one.vue";
import Two from "@/components/two.vue";
import Three from "@/components/three.vue";
import Four from "@/components/four.vue";
import Functional from "@/components/functional.vue";
import Button from "@/components/button.vue";
import Five from "@/components/five.vue";
import Six from "@/components/six.vue";
import Seven from "@/components/seven.vue";
import Eight from "@/components/eight.vue";

export default {
  data() {
    return {
      person: {
        firstname: "jack",
        lastname: "ma"
      },
      rightbtn: {
        name: "编辑"
      },
      searchText: "",
      lovingVue: "给你100块",
      isEditing: true,
      type: "btn-success",
      sixdata: 10,
      // msg: '子组件',
      message: "未更新"
    };
  },
  provide: function() {
    return {
      getMap: this.getMap
    };
  },
  methods: {
    getMap: function() {
      console.log("getmaps");
    },
    divClick() {
      this.arr.push(5);
    },
    onFocus() {
      console.log(1);
    },
    log() {
      console.log("成功");
    },
  },
  components: {
    BrotherCard,
    SisterCard,
    CurrentTable,
    CurrentItem,
    One,
    Two,
    Three,
    Four,
    Functional,
    Button,
    Five,
    Six,
    Seven,
    Eight
  },
  mounted() {
    console.log(window.location.href.split('#')[0])
    console.log(window.location.href)
  },
};
</script>

<style lang="less" scoped>
.parent {
  border: 1px solid #eeeeee;
}
.active {
  color: red;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
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
  background-color: green;
}
.btn-danger {
  background-color: red;
}
.btn-warning {
  background-color: yellow;
}
.scrollbox {
  height: 100%;
  overflow-y: scroll
}
</style>
