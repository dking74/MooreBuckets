<template>
  <b-card class="mb-5 mx-auto" :class="isLargerThanSmall ? 'w-50' : 'w-75'" v-bind="$attrs"
      title="Schedule a Session" title-tag="h2" align="center"
      id="contact-form">
    <b-card-body>
      <b-form class='mb-contact-form'>
        <b-container fluid class='mb-3'>
          <!-- Name field -->
          <b-row class="my-3">
            <b-col md="3">
              <label for="input-name">Name:</label>
            </b-col>
            <b-col md="9">
              <b-form-input id="input-name" placeholder="Enter your name..."></b-form-input>
            </b-col>
          </b-row>

          <!-- Email address -->
          <b-row class="my-3">
            <b-col md="3">
              <label for="input-email">Email:</label>
            </b-col>
            <b-col md="9">
              <b-form-input id="input-email" placeholder="Enter your email..."></b-form-input>
            </b-col>
          </b-row>

          <!-- Phone number -->
          <b-row class="my-3">
            <b-col md="3">
              <label for="input-phone">Phone:</label>
            </b-col>
            <b-col md="9">
              <b-form-input id="input-phone" placeholder="Enter your phone..."></b-form-input>
            </b-col>
          </b-row>

          <!-- Age Range -->
          <b-row class="my-3">
            <b-col md="3">
              <label for="input-age">Age Group:</label>
            </b-col>
            <b-col md="9">
              <b-form-select :options="ageRanges" v-model="ageGroup"></b-form-select>
            </b-col>
          </b-row>
        </b-container>
        <b-button type="submit" variant="primary" class='w-100'>Schedule</b-button>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script>
import WindowMixin from '../mixins/window.mixin';

export default {
  name: 'mb-contact-form',
  data: () => ({
    ageGroup: null,
    ageRanges: [
      { value: null, text: 'Enter your age range' },
      '5-9',
      '10-15',
      '16-18',
      '19-25',
      '26-30',
      '30-40',
      '40+'
    ]
  }),
  mixins: [WindowMixin]
}
</script>

<style lang="scss">
.mb-contact-form {
  text-align: left;
}
</style>