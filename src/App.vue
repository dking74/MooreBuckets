<template>
  <div id="app">
    <NavBar />
    <Hero />
    <GradientBackdrop class="pt-5" rotation="-3deg"><Bios /></GradientBackdrop>
    <GradientBackdrop class="mb-5 pt-5" rotation="-178deg" height="75%"><Testimonials /></GradientBackdrop>
    <GradientBackdrop class="mb-5" rotation="-3deg" height="75%"><ContactForm /></GradientBackdrop>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import Bios from './components/Bios/Bios.vue';
import Testimonials from './components/Testimonials.vue';
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
    Testimonials,
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

  .card-body {
    max-height: 550px;
    overflow-y: scroll;
  }
}

.section-header {
  font-family: Montserrat;
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
  color: #3b5998;
}
.instagram {
  @extend .social-media-icon;
  background: #125688;
  color: white;
  border-radius: 50%;
  // color: transparent;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
}
.twitter {
  @extend .social-media-icon;
  color: #55acee;
}
</style>
