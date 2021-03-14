<template>
  <b-card class="bios-container">
    <b-row>
      <b-col class="bios-header">{{ header }}</b-col>
    </b-row>
    <b-row cols="8">
      <template v-if="imageOrder === 'start'">
        <b-col cols="3">
          <b-img rounded="circle" :src="imageFile" width="150px"></b-img>
        </b-col>
        <b-col cols="9">
          <p class="bio-text">{{ description }}</p>
        </b-col>
      </template>

      <template v-else>
        <b-col cols="9">
          <p class="bio-text">{{ description }}</p>
        </b-col>
        <b-col cols="3">
          <b-img rounded="circle" :src="imageFile" width="150px"></b-img>
        </b-col>
      </template>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'BiosContainer',
  props: ['header', 'description', 'imageFile', 'imageOrder'],
  computed: {
    baseUrl() {
      return window.location.host;
    }
  },
  methods: {
    isLargeScreen() {
      return window.innerHeight > 1023;
    }
  }
}
</script>

<style>
.bios-container {
  margin-bottom: 20px;
}
.bios-header {
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
}
.bio-text {
  font-size: 14px;
}
</style>