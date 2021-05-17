<template>
  <b-card class='w-75 mx-auto my-3 px-4 py-3 mb-hero-card'>
    <b-row>
      <b-col cols="12" lg="6">
        <b-card-body class='mb-hero-card--body p-0'>
          <div class="md-hero-card--content w-100 h-100 p-3">
            <div class="md-hero-card--content__text mb-5">
              <h2 class='mb-3'>Level Up Your Game</h2>
              <b-card-text v-if="isLargerThanSmall"  style="font-size: 16px">
                Our goal is to help athletes learn new aspects of the game, both mental and physical,
                while focusing on improving every session and having fun.
              </b-card-text>
            </div>
            <b-button variant='primary' class="px-3 py-2" href="#contact-form">Shoot Your Shot</b-button>
          </div>
          <template v-if="!isLargerThanLarge">
            <img src="/img/Hero-Image.png" class='hero-image' />
          </template>
        </b-card-body>
      </b-col>
      <b-col lg="6" v-if="isLargerThanLarge">
        <img src="/img/Hero-Image.png" class='hero-image' />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import WindowMixin from '../mixins/window.mixin';

export default {
  name: 'mb-hero-banner',
  mixins: [WindowMixin]
}
</script>

<style lang="scss">
.mb-hero-card {
  box-shadow: 4px 4px 8px rgba(96, 96, 96, 0.46);
}

@media screen and (max-width: 992px) {
  .hero-image {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    width: 75%;
    height: 100%;
    background: transparent;
  }

  .card-body.mb-hero-card--body {
    padding-top: 0;
    padding-bottom: 0;
    min-height: 250px;
    height: 100%;
  }

  .md-hero-card--content {
    background-color: rgba(0, 0, 0, .25);
    .md-hero-card--content__text {
      h2 {
        width: 75%;
      }
    }

    button {
      position: relative;
      bottom: 15px;
    }
    
    *, .card-text {
      background: transparent;
      color: white;
    }
    z-index: 100;
  }
}
@media screen and (max-width: 576px) {
  .hero-image {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  .md-hero-card--content {
    button {
      width: 100%;
    }
  }
}
</style>