export const state = () => ({
  homecards: [],
});

export const getters = {
  getHomecards: (state) => state.homecards,
};

export const actions = {
  async loadHomecards({ commit }) {
    const response = await fetch(
      process.env.baseUrl + process.env.homecardsAccess
    );
    let homecards = await response.json();
    commit("setHomecards", homecards);
  },
};

export const mutations = {
  setHomecards(state, courses) {
    state.homecards = courses;
  },
};
