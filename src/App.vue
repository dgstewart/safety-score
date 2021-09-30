<template>
  <router-view v-if="$store.state.loaded" id="routerView" />
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("init");
  },
};
</script>

<style lang="sass">
html, body
  margin: 0
  padding: 0
  background: $primary-background
  color: $primary-text-color
  height: 100%

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  height: 100%

  display: grid
  grid-template-columns: 1fr 800px 1fr
  grid-template-rows: auto
  grid-template-areas: "lm content rm"

  @media screen and (max-width: 900px)
    grid-template-columns: auto 1fr auto

#routerView
  grid-area: content
</style>
