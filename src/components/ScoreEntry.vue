<template>
  <transition name="fade">
    <div v-if="shown" class="scoreEntryContainer" @click="remove()">
      <div class="cover">
        <i class="fas fa-trash"></i>
      </div>
      <div class="titleBubble">
        <span>
          {{ dayNum }}
        </span>
      </div>
      <div class="score row">
        <i class="fas fa-tachometer-alt"></i>
        <span class="scoreSpan">{{ score }}</span>
      </div>
      <div class="distance row">
        <i class="fas fa-ruler"></i>
        <span>
          {{ distance }}
          <span class="unit">(mi)</span>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ScoreEntry",
  props: ["id", "dayNum", "score", "distance"],
  data() {
    return {
      shown: false,
    };
  },
  methods: {
    remove() {
      setTimeout(() => {
        this.$store.commit("removeScore", this.id);
      }, 300);
      this.shown = false;
    },
  },
  mounted() {
    this.shown = true;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.scoreEntryContainer
  position: relative
  display: flex
  flex-direction: column
  padding: 1rem
  box-shadow: $neu-extrude
  align-items: center
  cursor: pointer

.cover
  display: flex
  justify-content: center
  align-items: center
  position: absolute
  left: 0
  top: 0
  width: 100%
  height: 100%
  opacity: 0
  background: transparentize($tertiary-accent-color, .9)
  backdrop-filter: blur(1px)
  transition: opacity .25s

  &:hover
    opacity: 1

  i
    color: transparentize($tertiary-accent-color, .4)
    font-size: 2.5rem

.titleBubble
  border: 1px solid $secondary-color
  border-radius: 10rem
  width: 35px
  height: 35px
  display: flex
  justify-content: center
  align-items: center

  span
    font-size: 1.5rem

.row
  min-width: 100px
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-between
  gap: .5rem

  span
    font-size: 1.25rem

  i
    color: darken($primary-color, 10%)

.score
  span
    font-size: 1.25rem
  i
    color: darken($primary-color, 10%)

.distance > span > .unit
  color: $secondary-text-color
  font-size: .75rem

.fade-enter-active,
.fade-leave-active
  transition: opacity .3s ease-in-out, transform .3s ease-in-out

.fade-enter-from,
.fade-leave-to
  opacity: 0
  transform: scale(.9) translateY(50%)
</style>
