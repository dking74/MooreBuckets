<template>
  <b-container fluid='sm' class="bio-container w-75" v-bind="$attrs">
    <h2 class="bio-container--header section-header">Learn From The Best</h2>
    <BiosContainer
      header="Mark Moore"
      imageFile="/img/Mark-Moore-Bio.png"
      description="Mark has been training athletes for over two years now and is currently on the Men’s Basketball team at 
        Webster University in St. Louis. During his freshman year, he averaged 6.8 points in 18.6 minutes of play.
        He attended Hillsboro High School, where he earned various accolades. Mark was a 2x All District nominee.
        As a Junior, he was voted to the All Conference 2nd Team, and his senior year he voted to the 1st Team and was named the Conference Player of the Year.
        He helped Hillsboro to two District Championships and three Conference Championships.
        He has learned from some of the best coaches and trainers in the St. Louis area, and he is eager to pass on his knowledge."
      imageOrder="last"
    ></BiosContainer>
    <BiosContainer
      header="Matt Moore"
      imageFile="/img/Matt-Moore-Bio.png"
      description="Matt is currently an assistant coach for the St. Louis Community College women’s basketball team. This winter will be his first in St. Louis. He spent the previous 3 seasons at Westminster College in Fulton, MO. During his 3 seasons there, the Lady Blue
        Jays had a record of 46-32 with 2 SLIAC tournament berths. They also finished top-3 in the nation in rebounding 2 of those seasons. While serving as the position coach for the guards, he mentored 5 All-Conference Players, 1
        All-Region player, and 1 All-American. He also saw great improvement in 3-point % (27.2 to 33.7) and turnovers (18-16.2) in his 3 years. Prior to his years at Westminster, Matt spent time at Southeast Missouri State, where
        he was the head manager for the D-1 Redhawks. In his 2 years at SEMO, he oversaw film exchange, helped run individual workouts, and assisted in practice and scout preparation as the team made 2 Ohio Valley Conference Tournaments."
      imageOrder="start"
    ></BiosContainer>
  </b-container>
</template>

<script>
import BiosContainer from './BiosContainer.vue';

export default {
  name: 'Bios',
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