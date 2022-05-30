<template>
  <b-container fluid="sm" class="bio-container responsive-card" v-bind="$attrs">
    <h2 class="bio-container--header section-header">Learn From The Best</h2>
    <BiosContainer
      v-for="(bio, index) in bios"
      :key="bio.header"
      :header="bio.header"
      :imageFile="bio.imageFile"
      :description="bio.description"
      :shortDescription="bio.shortDescription"
      :imageOrder="index % 2 === 0 ? 'last' : 'start'"
    ></BiosContainer>
  </b-container>
</template>

<script>
import BiosContainer from "./BiosContainer.vue";
import { bios } from "../../utils/data";

export default {
  name: "Bios",
  async mounted() {
    this.bios = bios;
  },
  data: () => ({
    bios: [],
  }),
  components: {
    BiosContainer,
  },
};
</script>

<style>
.bio-container {
  margin: 50px;
}

.bio-container--header {
  color: var(--text-primary-color);
}

.bios-header {
  font-family: "Raleway", sans-serif !important;
  font-weight: 800 !important;
  margin-bottom: 1rem;
}
</style>
