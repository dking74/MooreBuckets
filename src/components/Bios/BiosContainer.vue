<template>
  <b-card class="bios-container">
    <b-row class="mb-3">
      <b-col v-if="!isLargerThanLarge" class="bios-image--column text-center">
        <b-img
          rounded="circle"
          :src="imageFile"
          :width="imageWidth"
          style="height: 100px; width: 100px"
        ></b-img>
      </b-col>
    </b-row>
    <b-row cols="8">
      <template v-if="imageOrder === 'start'">
        <b-col
          lg="3"
          v-if="isLargerThanLarge"
          class="bios-image--column text-center"
        >
          <b-img rounded="circle" :src="imageFile"></b-img>
        </b-col>
        <b-col cols="12" lg="9" class="text-left">
          <p class="bio-text">
            <b-col class="bios-header px-0">{{ header }}</b-col>
            {{ isLargerThanLarge ? description : shortDescription }}
          </p>
        </b-col>
      </template>

      <template v-else>
        <b-col cols="12" lg="9">
          <p class="bio-text">
            <b-col class="bios-header px-0">{{ header }}</b-col>
            {{ isLargerThanLarge ? description : shortDescription }}
          </p>
        </b-col>
        <b-col
          lg="3"
          v-if="isLargerThanLarge"
          class="bios-image--column text-center"
        >
          <b-img rounded="circle" :src="imageFile"></b-img>
        </b-col>
      </template>
    </b-row>
  </b-card>
</template>

<script>
import WindowMixin from "../../mixins/window.mixin";

export default {
  name: "BiosContainer",
  props: [
    "header",
    "description",
    "imageFile",
    "imageOrder",
    "shortDescription",
  ],
  computed: {
    baseUrl() {
      return window.location.host;
    },
    imageWidth() {
      return this.isLargerThanLarge ? "150px" : "75px";
    },
  },
  mixins: [WindowMixin],
};
</script>

<style lang="scss">
.bios-container {
  margin-bottom: 20px;
}
.bios-header {
  font-weight: bold;
  font-size: 30px;
}
.bio-text {
  font-size: 1rem;
}
.bios-image--column img {
  max-height: 200px;
}
</style>
