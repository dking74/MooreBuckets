<template>
  <div id="app">
    <NavBar />
    <Hero />
    <GradientBackdrop>
      <Bios />
    </GradientBackdrop>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import Bios from './components/Bios/Bios.vue';
import GradientBackdrop from './components/GradientBackdrop.vue';
import Footer from './components/Footer.vue';
import './main.css';

export default {
  name: 'App',
  components: {
    NavBar,
    Hero,
    Bios,
    GradientBackdrop,
    Footer,
  },
}
</script>
