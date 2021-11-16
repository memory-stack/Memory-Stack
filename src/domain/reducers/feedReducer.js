export var feedReducer = {
  changeLiveFeed(state, payload) {
    state.liveFeed = payload.payload;
  },

  changeStaticFeed(state, payload) {
    state.staticFeed = payload.payload;
  },
};
