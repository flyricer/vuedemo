<template>
  <div class="card bg-white">
    <div class="card-header flex-box">
      <i class="card-icon"></i>
      <div class="card-title flex-1">
        <strong>{{title}}</strong>
      </div>
      <i class="card-more"></i>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>

.card {
  margin-top: 0.769231rem;
  padding: 0 1.230769rem;
  border-bottom: 1px solid $border-color;
  .card-header {
    zoom: 1;
    overflow: hidden;
    margin-bottom: 0.8rem;
    padding: 0.8rem 0;
    position: relative;
    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 1px;
      background: #d4d9de;
      content: '';
    }
    .card-icon {
      @include sprite($url);
      display: inline-block;
      background-position: 0.138% 50.452%;
      width: 1rem;
      height: 1rem;
      margin-right: .769231rem
    }
    .card-title {
      @extend .fs-nm;
    }
    .card-more {
      @include sprite($url);
      display: inline-block;
      background-position: 47.619% 56.305%;
      width: 1.538462rem;
      height: 0.230769rem;
    }
  }

}

</style>