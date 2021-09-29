import { createStore } from "vuex";

export default createStore({
  state: {
    loaded: false,
    scores: [
      { id: 0, score: 94, distance: 193 },
      { id: 1, score: 95, distance: 27 },
      { id: 2, score: 100, distance: 32 },
      { id: 3, score: 99, distance: 44 },
    ],
    targetScore: 99.5,
  },
  getters: {
    currentScore: (state) => {
      let numerator = 0;
      let denominator = 0;
      for (let element of state.scores) {
        numerator += element.score * element.distance;
        denominator += element.distance;
      }
      return numerator / denominator;
    },
  },
  mutations: {
    setScores(state, payload) {
      state.scores = payload;
    },
    addNewScore(state, payload) {
      state.scores.push({
        id: Math.floor(Math.random() * 100000),
        score: payload.score,
        distance: payload.distance,
      });
      localStorage.setItem("scores", JSON.stringify(state.scores));
    },
  },
  actions: {
    async init({ state, commit }) {
      if (
        localStorage.getItem("scores") != "" &&
        !!localStorage.getItem("scores")
      )
        commit("setScores", JSON.parse(localStorage.getItem("scores")));
      state.loaded = true;
    },
  },
  modules: {},
});
