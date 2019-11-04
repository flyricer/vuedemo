<template>
  <div>
    <button @click="changeValue(-1)">-1</button>
    <span>{{ getcount }}</span>
    <button @click="changeValue(1)">+1</button>
    <div @click="syncfunc">dd</div>
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  props: {
    title: String
  },
  computed: {
    ...mapGetters([
      'getcount'
    ])
  },
  methods: {
    ...mapMutations([
      'changecount'
    ]),
    changeValue(value) {
      this.changecount(value)
    },
    syncfunc() {
      this.$emit('update:title', 'hhhhh')
    }
  },
};
</script>
