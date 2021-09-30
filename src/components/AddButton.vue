<template>
  <div>
    <button @click="clicked()"><i class="fas fa-plus"></i></button>
  </div>
</template>

<script>
export default {
  name: "AddButton",
  emits: ["click"],
  methods: {
    clicked() {
      this.$emit("click");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
button
  position: fixed
  bottom: 1rem
  right: 1rem

  cursor: pointer
  width: 3rem
  height: 3rem
  outline: none
  border: none
  text-decoration: none
  border-radius: 5rem
  background: $secondary-color
  color: $primary-text-color
  font-size: 1.75rem
  display: flex
  justify-content: center
  align-items: center

  transition: background .25s

  &:hover
    background: $primary-color
</style>
