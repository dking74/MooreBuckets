<template>
  <div id="app">
    <NavBar />
    <Hero />
    <GradientBackdrop class="mb-5 pt-5"><Bios /></GradientBackdrop>
    <GradientBackdrop class="mb-5" rotation="-175deg"><ContactForm /></GradientBackdrop>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import Bios from './components/Bios/Bios.vue';
import ContactForm from './components/ContactForm.vue';
import GradientBackdrop from './components/GradientBackdrop.vue';
import Footer from './components/Footer.vue';
import './main.css';

export default {
  name: 'App',
  components: {
    NavBar,
    Hero,
    Bios,
    ContactForm,
    GradientBackdrop,
    Footer,
  },
}
</script>

<style lang="scss">
.card {
  border: none;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, .25);
}
</style>
