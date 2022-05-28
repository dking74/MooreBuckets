<template>
  <div>
    <div class="hero-grid mx-auto">
      <div class="hero-text">
        <div class="p-0">
          <div class="px-3">
            <div class="mb-3">
              <h2 class="mb-4">Level Up Your Game</h2>
              <div class="mb-4" v-if="isLargerThanSmall">
                Our goal is to help athletes learn new aspects of the game, both
                mental and physical, while focusing on improving every session
                and having fun.
              </div>

              <div v-if="isLargerThanSmall">
                What are you waiting for? Get started today to shoot your best
                shot!
              </div>
            </div>
            <b-button variant="primary" class="mt-4" href="#contact-form"
              >Shoot Your Shot</b-button
            >

            <div style="font-size: 12px; font-style: italic" class="mt-5">
              * Proudly serving the Saint Louis, MO area
            </div>
          </div>
        </div>
      </div>
      <div class="hero-image-container">
        <!-- <img src="/img/Matt-Mark-Hero.png" class="hero-image" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import WindowMixin from "../mixins/window.mixin";

export default {
  name: "mb-hero-banner",
  mixins: [WindowMixin],
};
</script>

<style lang="scss">
.mb-hero-card.card {
  box-shadow: 0px 0px 3px rgba(0, 0, 255, 0.25);
}

.hero-grid {
  width: 75%;
  display: grid;
  grid-template-areas: "hero-text hero-image-container";
  grid-template-columns: 2fr 1fr;
  margin-top: 5rem;
}

.hero-text {
  grid-area: hero-text;
}

.hero-image-container {
  grid-area: hero-image-container;
  width: 100%;
  background-image: url(/img/Matt-Mark-Hero.f53b5213.png);
  background-position: top;
  background-size: cover;
  aspect-ratio: 4/5;
}

@media screen and (max-width: 1226px) {
  .hero-grid {
    width: 85%;
    grid-template-columns: 3fr 2fr;
  }
}

@media screen and (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;

    .hero-text {
      margin-top: 0 !important;
    }
  }
}

@media screen and (max-width: 685px) {
  .hero-grid {
    width: 95%;
    grid-template-areas:
      "hero-text"
      "hero-image-container";
    grid-template-columns: 1fr;
  }
  .hero-image-container {
    display: none;
  }
}
</style>
