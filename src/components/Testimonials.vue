<template>
  <div class="eb-player-testimonials responsive-card container-sm mx-auto">
    <h2 class="section-header">Testimonials</h2>
    <div class="eb-player-testimonials--cards">
      <b-card
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.text"
        class="mb-3"
      >
        <b-container fluid>
          <b-row cols="12">
            <b-col cols="3" v-if="isLargerThanMedium">
              <div
                :ref="`testimonial_icon_container_${index}`"
                class="testimonal-icon-container"
                :class="testimonialStyle"
              >
                <font-awesome-icon
                  :icon="accountIcon"
                  border
                  fixed-width
                  :size="isLargerThanMedium ? '3x' : '2x'"
                ></font-awesome-icon>
              </div>
            </b-col>
            <b-col :cols="isLargerThanMedium ? 9 : 12">
              <p class="mb-3 testimonial-quote">"{{ testimonial.text }}"</p>
              <h6 class="testimonial-reviewer">
                {{ testimonial.reviewer }}
              </h6>
              <h6
                class="testimonial-details"
                v-for="detail in testimonial.additionalDetails"
                :key="detail"
              >
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
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { testimonials } from "../utils/data";

import WindowMixin from "../mixins/window.mixin";

export default {
  name: "eb-player-testimonials",
  async mounted() {
    this.testimonials = testimonials;
  },
  data: () => ({
    testimonials: [],
    accountIcon: faUser,
  }),
  computed: {
    testimonialStyle() {
      return {
        "testimonal-icon-container--small": this.isLessThanMedium,
        "testimonal-icon-container--medium": this.isMediumScreen,
        "testimonal-icon-container--large": this.isLargerThanLarge,
      };
    },
  },
  mixins: [WindowMixin],
};
</script>

<style lang="scss">
.fa-border {
  border-color: transparent !important;
}

.testimonal-icon-container {
  color: whitesmoke;
  background-color: var(--bucket-blue);
  border: none !important;
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  text-align: center;
  overflow: hidden;

  svg {
    height: fit-content !important;
    width: 100% !important;
    border-radius: 50%;
    overflow: hidden;
  }
}

.section-header {
  color: var(--text-primary-color);
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
.eb-player-testimonials {
  color: var(--text-primary-color) !important;
}
</style>
