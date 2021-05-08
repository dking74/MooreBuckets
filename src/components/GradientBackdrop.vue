<template>
  <div>
    <div class='mb-gradient-container'>
    <!-- <slot /> -->
    <!-- <svg transform='translate(-100px, 0px)' viewBox="0 0 2536 2096" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class='full-width' d="M148.207 194.846L2375.29 58.9229L2375.29 1901.83L148.207 1901.83L148.207 194.846Z" fill="url(#paint0_linear)"/>
        <defs>
            <linearGradient id="paint0_linear" x1="2209.32" y1="1608.58" x2="95.931" y2="755.252" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF0000"/>
                <stop offset="1" stop-color="#001AFF"/>
            </linearGradient>
        </defs>
    </svg> -->
    </div>
    <slot />
  </div>
</template>

<script>
export default {
    name: 'GradientBackdrop'
}
</script>

<style lang="scss">
div {
    overflow: hidden;
    position: relative;
}
.mb-gradient-container {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 0px;
  background: linear-gradient(59.73deg, rgba(204, 0, 0, 0.71) -0.87%, rgba(0, 41, 255, 0.67) 67.7%);
  transform: rotate(-3deg);
}
</style>