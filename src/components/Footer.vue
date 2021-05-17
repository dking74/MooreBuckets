<template>
  <footer class='mb-footer'>
    <div class="footer-copyright text-center py-3">
      <b-container fluid>
        <div class="mb-3">
          <a v-for="icon in iconLinks" :key="icon.link" :href="icon.link" class="mr-3" target="_blank">
            <font-awesome-icon :icon="icon.icon" :class="icon.class" size="3x" />
          </a>
        </div>

        &copy; 2021 Copyright: Moore Buckets
      </b-container>
    </div>
  </footer>
</template>

<script>
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default {
  name: 'mb-footer',
  data: () => ({
    iconLinks: [
      {
        link: 'https://www.facebook.com/Moore-Buckets-106225994690612',
        icon: faFacebook,
        class: 'facebook' 
      },
          {
        link: 'https://www.instagram.com/moore.buckets/',
        icon: faInstagram,
        class: 'instagram' 
      },
      {
        link: 'https://twitter.com/moorebuckets',
        icon: faTwitter,
        class: 'twitter' 
      }
    ]
  })
}
</script>

<style lang="scss">
.mb-footer {
  box-shadow: 0 0 5px 0px rgba(0, 0, 0, .2);
}
</style>