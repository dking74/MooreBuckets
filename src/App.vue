<template>
  <div id="app">
    <NavBar />
    <Hero />
    <Bios />
    <GradientBackdrop />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import Bios from './components/Bios/Bios.vue';
import GradientBackdrop from './components/GradientBackdrop.vue';
import './main.css';

export default {
  name: 'App',
  components: {
    NavBar,
    Hero,
    Bios,
    GradientBackdrop
  },
  data() {
    return {
    }
  },
}
</script>
