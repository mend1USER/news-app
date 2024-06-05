<template>
  <v-app light>
    <SideMenu
      :drawer="drawer"
      :api_key="api_key"
      @selectsource="setResource"
    ></SideMenu>
    <v-toolbar fixed app light clipped-left color="primary" class="elevation-2">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="white--text"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">News App</v-toolbar-title>
      <div class="btn-right-top">
        <!-- Используйте router-link для ссылки на страницу с ключевыми словами -->
        <router-link :to="{ name: 'keywords' }" class="btn-right-top">
          Navi
        </router-link>
      </div>
      <div class="row">
        <app-search v-on:newsChanged="getNews"></app-search>
      </div>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <MainContent :articles="articles" @showDetails="showDetails">
        </MainContent>
      </v-container>
    </v-content>
    <v-footer class="secondary" app>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made with
            <v-icon class="red--text">favorite</v-icon>
            by
            <a class="white--text" href="https://vuetifyjs.com" target="_blank"
              >Vuetify</a
            >
            and
            <a
              class="white--text"
              href="https://github.com/rachidsakara"
              target="_blank"
              >Mendy</a
            >
          </div>
        </v-flex>
      </v-layout>
    </v-footer>

    <!-- Модальное окно -->
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="headline">{{
          selectedArticle.title
        }}</v-card-title>
        <v-img :src="selectedArticle.urlToImage" height="200px"></v-img>
        <v-card-text>{{ selectedArticle.content }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Закрыть</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
import axios from "axios";
import MainContent from "./components/MainContent.vue";
import SideMenu from "./components/SideMenu.vue";
import Search from "./components/Search.vue";
export default {
  components: {
    MainContent,
    SideMenu,
    "app-search": Search,
  },
  data() {
    return {
      drawer: false,
      api_key: "6bd6c9a75fdb47b888def4eaec38d6c2",
      articles: [],
      searchQ: "",
      errors: [],
      dialog: false,
      selectedArticle: {},
      selectedArticle: {},
    };
  },
  created() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" +
          this.api_key
      )
      .then((response) => {
        this.articles = response.data.articles;
        console.log("data:");
        console.log(response.data.articles);
      })
      .catch((e) => {
        this.errors.push(e);
      });
    {
      this.fetchTopHeadlines();
    }
  },

  methods: {
    fetchTopHeadlines() {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" +
            this.api_key
        )
        .then((response) => {
          this.articles = response.data.articles;
          this.filteredArticles = this.articles;
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
    setResource(source) {
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?sources=" +
            source +
            "&apiKey=" +
            this.api_key
        )
        .then((response) => {
          this.articles = response.data.articles.filter(
            (article) => article.urlToImage
          );
          console.log(response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },

    getNews: function (query) {
      var that = this;
      var url =
        "https://newsapi.org/v2/everything?" +
        "q=" +
        query +
        "&" +
        "apiKey=6bd6c9a75fdb47b888def4eaec38d6c2";
      axios
        .get(url)
        .then((response) => {
          this.articles = response.data.articles.filter(
            (article) => article.urlToImage
          );
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    showDetails(article) {
      this.selectedArticle = article;
      this.dialog = true;
    },
    mounted: function () {
      this.getNews(this.searchQ);
    },
  },
};
</script>
