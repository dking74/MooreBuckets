<template>
  <div class='eb-player-testimonials w-75 mx-auto'>
    <h2 class='section-header'>Testimonials</h2>
    <div class='eb-player-testimonials--cards'>
      <b-card v-for="(testimonial, index) in testimonials" :key='testimonial.text' class='mb-3'>
        <b-container fluid>
          <b-row cols="12">
            <b-col cols="3" v-if="isLargerThanMedium">
              <div :ref="`testimonial_icon_container_${index}`" class="testimonal-icon-container py-5" :class="testimonialStyle">
                <font-awesome-icon :icon="accountIcon" border fixed-width
                  :size="isLargerThanMedium ? '4x' : '3x'"
                ></font-awesome-icon>
              </div>
            </b-col>
            <b-col :cols="isLargerThanMedium ? 9 : 12">
              <p class='mb-3 testimonial-quote'>"{{ testimonial.text }}"</p>
              <h6 class='testimonial-reviewer'>{{ testimonial.reviewer }}, {{ testimonial.role }}</h6>
              <h6 class='testimonial-details' v-for="detail in testimonial.additionalDetails" :key="detail">
                {{ detail }}
              </h6>
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </div>
  </div>
</template>

<script>
import { faUser } from '@fortawesome/free-solid-svg-icons';
import WindowMixin from '../mixins/window.mixin';

export default {
  name: 'eb-player-testimonials',
  data: () => ({
    testimonials: [
      {
        text: 'The Moore Brothers were two of most intelligent players we’ve had in our program. Their basketball IQ and attention to detail helped us win a bunch of games and multiple championships. They continue to help our program through their detailed and relevant player development. Any player or program can benefit from Moore Buckets.',
        reviewer: 'Dan Johnson',
        role: 'Former Coach',
        additionalDetails: [
          '200+ wins',
          '7x Conference Champion',
          '4x District Champion'
        ]
      },
      {
        text: 'Training with Moore Buckets has been nothing less that amazing. Both Mark and Matt have challenged me to step out of my comfort zone and push my limits as a player. Their attention to detail and passion for the game is what I love most. They’re great trainers but more importantly they’re genuinely kind people who truly care about you.  I would highly recommend all athletes to train with Moore Buckets if you are serious about taking your game to the next level.',
        reviewer: 'Josh Johnson',
        role: 'Former Player at Webster University',
        additionalDetails: [
          '1255 Career Points',
          '2x First Team All Conference',
          'SLIAC Player of the Year'
        ]
      }
    ],
    accountIcon: faUser,
  }),
  computed: {
    testimonialStyle() {
      return {
        'testimonal-icon-container--small': this.isLessThanMedium,
        'testimonal-icon-container--medium': this.isMediumScreen,
        'testimonal-icon-container--large': this.isLargerThanLarge,
      }
    }
  },
  mixins: [WindowMixin]
}
</script>

<style lang="scss">
.testimonal-icon-container {
  color: rgba(0, 0, 0, .25);
  width: 100%;
  border-radius: 50%;
  text-align: center;

  svg {
    height: fit-content !important;
    min-height: 150px;
    max-height: 400px;
    width: 100% !important;
    border-radius: 50%;
  }
}
.testimonal-icon-container--small,
.testimonal-icon-container--medium {
  padding: 10px;
}
.testimonal-icon-container--large {
  padding: 25px;
}

.section-header {
  color: white;
}
.testimonial-quote {
  font-size: 16px;
}
.testimonial-reviewer {
  font-size: 20px;
  font-weight: bold;
}
.testimonial-details {
  font-size: 14px;
  font-style: italic;
  font-weight: normal;
}
</style>