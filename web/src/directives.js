export default Vue => {
  Vue.directive("style", {
    inserted: function(el, binding) {
      el.style.width = binding.value.width;
      el.style.height = binding.value.height;
    }
  });
};
