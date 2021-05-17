<template>
  <div v-bind="$attrs" style="height: 100%; width: 100%">
    <div class='mb-gradient-container py-3' :style="styleBindings"></div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'mb-gradient-backdrop',
  props: {
    rotation: {
      type: String,
      required: false,
      default: '-5deg'
    },
    height: {
      type: String,
      required: false,
      default: '50%'
    },
    position: {
      type: String,
      required: false,
      default: 'top',
      validator: (value) => value === 'top' || value === 'bottom'
    }
  },
  computed: {
    styleBindings() {
      return {
        '--rotation': this.rotation,
        '--height': this.height,
        ...this.positionCss
      };
    },
    positionCss() {
      return this.position === 'top'
        ? { '--position-top': '50px', '--position-bottom': 'auto' }
        : { '--position-top': 'auto', '--position-bottom': '50px' }
    }
  }
}
</script>

<style lang="scss">
div {
  overflow: hidden;
  position: relative;
}
.mb-gradient-container {
  position: absolute;
  height: var(--height, 50%);
  width: 125%;
  left: -25px;
  top: var(--position-top, 50px);
  bottom: var(--position-bottom, 50px);
  transform: rotate(var(--rotation, -5deg));
  background: linear-gradient(60deg, rgba(204, 0, 0, 0.71) -0.87%, rgba(0, 41, 255, 0.67) 67.7%);
}
</style>