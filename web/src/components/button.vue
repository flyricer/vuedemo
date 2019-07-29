<script>
export default {
  render(h) {
    return h(
      'button',
      {
        'class': { 
          btn: true,
          'btn-success': this.type === 'success',
          'btn-danger': this.type === 'danger',
          'btn-warning': this.type === 'warning'
        }
      },
      this.$slots.default
    )
  },
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>