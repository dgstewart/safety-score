<template>
  <router-view id="routerView" />
</template>

<style lang="sass">
html, body
  margin: 0
  padding: 0
  background: $primary-background
  color: $primary-text-color

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  width: 100%

  display: grid
  grid-template-columns: 1fr 800px 1fr
  grid-template-rows: auto
  grid-template-areas: "lm content rm"

#routerView
  grid-area: content
</style>
