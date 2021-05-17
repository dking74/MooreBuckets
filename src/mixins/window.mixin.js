export default {
  name: 'window-mixin',
  data: () => ({
    currentWidth: window.innerWidth,
    currentHeight: window.innerHeight,
  }),
  created() {
    window.addEventListener('resize', () => {
      this.currentWidth = window.innerWidth;
      this.currentHeight = window.innerHeight;

      this.$emit('resize');
    });
  },
  computed: {
    isExtraLargeScreen() { return this.currentWidth >= 1200 },
    isLargeScreen() { return this.currentWidth < 1200 && this.currentWidth >= 992 },
    isMediumScreen() { return this.currentWidth < 992 && this.currentWidth >= 768 },
    isSmallScreen() { return this.currentWidth < 768 && this.currentWidth >= 576 },
    isExtraSmallScreen() { return this.currentWidth < 576 },

    isLargerThanLarge() { return this.currentWidth >= 992 },
    isLargerThanMedium() { return this.currentWidth >= 768 },
    isLargerThanSmall() { return this.currentWidth >= 576 },
    isLessThanMedium() { return this.currentWidth < 768 },
  }
}