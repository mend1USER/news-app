<template>
  <div>
    <div>!!!!!</div>
    <div
      v-for="(keyword, index) in keywords"
      :key="index"
      @click="filterNews(keyword)"
    >
      {{ keyword }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: [
        "Home",
        "News",
        "Sport",
        "Business",
        "Innovation",
        "Culture",
        "Travel",
        "Earth",
      ],
    };
  },
  methods: {
    filterNews(keyword) {
      this.$router.push({ name: "FilteredNews", params: { keyword: keyword } });
    },
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
