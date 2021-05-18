<template>
  <b-card class="mb-5 mx-auto" :class="isLargerThanSmall ? 'w-50' : 'w-75'" v-bind="$attrs"
      :title="emailSent ? 'Thank you!' : 'Schedule a Session'" title-tag="h2" align="center"
      id="contact-form">
    <b-card-body>
      <b-card-text v-if="emailSent" style="font-size: 12px">
        Your schedule inquiry has been sent to Moore Buckets! Expect a response
        within 24-48 hours. Thank you!
      </b-card-text>

      <b-form class='mb-contact-form' @submit="sendEmail" v-else>
        <b-container fluid class='mb-3'>
          <!-- Name field -->
          <b-row class="my-3">
            <b-col md="3">
              <label for="input-name">Name:</label>
            </b-col>
            <b-col md="9">
              <b-form-input id="input-name" placeholder="Enter your name..." v-model="form.name"></b-form-input>
            </b-col>
          </b-row>

          <!-- Email address -->
          <b-row class="my-3">
            <b-col md="3">
              <label for="input-email">Email:</label>
            </b-col>
            <b-col md="9">
              <b-form-input id="input-email" placeholder="Enter your email..." v-model="form.email"></b-form-input>
            </b-col>
          </b-row>

          <!-- Phone number -->
          <b-row class="my-3">
            <b-col md="3">
              <label for="input-phone">Phone:</label>
            </b-col>
            <b-col md="9">
              <b-form-input id="input-phone" placeholder="Enter your phone..." v-model="form.phone"></b-form-input>
            </b-col>
          </b-row>

          <!-- Age Range -->
          <b-row class="my-3">
            <b-col md="3">
              <label for="input-age">Age Group:</label>
            </b-col>
            <b-col md="9">
              <b-form-select :options="ageRanges" v-model="form.ageGroup"></b-form-select>
            </b-col>
          </b-row>
        </b-container>
        <b-button type="submit" variant="primary" class='w-100' :disabled="submitDisabled">Schedule</b-button>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script>
import { sendEmail } from '../utils/actions';

import WindowMixin from '../mixins/window.mixin';

export default {
  name: 'mb-contact-form',
  data: () => ({
    emailSent: false,
    form: {
      name: '',
      email: '',
      phone: '',
      ageGroup: null
    },
    ageRanges: [
      { value: null, text: 'Enter your age range' },
      { value: '5-9', text: '5-9' },
      { value: '10-15', text: '10-15' },
      { value: '16-18', text: '16-18' },
      { value: '19-25', text: '19-25' },
      { value: '26-30', text: '26-30' },
      { value: '30-40', text: '30-40' },
      { value: '40+', text: '40+' },
    ]
  }),
  computed: {
    submitDisabled() {
      return (
        !this.form.name ||
        (!this.form.email && !this.form.phone) ||
        !this.form.ageGroup
      );
    }
  },
  methods: {
    async sendEmail() {
      if (!this.submitDisabled) {
        return await sendEmail(this.form)
          .then(() => {
            this.emailSent = true;
            setTimeout(() => {
              this.form = { name: '', email: '', phone: '', ageGroup: null }
              this.emailSent = false;
              window.location.href = '';
            }, 5000);
          });
      }
    }
  },
  mixins: [WindowMixin]
}
</script>

<style lang="scss">
.mb-contact-form {
  text-align: left;
}
</style>