<template>
  <div class="scoreHeaderContainer">
    <div>
      <span class="currentScoreSpan">
        {{ parseInt($store.getters.currentScore) }}
        <span class="hint">Current Score</span>
      </span>
      <i class="fas fa-arrow-right"></i>
      <span class="targetScoreSpan">
        {{ $store.state.targetScore }}
        <span class="hint">Target Score</span>
      </span>
    </div>

    <span class="milesToFix">
      {{ $store.getters.milesToFix }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ScoreHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.scoreHeaderContainer
  display: flex
  flex-direction: column
  align-items: center
  gap: 1rem
  align-self: center

  *
    font-size: 5rem

  i
    font-size: 2rem

  div
    display: flex
    flex-direction: row
    align-items: center
    gap: 1rem


.currentScoreSpan, .targetScoreSpan
  position: relative
  padding-bottom: .25rem

.hint
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
  font-size: .95rem
  white-space: nowrap
  color: $secondary-text-color
</style>
