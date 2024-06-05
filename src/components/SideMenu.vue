<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    app
    clipped
    class="drawer-style scrollbar-w-6 scrollbar-track-F5F5F5 scrollbar-thumb-F90"
    id="style-1"
  >
    <v-list dense class="pt-3 white--text bg-blue-500 border-blue-500">
      <v-list-tile
        v-for="source in sources"
        :key="source.id"
        @click="selectSource(source.id)"
      >
        <v-list-tile-action>
          <v-avatar size="32px">
            <img
              class="img-circle elevation-7 mb-1"
              :src="getImgUrl(source.id)"
            />
          </v-avatar>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ source.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import axios from "axios";

export default {
  props: {
    api_key: String,
    drawer: Boolean,
  },

  data: () => ({
    sources: [],
    errors: [],
  }),

  created() {
    axios
      .get("https://newsapi.org/v2/sources?language=en&apiKey=" + this.api_key)
      .then((response) => {
        //this.articles = response.data.articles
        this.sources = response.data.sources;
        console.log("data:");
        console.log(response.data.sources);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  methods: {
    getImgUrl(pic) {
      return require("../assets/images/" + pic + ".png");
    },

    selectSource(source) {
      this.$emit("selectsource", source);
    },
  },
};
</script>

<style scoped>
/* Включите стили Tailwind CSS */
@tailwind base;
@tailwind components;
@tailwind utilities;

.scrollbar-w-6 {
  width: 6px;
}

.scrollbar-track-F5F5F5 {
  background-color: #f5f5f5;
}

.scrollbar-thumb-F90 {
  background-color: #f90;
  background-image: -webkit-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
}

.bg-blue-500 {
  background-color: #2196f3 !important;
}

.border-blue-500 {
  border-color: #2196f3 !important;
}
</style>
