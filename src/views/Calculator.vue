<template>
  <div class="calculator">
    <transition name="fade">
      <AddScorePopup
        @dismissPopup="dismissAddScorePopup()"
        v-if="addScorePopupVisible"
      />
    </transition>
    <ScoreHeader />
    <ScoreList msg="Welcome to Your Vue.js App" />
    <AddButton id="userAddButton" @click="showAddScorePopup()" />
  </div>
</template>

<script>
// @ is an alias to /src
import AddScorePopup from "@/components/AddScorePopup.vue";
import ScoreHeader from "@/components/ScoreHeader.vue";
import ScoreList from "@/components/ScoreList.vue";
import AddButton from "@/components/AddButton.vue";

export default {
  name: "Home",
  components: {
    AddScorePopup,
    ScoreHeader,
    ScoreList,
    AddButton,
  },
  data() {
    return {
      addScorePopupVisible: false,
    };
  },
  methods: {
    showAddScorePopup() {
      this.addScorePopupVisible = true;
    },
    dismissAddScorePopup() {
      this.addScorePopupVisible = false;
    },
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

.fade-enter-active,
.fade-leave-active
  transition: opacity 0.1s ease-in-out, transform .1s ease-in-out

.fade-enter-from,
.fade-leave-to
  opacity: 0
  transform: scale(1.1)
</style>
