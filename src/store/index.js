// import Vue from "vue";
// import Vuex from "vuex";
// import axios from "axios";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     drawer: false,
//     apiKey: "169d35c90e224608abfc085552328977",
//     articles: [],
//     sources: [],
//     searchQuery: "",
//     errors: [],
//   },
//   mutations: {
//     SET_DRAWER(state, value) {
//       state.drawer = value;
//     },
//     SET_ARTICLES(state, articles) {
//       state.articles = articles;
//     },
//     SET_SOURCES(state, sources) {
//       state.sources = sources;
//     },
//     SET_ERRORS(state, errors) {
//       state.errors = errors;
//     },
//     SET_SEARCH_QUERY(state, query) {
//       state.searchQuery = query;
//     },
//   },
//   actions: {
//     fetchNewsByQuery({ commit, state }, query) {
//       return new Promise((resolve, reject) => {
//         axios
//           .get(
//             `https://newsapi.org/v2/everything?q=${query}&apiKey=${state.apiKey}`
//           )
//           .then((response) => {
//             commit(
//               "SET_ARTICLES",
//               response.data.articles.filter((article) => article.urlToImage)
//             );
//             resolve(response);
//           })
//           .catch((error) => {
//             commit("SET_ERRORS", [...state.errors, error]);
//             reject(error);
//           });
//       });
//     },
//     fetchTopHeadlines({ commit, state }) {
//       axios
//         .get(
//           `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${state.apiKey}`
//         )
//         .then((response) => {
//           commit("SET_ARTICLES", response.data.articles);
//         })
//         .catch((e) => {
//           commit("SET_ERRORS", [...state.errors, e]);
//         });
//     },
//     fetchSources({ commit, state }) {
//       axios
//         .get(
//           `https://newsapi.org/v2/sources?language=en&apiKey=${state.apiKey}`
//         )
//         .then((response) => {
//           commit("SET_SOURCES", response.data.sources);
//         })
//         .catch((e) => {
//           commit("SET_ERRORS", [...state.errors, e]);
//         });
//     },
//     setResource({ commit }, resource) {
//       commit("SET_RESOURCE", resource);
//     },
//     fetchNewsBySource({ commit, state }, source) {
//       axios
//         .get(
//           `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${state.apiKey}`
//         )
//         .then((response) => {
//           commit(
//             "SET_ARTICLES",
//             response.data.articles.filter((article) => article.urlToImage)
//           );
//         })
//         .catch((e) => {
//           commit("SET_ERRORS", [...state.errors, e]);
//         });
//     },
//   },
// });
