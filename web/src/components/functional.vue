<script>
export default {
  name: 'functional',
  functional: true,
  render(h, context) {
    return h('h'+ context.props.level, context.data, context.children)
  }
}
</script>

