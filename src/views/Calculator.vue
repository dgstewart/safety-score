<template>
  <div class="calculator">
    <ScoreHeader />
    <ScoreList msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ScoreHeader from "@/components/ScoreHeader.vue";
import ScoreList from "@/components/ScoreList.vue";

export default {
  name: "Home",
  components: {
    ScoreHeader,
    ScoreList,
  },
};
</script>

<style lang="sass" scoped>
.calculator
  padding: 2rem
  display: flex
  flex-direction: column
  // border: 3px solid $tertiary-background
  gap: 2rem
</style>
