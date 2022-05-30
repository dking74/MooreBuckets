<template>
  <div id="app">
    <NavBar />
    <Hero />
    <GradientBackdrop class="py-5" rotation="-3deg" height="50%">
      <Bios />
    </GradientBackdrop>
    <GradientBackdrop class="mb-5 pt-5" rotation="-178deg" height="50%">
      <Testimonials />
    </GradientBackdrop>
    <GradientBackdrop class="mb-5" rotation="-3deg" height="75%">
      <ContactForm />
    </GradientBackdrop>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import Bios from "./components/Bios/Bios.vue";
import Testimonials from "./components/Testimonials.vue";
import ContactForm from "./components/ContactForm.vue";
import GradientBackdrop from "./components/GradientBackdrop.vue";
import Footer from "./components/Footer.vue";
import "./main.css";

export default {
  name: "App",
  components: {
    NavBar,
    Hero,
    Bios,
    Testimonials,
    ContactForm,
    GradientBackdrop,
    Footer,
  },
};
</script>

<style lang="scss">
.card {
  border: none !important;
  box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.15);
}

.section-header {
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  align-items: center;
}

.social-media-icon {
  padding: 5px;
  text-align: center;
}
.facebook {
  @extend .social-media-icon;
  color: var(--text-primary-color);
}
.instagram {
  @extend .social-media-icon;
  color: var(--text-primary-color);
  border-radius: 50%;
  aspect-ratio: 1/1 !important;
}
.twitter {
  @extend .social-media-icon;
  color: var(--text-primary-color);
}
</style>
