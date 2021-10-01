<template>
  <div class="scoreHeaderContainer">
    <teleport to="body">
      <transition name="fade">
        <ChangeTargetPopup
          @dismissPopup="dismissTargetScorePopup()"
          v-if="targetScorePopupVisible"
        />
      </transition>
    </teleport>
    <div>
      <span class="currentScoreSpan">
        {{ currentScore }}
        <span class="hint">Current Score</span>
      </span>
      <i class="fas fa-arrow-right"></i>
      <span class="targetScoreSpan" @click="showTargetScorePopup()">
        {{ Math.round($store.state.targetScore) }}
        <span class="hint">Target Score</span>
      </span>
    </div>

    <div class="milesToFix">
      <span>{{ milesToGo }}</span>
      <span class="hint">Miles to go!</span>
    </div>
  </div>
</template>

<script>
import ChangeTargetPopup from "@/components/ChangeTargetPopup.vue";

export default {
  name: "ScoreHeader",
  components: { ChangeTargetPopup },
  data() {
    return {
      targetScorePopupVisible: false,
    };
  },
  computed: {
    currentScore() {
      let tmp = this.$store.getters.currentScore;
      if (!isNaN(tmp)) return Math.round(tmp);
      else return 0;
    },
    milesToGo() {
      if (this.currentScore == Math.round(this.$store.state.targetScore))
        return 0;
      return Math.max(Math.round(this.$store.getters.milesToFix), 0);
    },
  },
  methods: {
    showTargetScorePopup() {
      this.targetScorePopupVisible = true;
    },
    dismissTargetScorePopup() {
      this.targetScorePopupVisible = false;
    },
  },
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

  @media screen and (max-width: 900px)
    *
      font-size: 3rem

.currentScoreSpan, .targetScoreSpan, .milesToFix
  position: relative
  padding-bottom: .25rem

.targetScoreSpan
  cursor: pointer

.hint
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
  font-size: .95rem
  white-space: nowrap
  color: $secondary-text-color

  @media screen and (max-width: 900px)
    font-size: .65rem

.fade-enter-active,
.fade-leave-active
  transition: opacity 0.1s ease-in-out, transform .1s ease-in-out

.fade-enter-from,
.fade-leave-to
  opacity: 0
  transform: scale(1.1)
</style>
