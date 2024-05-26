<template>
  <div>
    <input type="text" placeholder="SEARCH" v-model="searchQ" />
    <button v-on:click="changeNews">Submit</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      searchQ: "",
    };
  },
  methods: {
    changeNews() {
      this.$emit("newsChanged", this.searchQ);
      this.searchQ = "";
    },
  },
};
</script>

<!-- <template>
  <div>
    <input type="text" placeholder="SEARCH" v-model="query" />
    <button @click="changeNews">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "", // Здесь мы используем обычное свойство для хранения значения
    };
  },
  methods: {
    handleChange(event) {
      this.query = event.target.value; // Обновляем значение свойства query
    },
    changeNews() {
      this.$emit("newsChanged", this.query);
      this.query = ""; // Сбрасываем значение после отправки запроса
    },
  },
};
</script> -->

<!-- <template>
  <div>
    <input type="text" placeholder="SEARCH" v-model="searchQuery" />
    <button @click="searchNews">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "", // используем searchQuery вместо searchQ
    };
  },
  methods: {
    searchNews() {
      this.$emit("search", this.searchQuery); // Отправляем событие с запросом
    },
  },
};
</script> -->

<style></style>
