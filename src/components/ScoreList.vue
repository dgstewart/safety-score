<template>
  <div class="scoreList">
    <ScoreEntry
      v-for="(score, index) in $store.state.scores"
      :key="index"
      :id="score.id"
      :dayNum="index + 1"
      :score="score.score"
      :distance="score.distance"
    />
  </div>
</template>

<script>
import ScoreEntry from "@/components/ScoreEntry.vue";

export default {
  name: "ScoreList",
  props: ["msg"],
  components: { ScoreEntry },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.scoreList
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-between
  gap: 2rem
</style>
