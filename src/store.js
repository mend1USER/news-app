import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    api_key: "6bd6c9a75fdb47b888def4eaec38d6c2",
    articles: [],
    searchQ: "",
    errors: [],
  },
  mutations: {
    SET_DRAWER(state, payload) {
      state.drawer = payload;
    },
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
    SET_SEARCH_QUERY(state, query) {
      state.searchQ = query;
    },
    SET_ERRORS(state, errors) {
      state.errors = errors;
    },
  },
  actions: {
    fetchTopHeadlines({ commit, state }) {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${state.api_key}`
        )
        .then((response) => {
          commit("SET_ARTICLES", response.data.articles);
        })
        .catch((error) => {
          commit("SET_ERRORS", [error]);
        });
    },
    fetchArticlesBySource({ commit, state }, source) {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${state.api_key}`
        )
        .then((response) => {
          commit("SET_ARTICLES", response.data.articles);
        })
        .catch((error) => {
          commit("SET_ERRORS", [error]);
        });
    },
    searchArticles({ commit, state }, query) {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=${state.api_key}`
        )
        .then((response) => {
          commit("SET_ARTICLES", response.data.articles);
        })
        .catch((error) => {
          commit("SET_ERRORS", [error]);
        });
    },
  },
  getters: {
    articles: (state) => state.articles,
    drawer: (state) => state.drawer,
    searchQ: (state) => state.searchQ,
    errors: (state) => state.errors,
  },
});
