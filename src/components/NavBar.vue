<template>
    <b-navbar toggleable="lg" type="light" sticky variant='light'>
      <b-navbar-brand href="/">
        <img src="../assets/MooreBuckets-logo.png" width=125 height=50 alt="Moore Buckets Logo">
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto" :style="navBarStyle">
          <b-nav-item href="#contact-form">Schedule a Lesson</b-nav-item>
          <b-nav-item @click.stop.prevent="socialMediaOpened = !socialMediaOpened">
            Social Media
            <font-awesome-icon :icon="socialMediaOpened ? faCaretUp : faCaretDown" />
            <div class="social-media--dropdown" v-if="socialMediaOpened" :style="socialMediaDropdownStyle">
              <b-nav-item
                v-for="socialMediaLink in socialMedia" :key="socialMediaLink.name"
                @click="openLink(socialMediaLink.link)"
              >
                <font-awesome-icon :icon="socialMediaLink.icon" :class="socialMediaLink.classes" size="2x" />
                {{ socialMediaLink.name }}
              </b-nav-item>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
import { faAngleDown, faAngleUp, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import WindowMixin from '../mixins/window.mixin';

export default {
  name: 'NavBar',
  data() {
    return {
      navStyle: {
        background: "linear-gradient(135deg, hsla(249, 94%, 47%, 1) 0%, hsla(274, 84%, 45%, 1) 33%, hsla(318, 76%, 43%, 1) 64%, hsla(1, 94%, 55%, 1) 100%)"
      },
      socialMedia: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/Moore-Buckets-106225994690612',
          icon: faFacebook,
          classes: 'facebook',
        },
        {
          name: 'Instagram',
          link: 'https://www.instagram.com/moore.buckets/',
          icon: faInstagram,
          classes: 'instagram',
        },
        {
          name: 'Twitter',
          link: 'https://twitter.com/moorebuckets',
          icon: faTwitter,
          classes: 'twitter',
        }
      ],
      socialMediaOpened: false,
      faCaretUp,
      faCaretDown,
    }
  },
  mounted() {
    this.$on('resize', () => {
      this.socialMediaOpened = false;
    });
  },
  computed: {
    dropdownIcon() {
      return !this.socialMediaOpened ? faAngleDown : faAngleUp;
    },
    navBarStyle() {
      return {
        'border-top': !this.isLargerThanLarge ? '1px solid rgba(0, 0, 0, .25)' : 'none',
        'margin-top': !this.isLargerThanLarge ? '15px' : '0px'
      };
    },
    socialMediaDropdownStyle() {
      return {
        position: !this.isLargerThanLarge ? 'relative' : 'fixed',
        border: !this.isLargerThanLarge ? 'none' : '1px solid rgba(0, 0, 0, .24)',
        'padding-left': !this.isLargerThanLarge ? '15px' : '0px',
        'background-color': !this.isLargerThanLarge ? 'none' : 'var(--light, #f8f9fa)',
      };
    }
  },
  methods: {
    openLink(link) {
      return window.open(link, '_blank');
    }
  },
  mixins: [WindowMixin]
}
</script>