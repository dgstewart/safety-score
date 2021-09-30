<template>
  <div @click.self="dismissPopup()" class="popupContainer">
    <div class="popup">
      <button @click="dismissPopup()" id="closeButton">
        <i class="fas fa-times"></i>
      </button>
      <span id="title">Record A New Day</span>
      <div id="dateInputDiv" class="formInput">
        <label>Date</label>
        <div class="input">
          <i class="fas fa-calendar-day"></i>
          <myDatepicker :date="startTime" :option="option"></myDatepicker>
        </div>
      </div>
      <div id="scoreInputDiv" class="formInput">
        <label>Score</label>
        <div class="input">
          <i class="fas fa-tachometer-alt"></i>
          <input
            id="scoreInput"
            v-model="inputScore"
            type="number"
            :placeholder="0"
            min="1"
            max="100"
          />
        </div>
      </div>
      <div id="distanceInputDiv" class="formInput">
        <label>Distnace</label>
        <div class="input">
          <i class="fas fa-ruler"></i>
          <input
            id="distanceInput"
            v-model="inputDistance"
            type="number"
            :placeholder="0"
            min="1"
          />
          <span>mi.</span>
        </div>
      </div>
      <button id="confirmButton" @click="addScore()">Confirm</button>
    </div>
  </div>
</template>

<script>
import myDatepicker from "vue-datepicker";

export default {
  name: "AddScorePopup",
  components: {
    myDatepicker,
  },
  emits: ["dismissPopup"],
  data() {
    return {
      startTime: {
        time: "",
      },
      option: {
        type: "day",
        week: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        month: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        format: "MM/DD/YYYY",
        placeholder: "Weigh In Date",
        inputStyle: {
          display: "inline-block",
          paddingLeft: "20px",
          "line-height": "22px",
          height: "56px",
          width: "calc(100% - 20px)",
          "font-size": "16px",
          "box-shadow":
            "inset 3px 3px 10.5px #0a0b0b, inset -3px -3px 10.5px #222327",
          border: "none",
          color: "#818382",
          background: "#161719",
          cursor: "pointer",
        },
        color: {
          header: "#DE4F21",
          headerText: "#ffffff",
        },
        buttons: {
          ok: "Select",
          cancel: "Cancel",
        },
        overlayOpacity: 0.7, // 0.5 as default
        dismissible: true, // as true as default
      },
      inputScore: null,
      inputDistance: null,
    };
  },
  computed: {
    selectedDate() {
      return this.startTime.time;
    },
    // limitDate() {
    //   var tmpDate = new Date();
    //   return [
    //     {
    //       type: "fromto",
    //       to: tmpDate,
    //     },
    //   ];
    // },
  },
  methods: {
    dismissPopup() {
      this.$emit("dismissPopup");
    },
    addScore() {
      let tmpDate = new Date(this.startTime.time);
      let timeString =
        tmpDate.getMonth() +
        1 +
        "/" +
        tmpDate.getDate() +
        "/" +
        tmpDate.getFullYear();
      let submitData = {
        date: timeString,
        score: this.inputScore,
        distance: this.inputDistance,
      };
      this.$store.commit("addNewScore", submitData);
      this.$emit("dismissPopup");
    },
  },
  mounted() {
    let tmpDate = new Date();
    this.startTime.time =
      tmpDate.getMonth() +
      1 +
      "/" +
      tmpDate.getDate() +
      "/" +
      tmpDate.getFullYear();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.popupContainer
  z-index: 5
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: transparentize($primary-background, .05)
  display: grid
  grid-template-columns: 1fr 500px 1fr
  grid-template-rows: 1fr auto 1fr
  grid-template-areas: "top top top" "lm popup rm" "bottom bottom bottom"

  @media screen and (max-width: 550px)
    grid-template-columns: 1fr 90% 1fr

.popup
  grid-area: popup
  background: linear-gradient(145deg, lighten($primary-background, 1%), darken($primary-background, 1%))
  box-shadow: $neu-extrude
  position: relative
  border-radius: .5rem
  display: grid
  grid-template-columns: 1fr auto 1fr
  grid-template-rows: auto atuo auto auto
  grid-template-areas: "lm title top" "lm dateInput rm" "lm scoreInput rm" "lm distanceInput rm" "lm confirmButton rm"
  color: $secondary-text-color
  padding: 1rem

#title
  grid-area: title
  display: flex
  justify-content: center
  align-items: center
  margin: 2rem 0 1rem 0
  font-size: 1.5rem

  @media screen and (max-width: 550px)
    font-size: 1rem

#closeButton
  position: absolute
  top: 1rem
  right: 1rem
  margin: 0
  outline: none
  border: 1px solid transparentize($tertiary-accent-color, .8)
  display: flex
  align-items: center
  justify-content: center
  background: transparent
  box-shadow: $neu-extrude
  color: $secondary-text-color
  font-size: 1.5rem
  width: 2.5rem
  height: 2.5rem
  border-radius: .5rem
  cursor: pointer

  transition: color .3s
  &:hover
    color: $tertiary-accent-color

  @media screen and (max-width: 550px)
    top: .5rem
    right: .5rem
    font-size: 1.25rem

.formInput
  display: flex
  flex-direction: column
  align-items: flex-start
  margin: 1rem 0

  label
    margin-bottom: .25rem

  .input
    display: flex
    flex-direction: row
    width: 20rem
    font-size: 1.5rem
    border: 1px solid $secondary-background
    border-radius: .5rem
    position: relative
    overflow: hidden

    @media screen and (max-width: 550px)
      width: 17rem

    i
      align-self: center
      padding: 1rem
      @media screen and (max-width: 550px)
        font-size: 1.25rem

    span
      position: absolute
      right: .5rem
      top: 50%
      transform: translateY(-50%)
      user-select: none
      pointer-events: none
      color: transparentize($secondary-text-color, .8)

#dateInputDiv
  grid-area: dateInput

  .cov-vue-date
    width: 100% !important
    overflow: hidden

#scoreInputDiv
  grid-area: scoreInput

#scoreInput
  padding-left: .75rem
  color: $secondary-text-color
  background: transparent
  font-size: 1.5rem
  min-width: 0
  outline: none
  border: none
  border-radius: 0 .5rem .5rem 0
  box-shadow: $neu-cut

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button
    -webkit-appearance: none
    margin: 0

  /* Firefox */
  &[type=number]
    -moz-appearance: textfield

#distanceInputDiv
  grid-area: distanceInput

#distanceInput
  padding-left: .75rem
  color: $secondary-text-color
  background: transparent
  font-size: 1.5rem
  min-width: 0
  outline: none
  border: none
  border-radius: 0 .5rem .5rem 0
  box-shadow: $neu-cut

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button
    -webkit-appearance: none
    margin: 0

  /* Firefox */
  &[type=number]
    -moz-appearance: textfield

#confirmButton
  grid-area: confirmButton
  border-radius: .5rem
  padding: .25rem 1rem
  margin: 2rem 0 2rem 0
  font-size: 1.5rem
  background: $primary-background
  box-shadow: $neu-extrude
  color: $primary-text-color
  border: 1px solid transparentize($primary-accent-color, .8)
  outline: none
  cursor: pointer
  transition: border .3s, color .3s

  &:hover
    color: $primary-accent-color
    border: 1px solid $primary-accent-color
</style>
