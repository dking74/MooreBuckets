<template>
  <b-container fluid='sm' class="bio-container w-75" v-bind="$attrs">
    <h2 class="bio-container--header section-header">Learn From The Best</h2>
    <BiosContainer v-for="(bio, index) in bios" :key="bio.header"
      :header="bio.header"
      :imageFile="bio.imageFile"
      :description="bio.description"
      :imageOrder="index % 2 === 0 ? 'last' : 'start'"
    ></BiosContainer>
  </b-container>
</template>

<script>
import BiosContainer from './BiosContainer.vue';
import { bios } from '../../utils/data';

export default {
  name: 'Bios',
  async mounted() {
    this.bios = bios;
  },
  data: () => ({
    bios: []
  }),
  components: {
    BiosContainer,
  }
}
</script>

<style>
.bio-container {
  margin: 50px;
}

.bio-container--header {
  color: #FFFFFF;
}
</style>