
<script>
export default {
  name: 'five1',
  render(h) {
    return h(
      'h' + this.level,
      // 'button',
      {
        on: {
          click: this.clickHandler
        },
      },
      this.$slots.default
    )
  },
  props: {
    level: {
      type: Number,
    },
  },
  methods: {
    clickHandler() {
      console.log('five2')
    }
  },
}
</script>

<style lang="less" scoped>

</style>
